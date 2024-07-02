import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("AuthService :: createAccount :: error :: ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("AuthService :: login :: error :: ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AuthService :: getCurrentUser :: error :: ", error);
    }

    return null;

    //reason for this null is: incase u dont get any return in the try part it will return null(otherwise also it would have returned that) cuz catch part is for when u couldnt even reach out...also u can do the if else method (like u did in the createUser part) instead of returning null like this
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("AuthService :: logout :: error :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
