import { Client, Databases, ID, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('web-healthsathi')
    .setLocale('en-US'); // Add locale for better error handling

// Initialize Appwrite services
export const databases = new Databases(client);
export const account = new Account(client);

export const DATABASE_ID = 'HealthSathiMainContactUs'; // Database ID
export const CONTACTS_COLLECTION_ID = 'HomePageContact'; // Collection ID for contact form submissions

export { ID };