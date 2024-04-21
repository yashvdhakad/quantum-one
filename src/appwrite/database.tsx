import conf from "@/conf/config";
import { Client, Databases, ID } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases: any;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
  }

  async getPost(slug: any) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        ID.unique(),
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost() :: ", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
