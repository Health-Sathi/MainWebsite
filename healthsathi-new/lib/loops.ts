const LOOPS_API_BASE_URL = 'https://app.loops.so/api/v1';

// Type definitions for contact properties
interface ContactProperties {
  email: string;
  [key: string]: any;
}

// Helper function to make API requests
async function makeRequest(endpoint: string, method: string, data?: any) {
  const response = await fetch(`${LOOPS_API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
}

// Function to create or update a contact
export async function createOrUpdateContact(properties: ContactProperties) {
  try {
    return await makeRequest('/contacts/create', 'POST', {
      email: properties.email,
      properties: properties,
    });
  } catch (error) {
    console.error('Error creating/updating contact:', error);
    throw error;
  }
}

// Function to send an event
export async function sendEvent(email: string, eventName: string, properties?: Record<string, any>) {
  try {
    return await makeRequest('/events/send', 'POST', {
      email,
      eventName,
      properties,
    });
  } catch (error) {
    console.error('Error sending event:', error);
    throw error;
  }
}

// Function to send a transactional email
export async function sendTransactionalEmail(
  email: string,
  transactionalId: string,
  data?: Record<string, any>
) {
  try {
    return await makeRequest('/transactional/send', 'POST', {
      email,
      transactionalId,
      data,
    });
  } catch (error) {
    console.error('Error sending transactional email:', error);
    throw error;
  }
} 