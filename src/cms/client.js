/**
 * CMS Client — Abstraction Layer
 * 
 * This module provides a clean interface between the React UI
 * and whatever CMS provider is eventually selected.
 * 
 * CURRENT IMPLEMENTATION: Local JSON content files
 * 
 * FUTURE: Replace the fetch functions with calls to:
 *  - Sanity.io (recommended candidate)
 *  - Contentful
 *  - Strapi
 *  - DatoCMS
 *  - or another headless CMS
 * 
 * The rest of the application imports from this module only,
 * so swapping providers requires changes here alone.
 */

/**
 * Fetch homepage content
 * @returns {Promise<import('./types').HomePage>}
 */
export async function getHomePage() {
  const response = await fetch('/content/homepage.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch homepage content: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

/**
 * Fetch about page content
 * @returns {Promise<import('./types').AboutPage>}
 */
export async function getAboutPage() {
  const response = await fetch('/content/about.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch about content: ${response.status}`);
  }
  return response.json();
}

/**
 * Fetch speaking & workshops page content
 * @returns {Promise<import('./types').SpeakingWorkshopsPage>}
 */
export async function getSpeakingWorkshopsPage() {
  const response = await fetch('/content/speaking-workshops.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch speaking-workshops content: ${response.status}`);
  }
  return response.json();
}

/**
 * Fetch site settings
 * @returns {Promise<import('./types').SiteSettings>}
 */
export async function getSiteSettings() {
  const response = await fetch('/content/site-settings.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch site settings: ${response.status}`);
  }
  return response.json();
}

/**
 * Fetch theme settings (color overrides)
 * @returns {Promise<import('./types').ThemeSettings>}
 */
export async function getThemeSettings() {
  try {
    const response = await fetch('/content/theme-settings.json');
    if (!response.ok) return {};
    return response.json();
  } catch {
    // Theme settings are optional — return empty to use defaults
    return {};
  }
}

/**
 * Fetch a media asset by ID
 * @param {string} id
 * @returns {Promise<import('./types').MediaAsset | null>}
 */
export async function getMediaAsset(id) {
  try {
    const response = await fetch('/content/media.json');
    if (!response.ok) return null;
    const media = await response.json();
    return media.find((item) => item.id === id) || null;
  } catch {
    return null;
  }
}
