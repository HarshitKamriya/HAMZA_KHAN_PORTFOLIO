import { Link } from 'react-router-dom';

/**
 * Placeholder page — Route exists but content is not yet implemented.
 * Shown for /about, /speaking-workshops, /coaching, /contact
 */
export default function Placeholder({ title }) {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-display-md)',
          fontWeight: 'var(--text-display-md-weight)',
          letterSpacing: 'var(--text-display-md-ls)',
          color: 'var(--color-foreground)',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body-lg)',
          color: 'var(--color-muted)',
          marginBottom: '2rem',
          maxWidth: '42ch',
        }}
      >
        This page is coming soon. It will be built in a later development phase.
      </p>
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body-md)',
          fontWeight: 500,
          color: 'var(--color-primary)',
          textDecoration: 'none',
        }}
      >
        ← Back to Home
      </Link>
    </section>
  );
}
