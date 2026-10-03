import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { submitInquiry } from '../../services/contactService';
import './InquiryForm.css';

const INQUIRY_TYPES = [
  { value: 'speaking', label: 'Speaking', summaryLabel: 'Event / speaking brief' },
  { value: 'workshop', label: 'Workshop', summaryLabel: 'Workshop needs / audience brief' },
  { value: 'coaching', label: 'Individual Coaching', summaryLabel: 'What are you working on?' },
  { value: 'founder', label: 'Founder Pitch Coaching', summaryLabel: 'Pitch / presentation context' },
  { value: 'general', label: 'General / Media', summaryLabel: 'Message / reason for contacting' }
];

export default function InquiryForm({ contactPageData }) {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type');
  
  // Validate query param against known types
  const defaultType = INQUIRY_TYPES.some(t => t.value === initialType) ? initialType : 'speaking';
  
  const [inquiryType, setInquiryType] = useState(defaultType);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    summary: '',
    timeframe: '',
    location: '',
    format: '',
    audienceSize: '',
    url: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // Reset errors and unneeded form data when switching type
  useEffect(() => {
    setErrors({});
  }, [inquiryType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear specific error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.summary.trim()) newErrors.summary = 'Please provide some details for your inquiry.';
    
    if (formData.url && !/^https?:\/\/.+/.test(formData.url)) {
      newErrors.url = 'URL must start with http:// or https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Construct payload based on active fields
    const payload = {
      type: inquiryType,
      name: formData.name.trim(),
      email: formData.email.trim(),
      summary: formData.summary.trim(),
      organization: formData.organization.trim(),
      role: formData.role.trim(),
      timeframe: formData.timeframe.trim(),
      location: formData.location.trim(),
      format: formData.format.trim(),
      audienceSize: formData.audienceSize.trim(),
      url: formData.url.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      await submitInquiry(payload);
      setStatus('success');
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    }
  };

  const currentTypeConfig = INQUIRY_TYPES.find(t => t.value === inquiryType);

  if (status === 'success') {
    return (
      <div className="inquiry-form__success" role="alert" aria-live="polite">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="success-icon" aria-hidden="true">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>{contactPageData.successMessage}</p>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      
      {/* 1. Inquiry Type Selector */}
      <fieldset className="inquiry-form__section inquiry-form__fieldset">
        <legend className="inquiry-form__legend">Inquiry Type</legend>
        <div className="inquiry-type-group">
          {INQUIRY_TYPES.map(type => (
            <label key={type.value} className={`inquiry-type-label ${inquiryType === type.value ? 'active' : ''}`}>
              <input
                type="radio"
                name="inquiryType"
                value={type.value}
                checked={inquiryType === type.value}
                onChange={(e) => setInquiryType(e.target.value)}
                className="visually-hidden"
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="inquiry-form__fields">
        {/* Required Fields (Always visible) */}
        <div className="form-group form-group--half">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={status === 'submitting'}
          />
          {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group form-group--half">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={status === 'submitting'}
          />
          {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
        </div>

        {/* Conditional Fields based on Inquiry Type */}
        {['speaking', 'workshop', 'founder'].includes(inquiryType) && (
          <div className="form-group form-group--half">
            <label htmlFor="organization">{inquiryType === 'founder' ? 'Organization / Startup' : 'Organization'}</label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        )}

        {['speaking', 'workshop', 'founder'].includes(inquiryType) && (
          <div className="form-group form-group--half">
            <label htmlFor="role">Role</label>
            <input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        )}

        {/* Dynamic Summary Field */}
        <div className="form-group form-group--full">
          <label htmlFor="summary">{currentTypeConfig.summaryLabel} *</label>
          <textarea
            id="summary"
            name="summary"
            rows={5}
            value={formData.summary}
            onChange={handleChange}
            aria-invalid={!!errors.summary}
            aria-describedby={errors.summary ? 'summary-error' : undefined}
            disabled={status === 'submitting'}
          />
          {errors.summary && <span id="summary-error" className="form-error">{errors.summary}</span>}
        </div>

        {/* Additional Optional Context */}
        {['speaking', 'workshop', 'coaching', 'founder'].includes(inquiryType) && (
          <div className="form-group form-group--half">
            <label htmlFor="timeframe">Date or timeframe</label>
            <input
              id="timeframe"
              name="timeframe"
              type="text"
              placeholder="e.g. Next month, Q4, Flexible"
              value={formData.timeframe}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        )}

        {['speaking', 'workshop', 'coaching', 'founder'].includes(inquiryType) && (
          <div className="form-group form-group--half">
            <label htmlFor="location">Location / Time zone / Online preference</label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        )}

        {['speaking', 'workshop'].includes(inquiryType) && (
          <div className="form-group form-group--half">
            <label htmlFor="audienceSize">Audience size</label>
            <input
              id="audienceSize"
              name="audienceSize"
              type="text"
              value={formData.audienceSize}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        )}

        {['speaking', 'workshop'].includes(inquiryType) && (
          <div className="form-group form-group--half">
            <label htmlFor="format">Expected format</label>
            <input
              id="format"
              name="format"
              type="text"
              placeholder="e.g. Keynote, Panel, Interactive session"
              value={formData.format}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        )}

        {/* Website / URL */}
        <div className="form-group form-group--full">
          <label htmlFor="url">Website / Social URL</label>
          <input
            id="url"
            name="url"
            type="url"
            placeholder="https://"
            value={formData.url}
            onChange={handleChange}
            aria-invalid={!!errors.url}
            aria-describedby={errors.url ? 'url-error' : undefined}
            disabled={status === 'submitting'}
          />
          {errors.url && <span id="url-error" className="form-error">{errors.url}</span>}
        </div>
      </div>

      <div className="inquiry-form__footer">
        <p className="inquiry-form__privacy">
          {contactPageData.privacyText}
        </p>
        
        {status === 'error' && (
          <div className="inquiry-form__error" role="alert" aria-live="assertive">
            <p>{contactPageData.failureMessage}</p>
          </div>
        )}

        <button 
          type="submit" 
          className="btn-primary inquiry-form__submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>

    </form>
  );
}
