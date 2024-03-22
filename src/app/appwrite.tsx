import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f731ae50efd0f01482');
export const account = new Account(client);
export { ID } from 'appwrite';