import { useState, useEffect } from 'react';
import { getHomePage, getSiteSettings, getThemeSettings } from './client';

/**
 * React hook to fetch homepage content from CMS
 */
export function useHomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getHomePage()
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

/**
 * React hook to fetch site settings from CMS
 */
export function useSiteSettings() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getSiteSettings()
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

/**
 * React hook to fetch about page content from CMS
 */
export function useAboutPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    import('./client').then(({ getAboutPage }) => {
      getAboutPage()
        .then((result) => {
          if (!cancelled) {
            setData(result);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!cancelled) {
            setError(err);
            setLoading(false);
          }
        });
    });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

/**
 * React hook to fetch speaking & workshops page content from CMS
 */
export function useSpeakingWorkshopsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    import('./client').then(({ getSpeakingWorkshopsPage }) => {
      getSpeakingWorkshopsPage()
        .then((result) => {
          if (!cancelled) {
            setData(result);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!cancelled) {
            setError(err);
            setLoading(false);
          }
        });
    });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

/**
 * React hook to fetch theme settings from CMS
 */
export function useThemeSettings() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getThemeSettings()
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setData({});
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}
