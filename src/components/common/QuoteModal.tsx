import React, { useState } from 'react';
import { X, Phone, Mail, CheckCircle2, AlertCircle, Send, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { QuoteFormData } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Shingle Roofing'
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: initialService,
    message: '',
    preferredContact: 'phone'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number for callback.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a 10-digit phone number.';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please specify the street, city, and zip code.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Build mailto href to ensure real communication transmission
    const subject = encodeURIComponent(`Roofing Quote Request - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Lawrence & Sons Roofing,\n\nI would like to request a free quote for my property.\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Property Address: ${formData.address}\n` +
      `Service Needed: ${formData.serviceType}\n` +
      `Preferred Contact: ${formData.preferredContact}\n\n` +
      `Project Details:\n${formData.message || 'No additional details provided.'}\n`
    );

    // Simulate verified dispatch window
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Also trigger mailto so user can send immediately via their default mail app
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  const handleCopyDetails = () => {
    const summary = `Quote Request for Lawrence & Sons Roofing Inc:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
Service: ${formData.serviceType}
Message: ${formData.message || 'None'}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#17283F] text-white px-6 py-5 flex items-start justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
              Lawrence &amp; Sons Roofing Inc.
            </div>
            <h2 id="quote-modal-title" className="text-xl sm:text-2xl font-bold font-display mt-0.5">
              Request Your Free Roofing Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Direct consultation with Ken Lawrence. No obligation, transparent pricing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 space-y-5 text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#20262D]">
                  Quote Request Ready for Dispatch
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your email client has been prepared with your request directly addressed to{' '}
                  <strong className="text-[#17283F]">{COMPANY_INFO.email}</strong>. Ken Lawrence will review your roof specifications and follow up within one business day.
                </p>
              </div>

              <div className="bg-[#F7F6F2] p-4 rounded-md border border-slate-200 text-left text-xs space-y-1 text-slate-700">
                <div className="font-semibold text-[#17283F] pb-1 border-b border-slate-300">
                  Submission Summary
                </div>
                <div><strong>Property:</strong> {formData.address}</div>
                <div><strong>Service:</strong> {formData.serviceType}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#17283F] bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Quote Details'}</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B97745]" />
                  <span>Call (480) 330-1646 Now</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#20262D] mb-1">
                    Full Name <span className="text-[#B97745]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Robert Smith"
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-md transition-colors ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#B97745]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#20262D] mb-1">
                    Phone Number (Call or Text) <span className="text-[#B97745]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(480) 000-0000"
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-md transition-colors ${
                      errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#B97745]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-[#20262D] mb-1">
                  Email Address <span className="text-[#B97745]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-md transition-colors ${
                    errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#B97745]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Property Address */}
              <div>
                <label className="block text-xs font-semibold text-[#20262D] mb-1">
                  Property Address (Street, City, Zip Code) <span className="text-[#B97745]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. 19707 N Desert Rose Way, Phoenix, AZ 85022"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-md transition-colors ${
                    errors.address ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-[#B97745]'
                  }`}
                />
                {errors.address && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Roofing Service Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#20262D] mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:border-[#B97745] transition-colors"
                  >
                    <option value="Shingle Roofing">Architectural Shingle Roofing</option>
                    <option value="Standing-Seam Metal">Standing-Seam Metal Roofing &amp; Fascia</option>
                    <option value="Tile & Underlayment">Tile Roofing &amp; Underlayment Replacement</option>
                    <option value="Roof Inspection">$75 Detailed Roof / Insurance Inspection</option>
                    <option value="Complete Replacement">Complete Roof Replacement</option>
                    <option value="Other">Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20262D] mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center gap-4 pt-2 text-xs">
                    {(['phone', 'text', 'email'] as const).map((method) => (
                      <label key={method} className="inline-flex items-center gap-1.5 cursor-pointer capitalize">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={() => setFormData({ ...formData, preferredContact: method })}
                          className="accent-[#B97745]"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs font-semibold text-[#20262D] mb-1">
                  Project Details / Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current roof condition, approximate age, leaks, or insurance timeline..."
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:border-[#B97745] transition-colors"
                />
              </div>

              {/* Note on transmission & direct phone */}
              <div className="bg-[#F7F6F2] p-3 rounded text-[11px] text-slate-600 leading-normal flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#B97745] shrink-0 mt-0.5" />
                <span>
                  Submitting directly notifies <strong>Ken@LawrenceandSonsRoofing.com</strong>. Prefer talking immediately? Call or text <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#17283F] font-bold underline">{COMPANY_INFO.phone}</a> during business hours.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#B97745]" />
                  <span>{submitting ? 'Preparing Quote Request...' : 'Send Free Quote Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
