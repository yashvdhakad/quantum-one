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

  async getOrders() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteIOCollectionID,
      );
    } catch (error) {
      console.log("Appwrite Service :: getOrders() :: ", error);
      return false;
    }
  }

  async addOrder(slug: any) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteIOCollectionID,
        ID.unique(),
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: addOrder() :: ", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
