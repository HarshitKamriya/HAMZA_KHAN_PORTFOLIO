import './AboutChapter.css';

/**
 * AboutChapter
 * 
 * Renders individual story chapters. Varies layout based on whether
 * an image is present and its index to create an editorial rhythm.
 * 
 * @param {{ chapter: import('../../cms/types').AboutChapter, index: number }} props
 */
export default function AboutChapter({ chapter, index }) {
  if (!chapter || !chapter.visible || chapter.status !== 'published') return null;

  const imageUrl = typeof chapter.image === 'string' ? chapter.image : chapter.image?.url;
  const imageAlt = typeof chapter.image === 'object' ? (chapter.image?.alt || '') : '';
  const isDraft = typeof chapter.image === 'object' && chapter.image?.status === 'draft';
  const hasImage = Boolean(imageUrl) && !isDraft;

  const isEven = index % 2 !== 0; // 0-indexed, so 1, 3, etc are 'even' visually
  
  // Alternate background colors for visual separation
  const isSurfaceBg = index % 2 === 0;

  const className = [
    'about-chapter',
    isSurfaceBg ? 'about-chapter--surface' : '',
    hasImage ? 'about-chapter--with-image' : 'about-chapter--text-only',
    isEven ? 'about-chapter--even' : 'about-chapter--odd'
  ].filter(Boolean).join(' ');

  const innerClassName = [
    'about-chapter__inner',
    hasImage ? 'about-chapter__inner--with-image' : ''
  ].filter(Boolean).join(' ');

  const focalX = chapter.image?.focalPoint?.x ?? 0.5;
  const focalY = chapter.image?.focalPoint?.y ?? 0.5;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  return (
    <section 
      id={index === 0 ? 'story' : `chapter-${chapter.id}`}
      className={className} 
      aria-labelledby={`chapter-heading-${chapter.id}`}
    >
      <div className={innerClassName}>
        
        <div className="about-chapter__content">
          <div className="about-chapter__meta-strip">
            {chapter.chapterLabel && (
              <span className="about-chapter__label">{chapter.chapterLabel}</span>
            )}
            {chapter.subtitle && (
              <span className="about-chapter__subtitle">{chapter.subtitle}</span>
            )}
          </div>
          
          <h2 id={`chapter-heading-${chapter.id}`} className="about-chapter__heading">
            {chapter.heading}
          </h2>
          
          <div className="about-chapter__body">
            {/* Simple paragraph splitting. A real CMS might use PortableText or similar. */}
            {chapter.body.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {hasImage && (
          <div className="about-chapter__media">
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="about-chapter__image"
              style={{ objectPosition }}
              loading="lazy"
            />
          </div>
        )}

      </div>
    </section>
  );
}
