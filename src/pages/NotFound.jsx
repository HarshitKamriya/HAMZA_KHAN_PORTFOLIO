import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import './NotFound.css';

/**
 * 404 Page Not Found
 * 
 * Functional, branded, accessible 404 page that preserves
 * header/footer navigation and provides clear actions.
 */
export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested page could not be found. Return to Hamza Khan's official website."
        canonicalPath="/404"
      />
      <section className="not-found" aria-labelledby="not-found-title">
        <div className="not-found__inner container container--narrow">
          <span className="not-found__code">404</span>
          <h1 id="not-found-title" className="not-found__title">
            Page Not Found
          </h1>
          <p className="not-found__description">
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="btn-primary not-found__btn">
              Back to Home
            </Link>
            <Link to="/contact" className="not-found__link">
              Need Help? Contact Hamza &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
