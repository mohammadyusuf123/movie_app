
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!


import { Client, Databases, Query } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);
const databases = new Databases(client);

export const updateSearchCount= async (query: string ,movies: Movie[]) => {
  const result = await databases.listDocuments(COLLECTION_ID, query,[
    Query.equal('searchTerm', query),
  ])
}
