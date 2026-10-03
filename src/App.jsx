import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { useSiteSettings, useThemeSettings } from './cms/hooks';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import SpeakingWorkshops from './pages/SpeakingWorkshops';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

function AdminRedirect() {
  useEffect(() => {
    window.location.replace('/admin/');
  }, []);
  return null;
}

export default function App() {
  const { data: siteSettings } = useSiteSettings();
  const { data: themeSettings } = useThemeSettings();

  return (
    <ThemeProvider themeSettings={themeSettings || {}}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminRedirect />} />
          <Route path="/admin/index.html" element={<AdminRedirect />} />
          <Route element={<SiteLayout siteSettings={siteSettings} />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
