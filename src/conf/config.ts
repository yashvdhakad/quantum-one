const conf = {
  appwriteURL: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectID: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
  appwriteIOCollectionID: String(
    process.env.NEXT_PUBLIC_APPWRITE_IO_COLLECTION_ID
  ),
};

export default conf;
