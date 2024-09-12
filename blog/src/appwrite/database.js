import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

export class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setEndpoint(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async createPost({ slug, title, content, userId, featuredImage, status }) {
    try {
      const doc = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, userId, featuredImage, status }
      );
      return doc;
    } catch (error) {
      console.log("DatabaseService :: createPost :: error :: ", error);
    }
  }

  async updatePost({ slug, title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("DatabaseService :: updatePost :: error :: ", error);
    }
  }

  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("DatabaseService :: deletePost :: error :: ", error);
      return false;
    }
  }

  async getPost({ slug }) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("DatabaseService :: getPost :: error :: ", error);
      return false;
    }
  }

  async getAllActivePosts() {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status", ["active"])]
      );
      return true;
    } catch (error) {
      console.log("DatabaseService :: getAllActivePosts :: error :: ", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
