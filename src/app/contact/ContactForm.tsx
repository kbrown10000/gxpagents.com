'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const interestOptions = [
  { value: '', label: 'Select your area of interest' },
  { value: 'quality', label: 'Quality' },
  { value: 'regulatory', label: 'Regulatory Affairs' },
  { value: 'clinical', label: 'Clinical Development' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'safety', label: 'Safety & Pharmacovigilance' },
  { value: 'medical-affairs', label: 'Medical Affairs' },
  { value: 'cybersecurity', label: 'Cybersecurity & TPRM' },
  { value: 'corporate', label: 'Corporate Functions' },
  { value: 'general', label: 'General Inquiry' },
];

const hearAboutOptions = [
  { value: '', label: 'How did you hear about us?' },
  { value: 'search', label: 'Search Engine (Google, Bing, etc.)' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'colleague', label: 'Colleague / Referral' },
  { value: 'conference', label: 'Conference / Event' },
  { value: 'partner', label: 'Partner / Consultant' },
  { value: 'usdm', label: 'USDM Life Sciences' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  hearAbout: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interest: '',
    hearAbout: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    // TODO: Wire Pardot endpoint here
    // For now, simulate form submission to placeholder
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: '',
        hearAbout: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const inputClasses = (fieldName: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[fieldName]
        ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500'
        : 'border-slate-200 bg-white focus:ring-blue-800 focus:border-blue-800'
    } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all duration-200`;

  const labelClasses = 'block text-sm font-medium text-slate-700 mb-1.5';

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Message Sent Successfully
            </h3>
            <p className="text-slate-600 mb-6">
              Thank you for reaching out. Our team will get back to you within
              one business day.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-sm font-medium text-blue-800 hover:text-blue-900 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={inputClasses('name')}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={inputClasses('email')}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company Name (Required) */}
            <div>
              <label htmlFor="company" className={labelClasses}>
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your organization"
                className={inputClasses('company')}
              />
              {errors.company && (
                <p className="mt-1.5 text-xs text-red-600">{errors.company}</p>
              )}
            </div>

            {/* Interest & Hear About Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="interest" className={labelClasses}>
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%2394a3b8%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19.5%208.25l-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="hearAbout" className={labelClasses}>
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%2394a3b8%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19.5%208.25l-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
                >
                  {hearAboutOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClasses}>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your challenges and what you'd like to explore..."
                className={`${inputClasses('message')} resize-vertical`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Error message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                Something went wrong. Please try again or contact us directly at
                info@gxpagents.com.
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white font-semibold text-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              {status === 'submitting' ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
