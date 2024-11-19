import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setProject(conf.appwriteProjectId);

    this.storage = new Storage(this.client);
  }
  //---------------------FILE UPLOAD SERVICES---------------------

  async uploadFile(file) {
    try {
      console.log(file);//Debugging
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("StorageService :: uploadFile :: error :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("StorageService :: deleteFile :: error :: ", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      const preview = await this.storage.getFilePreview(conf.appwriteBucketId, fileId);
      return preview;
    } catch (error) {
      console.log("StorageService :: getFilePreview :: error :: ", error);
      return null;
    }
  }
}

const storageService = new StorageService();

export default storageService;
