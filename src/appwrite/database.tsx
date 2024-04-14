import conf from "@/app/conf/config";
import { Client, Databases, } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases: any;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURl)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
  }

  async getPost(slug: any) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
    } catch (error) {
      console.log("Appwrite Service :: getPost() :: ", error);
      return false;
    }
  }
}
