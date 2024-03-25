import conf from "@/app/conf/config"
import { Client, Account } from 'appwrite';
export const client = new Client();

client
    .setEndpoint(conf.appwriteURl)
    .setProject(conf.appwriteProjectID);
    
export const account = new Account(client);
export { ID } from 'appwrite';