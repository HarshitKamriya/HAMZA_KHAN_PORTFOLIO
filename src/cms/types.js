/**
 * Content Types — CMS Data Models
 * 
 * These type definitions document the shape of content objects
 * used throughout the site. When a CMS is selected, its SDK
 * should map responses to these structures.
 * 
 * Statuses: 'draft' | 'published'
 * Verification: 'approved' | 'draft' | 'pending'
 */

/**
 * @typedef {'draft' | 'published'} ContentStatus
 */

/**
 * @typedef {'approved' | 'draft' | 'pending'} VerificationStatus
 */

/**
 * @typedef {Object} MediaAsset
 * @property {string} id
 * @property {string} url - public URL or relative path
 * @property {'image' | 'video'} type
 * @property {string} alt - accessibility text
 * @property {string} [caption]
 * @property {string} [credit]
 * @property {string} [rights]
 * @property {{ x: number, y: number }} [focalPoint] - 0-1 range
 * @property {number} [order]
 * @property {ContentStatus} status
 */

/**
 * @typedef {Object} CTAButton
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {Object} HeroContent
 * @property {string} eyebrow
 * @property {string} headline
 * @property {string} subline
 * @property {CTAButton} primaryCTA
 * @property {CTAButton} secondaryCTA
 * @property {MediaAsset} image
 */

/**
 * @typedef {Object} Credential
 * @property {string} id
 * @property {string} label
 * @property {string} [shortDescription]
 * @property {VerificationStatus} verificationStatus
 * @property {string} [source]
 * @property {string} [externalUrl]
 * @property {string} [iconType]
 * @property {number} order
 * @property {boolean} visible
 */

/**
 * @typedef {Object} VideoContent
 * @property {string} id
 * @property {'youtube' | 'vimeo' | 'custom'} provider
 * @property {string} url
 * @property {string} title
 * @property {string} description
 * @property {MediaAsset} [thumbnail]
 * @property {string} [caption]
 * @property {string} [transcript]
 * @property {string} [fallbackUrl]
 * @property {ContentStatus} status
 */

/**
 * @typedef {Object} ServiceCard
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} ctaLabel
 * @property {string} ctaUrl
 * @property {MediaAsset} [image]
 * @property {number} order
 * @property {boolean} visible
 */

/**
 * @typedef {Object} StoryPreviewContent
 * @property {string} headline
 * @property {string} excerpt
 * @property {string} pullQuote
 * @property {MediaAsset} image
 * @property {string} ctaLabel
 * @property {string} ctaUrl
 * @property {boolean} visible
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} quote
 * @property {'speaking' | 'coaching'} category
 * @property {string} [source]
 * @property {string} displayName
 * @property {string} [role]
 * @property {string} [company]
 * @property {MediaAsset} [photo]
 * @property {VerificationStatus} permissionStatus
 * @property {string} [permissionReference]
 * @property {boolean} featured
 * @property {number} order
 * @property {ContentStatus} status
 */

/**
 * @typedef {Object} ClosingInquiryContent
 * @property {string} heading
 * @property {string} supportingText
 * @property {CTAButton} primaryCTA
 * @property {CTAButton} secondaryCTA
 */

/**
 * @typedef {Object} HomePage
 * @property {HeroContent} hero
 * @property {Credential[]} credentials
 * @property {VideoContent} featuredVideo
 * @property {ServiceCard[]} services
 * @property {StoryPreviewContent} storyPreview
 * @property {Testimonial[]} featuredTestimonials
 * @property {ClosingInquiryContent} closingInquiry
 * @property {ContentStatus} status
 */

/**
 * @typedef {Object} SiteSettings
 * @property {string} siteName
 * @property {string} siteTagline
 * @property {string} siteDescription
 * @property {{ label: string, url: string }[]} navigation
 */

/**
 * @typedef {Object} ThemeSettings
 * @property {string} [background]
 * @property {string} [foreground]
 * @property {string} [surface]
 * @property {string} [primaryAccent]
 * @property {string} [secondaryAccent]
 * @property {string} [ctaAccent]
 */

