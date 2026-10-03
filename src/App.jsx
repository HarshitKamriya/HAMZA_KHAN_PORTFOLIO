import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { useSiteSettings, useThemeSettings } from './cms/hooks';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';
import './index.css';

export default function App() {
  const { data: siteSettings } = useSiteSettings();
  const { data: themeSettings } = useThemeSettings();

  return (
    <ThemeProvider themeSettings={themeSettings || {}}>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout siteSettings={siteSettings} />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<Placeholder title="About" />} />
            <Route path="/speaking-workshops" element={<Placeholder title="Speaking & Workshops" />} />
            <Route path="/coaching" element={<Placeholder title="Coaching" />} />
            <Route path="/contact" element={<Placeholder title="Contact" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
