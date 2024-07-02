import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setEndpoint(conf.appwriteProjectId);

    this.storage = new Storage(this.client);
  }
  //---------------------FILE UPLOAD SERVICES---------------------

  async uploadFile(file) {
    try {
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

  getFilePreview({ fileId }) {
    try {
      return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("StorageService :: getFilePreview :: error :: ", error);
    }
  }
}
