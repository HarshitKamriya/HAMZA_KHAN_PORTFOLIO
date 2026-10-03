import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { useSiteSettings, useThemeSettings } from './cms/hooks';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import SpeakingWorkshops from './pages/SpeakingWorkshops';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
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
            <Route path="/about" element={<About />} />
            <Route path="/speaking-workshops" element={<SpeakingWorkshops />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
