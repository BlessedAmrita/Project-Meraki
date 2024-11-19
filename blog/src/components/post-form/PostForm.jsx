import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, RTE, Select } from '../index.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import storageService from '../../appwrite/storage';
import databaseService from '../../appwrite/database.js';

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        console.log("Form submitted", data);//debugging
        if (post) {
            const file = data.image[0] ? storageService.uploadFile(data.image[0]) : null;
            if (file) {
                storageService.deleteFile(post.featuredImage);
            }
            const dbPost = await databaseService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });
            if (dbPost) {
                console.log("Created post:", dbPost); //debugging
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await storageService.uploadFile(data.image[0]);

            if (file) {
                console.log("User data:", userData);//debugging
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await databaseService.createPost({
                    ...data,
                    userId: userData.userData.$id,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "").replace(/\s/g, '-');
        }
        return '';
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col lg:flex-row gap-6 p-8 bg-gray-900 text-white rounded-lg shadow-xl">
            {/* Left Column: Title, Slug and Content */}
            <div className="w-full lg:w-2/3 space-y-6">
                <Input
                    label="Title:"
                    placeholder="Enter Post Title"
                    className="mb-4 p-4 bg-gray-800 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug:"
                    placeholder="Enter Post Slug"
                    className="mb-4 p-4 bg-gray-800 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content:" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            {/* Right Column: Featured Image and Status */}
            <div className="w-full lg:w-1/3 space-y-6">
                <Input
                    label="Featured Image:"
                    type="file"
                    className="mb-4 p-4 bg-gray-800 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={storageService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full rounded-lg object-cover shadow-md"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4 p-4 bg-gray-800 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-600" : "bg-blue-600"} className="w-full py-3 text-xl font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none transition duration-300">
                    {post ? "Update Post" : "Create Post"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;
