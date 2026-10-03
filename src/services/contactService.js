/**
 * Contact Service Abstraction
 * 
 * PENDING ACTUAL PROVIDER CONFIGURATION
 * 
 * This service handles form submissions from the Contact page.
 * It is currently using a mock implementation until the production
 * form provider (e.g., Formspree, SendGrid, custom serverless function)
 * is finalized and configured.
 */

/**
 * Submit an inquiry
 * @param {Object} payload The structured inquiry data
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export async function submitInquiry(payload) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log('Submitting inquiry payload:', payload);

  // Simulate success (90% of the time) or failure (10% of the time)
  // For testing reliability, we'll just always succeed unless the email is 'fail@example.com'
  if (payload.email === 'fail@example.com') {
    throw new Error('Simulated network or provider failure.');
  }

  return { success: true };
}
