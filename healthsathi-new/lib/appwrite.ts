import { Client, Databases, Storage } from 'appwrite';

// Environment variables should be added in your project settings
const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
const contactFormCollectionId = process.env.NEXT_PUBLIC_CONTACT_COLLECTION_ID || '';

// Initialize the Appwrite client
export const client = new Client();
client
  .setEndpoint(endpoint)
  .setProject(projectId);

// Initialize Appwrite services
export const databases = new Databases(client);
export const storage = new Storage(client);

// Helper functions for data submission
export const submitContactForm = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    const response = await databases.createDocument(
      databaseId,
      contactFormCollectionId,
      'unique()',
      data
    );
    return response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Helper function to get testimonials or other data
export const getCollectionData = async (collectionId: string, queries = []) => {
  try {
    const response = await databases.listDocuments(
      databaseId,
      collectionId,
      queries
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching collection data:', error);
    return [];
  }
}; 