/**
 * @typedef {Object} AboutIntro
 * @property {string} heading
 * @property {string} introduction
 * @property {MediaAsset} portrait
 * @property {CTAButton} primaryCTA
 * @property {CTAButton} [secondaryCTA]
 * @property {boolean} visible
 */

/**
 * @typedef {Object} AboutChapter
 * @property {string} id
 * @property {string} chapterLabel
 * @property {string} heading
 * @property {string} body
 * @property {MediaAsset} [image]
 * @property {string} [date]
 * @property {boolean} [dateVerified]
 * @property {number} order
 * @property {ContentStatus} status
 * @property {boolean} visible
 */

/**
 * @typedef {Object} JourneyMilestone
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {'speaking' | 'teaching' | 'mentorship' | 'coaching'} category
 * @property {string} [date]
 * @property {boolean} [dateVerified]
 * @property {string} [proofUrl]
 * @property {MediaAsset} [image]
 * @property {number} order
 * @property {ContentStatus} status
 * @property {boolean} visible
 */

/**
 * @typedef {Object} Philosophy
 * @property {string} quote
 * @property {string} explanation
 * @property {CTAButton} primaryCTA
 * @property {CTAButton} secondaryCTA
 * @property {boolean} visible
 */

/**
 * @typedef {Object} FinalBio
 * @property {string} name
 * @property {string} title
 * @property {string} bio
 * @property {CTAButton} primaryCTA
 * @property {CTAButton} [secondaryCTA]
 * @property {boolean} visible
 */

/**
 * @typedef {Object} AboutPage
 * @property {string} title
 * @property {string} seoDescription
 * @property {AboutIntro} intro
 * @property {AboutChapter[]} chapters
 * @property {JourneyMilestone[]} milestones
 * @property {Philosophy} philosophy
 * @property {FinalBio} finalBio
 * @property {ContentStatus} status
 */

/**
 * @typedef {Object} SpeakingTopic
 * @property {string} id
 * @property {string} title
 * @property {'delivered' | 'developing'} status
 * @property {string} summary
 * @property {string} audience
 * @property {string} approach
 * @property {string} [proof]
 * @property {MediaAsset} [image]
 * @property {string} inquiryLabel
 * @property {string} inquiryUrl
 * @property {number} order
 * @property {boolean} visible
 */

/**
 * @typedef {Object} SpeakerOneSheet
 * @property {string} url
 * @property {string} buttonLabel
 * @property {boolean} visible
 */

/**
 * @typedef {Object} WorkshopOffering
 * @property {string} id
 * @property {string} title
 * @property {'delivered' | 'proposed' | 'developing'} status
 * @property {string} audience
 * @property {string} description
 * @property {string} [outcomes]
 * @property {string} format
 * @property {string} [duration]
 * @property {MediaAsset} [image]
 * @property {string} inquiryLabel
 * @property {string} inquiryUrl
 * @property {number} order
 * @property {boolean} visible
 */

/**
 * @typedef {Object} WorkshopEngagement
 * @property {string} id
 * @property {string} organization
 * @property {string} eventName
 * @property {string} title
 * @property {string} audience
 * @property {'delivered'} status
 * @property {string} [date]
 * @property {boolean} [dateVerified]
 * @property {string} [description]
 * @property {string} [proof]
 * @property {MediaAsset} [image]
 * @property {number} order
 * @property {boolean} visible
 */

/**
 * @typedef {Object} SpeakingWorkshopsPage
 * @property {string} title
 * @property {string} seoDescription
 * @property {Object} intro
 * @property {string} intro.heading
 * @property {string} intro.speakingDescription
 * @property {string} intro.workshopsDescription
 * @property {MediaAsset} [intro.image]
 * @property {CTAButton} intro.speakingCTA
 * @property {CTAButton} intro.workshopsCTA
 * @property {SpeakingTopic[]} topics
 * @property {VideoContent[]} videos
 * @property {MediaAsset[]} gallery
 * @property {Credential[]} credentials
 * @property {SpeakerOneSheet} oneSheet
 * @property {WorkshopOffering[]} workshops
 * @property {WorkshopEngagement[]} engagements
 * @property {Testimonial[]} testimonials
 * @property {ClosingInquiryContent} closingInquiry
 * @property {ContentStatus} status
 */

// Export empty object so this file can be imported
export {};
