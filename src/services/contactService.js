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
 * Notification destination for all inquiries:
 * hamzakhan21@ku.edu.tr
 */
export const NOTIFICATION_DESTINATION = 'hamzakhan21@ku.edu.tr';

/**
 * Submit an inquiry
 * @param {Object} payload The structured inquiry data
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export async function submitInquiry(payload) {
  // Destination: hamzakhan21@ku.edu.tr
  const submissionData = {
    ...payload,
    destination: NOTIFICATION_DESTINATION
  };

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  console.log(`Submitting inquiry to ${NOTIFICATION_DESTINATION}:`, submissionData);

  // Failure simulation hook for QA testing retry handling without invalid domain
  if (payload.email === 'test-fail@qa.internal' || payload.simulateFailure) {
    throw new Error('Simulated network or provider failure for QA testing.');
  }

  return { success: true, destination: NOTIFICATION_DESTINATION };
}
