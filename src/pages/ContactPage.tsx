import React, { useState } from 'react';
import { COMPANY_INFO, AUTHENTIC_SERVICES } from '../data/companyData';
import { QuoteFormData } from '../types';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Calculator, Copy, Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'Shingle Roofing',
    message: '',
    preferredContact: 'phone'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Roof Estimator State
  const [estSqFt, setEstSqFt] = useState<number>(2200);
  const [estMaterial, setEstMaterial] = useState<'shingle' | 'metal' | 'tile' | 'inspection'>('shingle');

  const calculateEstimate = () => {
    switch (estMaterial) {
      case 'shingle':
        return {
          min: Math.round(estSqFt * 4.5),
          max: Math.round(estSqFt * 6.5),
          notes: 'Architectural dimensional shingles with complete underlayment & clean tear-off'
        };
      case 'metal':
        return {
          min: Math.round(estSqFt * 10),
          max: Math.round(estSqFt * 14.5),
          notes: 'Standing seam concealed fastener panels & custom metal fascia'
        };
      case 'tile':
        return {
          min: Math.round(estSqFt * 5.5),
          max: Math.round(estSqFt * 8.5),
          notes: 'Complete tile lift & replacement with high-temp synthetic underlayment'
        };
      case 'inspection':
        return {
          min: 75,
          max: 75,
          notes: 'Comprehensive multi-point roof evaluation + optional insurance claim filing'
        };
    }
  };

  const estimate = calculateEstimate();

  const handleApplyEstimate = () => {
    setFormData((prev) => ({
      ...prev,
      serviceType:
        estMaterial === 'shingle'
          ? 'Shingle Roofing'
          : estMaterial === 'metal'
          ? 'Standing-Seam Metal'
          : estMaterial === 'tile'
          ? 'Tile & Underlayment'
          : 'Roof Inspection',
      message: `Approximate roof size: ${estSqFt} sq ft (${estMaterial} system). Estimated ballpark range: $${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}.`
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a 10-digit phone number.';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Property address (Street, City, Zip) is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const subject = encodeURIComponent(`Roofing Quote Request - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Lawrence & Sons Roofing,\n\nI would like to request a quote.\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Property Address: ${formData.address}\n` +
      `Service Needed: ${formData.serviceType}\n` +
      `Preferred Contact: ${formData.preferredContact}\n\n` +
      `Project Details:\n${formData.message || 'No additional details provided.'}\n`
    );

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
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
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#17283F] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
              Direct Contact &amp; Transparent Quotes
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Contact Lawrence &amp; Sons Roofing
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just drop us a line or give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contacts & Hours (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
                  Get In Touch
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17283F]">
                  We're Here When You Need Us
                </h2>
                <p className="text-sm text-[#68717B] leading-relaxed">
                  Call or text for immediate inquiries. You will speak directly with Ken Lawrence or Frank Lawrence regarding your roof.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4">
                {/* Telephone */}
                <div className="p-5 bg-[#F7F6F2] rounded-lg border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Telephone or Text</span>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-xl sm:text-2xl font-bold text-[#17283F] font-display hover:text-[#B97745] transition-colors block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-[#68717B]">
                    Call or text anytime during business hours for rapid response.
                  </p>
                </div>

                {/* Email */}
                <div className="p-5 bg-[#F7F6F2] rounded-lg border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
                    <Mail className="w-4 h-4" />
                    <span>Direct Email</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-[#17283F] hover:text-[#B97745] transition-colors break-all block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-[#68717B]">
                    Send plans, insurance inspection requests, or general inquiries.
                  </p>
                </div>

                {/* Location & Hours */}
                <div className="p-5 bg-[#F7F6F2] rounded-lg border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Service Location</span>
                  </div>
                  <div className="text-sm font-semibold text-[#17283F]">
                    {COMPANY_INFO.name}
                  </div>
                  <p className="text-xs text-[#68717B]">
                    {COMPANY_INFO.location}
                  </p>

                  <div className="pt-2 border-t border-slate-200/80 space-y-1 text-xs">
                    <div className="font-semibold text-[#17283F] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B97745]" />
                      <span>Business Hours</span>
                    </div>
                    <div className="text-[#20262D]">{COMPANY_INFO.hoursWeekday}</div>
                    <div className="text-slate-500">{COMPANY_INFO.hoursWeekend}</div>
                  </div>
                </div>
              </div>

              {/* Helpful note on insurance inspections */}
              <div className="bg-[#17283F] text-white p-5 rounded-lg border border-slate-700 space-y-2">
                <div className="text-xs font-semibold text-[#B97745] uppercase tracking-wider">
                  Insurance Inspections Available
                </div>
                <div className="text-sm font-bold text-white">
                  $75 Detailed Multi-Point Evaluation
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We provide a thorough photographic roof inspection for $75, with an additional option to file the paperwork directly with your insurance company.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Quote Request Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
                    Online Estimate
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#17283F]">
                    Request a Free Roofing Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68717B] mt-1">
                    Fill out the form below. Ken Lawrence will review your property information and follow up promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 space-y-5 text-center bg-[#F7F6F2] p-6 rounded-lg border border-slate-200">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-[#17283F]">
                        Thank You! Your Request is Prepared
                      </h4>
                      <p className="text-sm text-[#68717B] max-w-md mx-auto leading-relaxed">
                        Your inquiry has been generated and your mail client opened with pre-filled details addressed to{' '}
                        <strong className="text-[#17283F]">{COMPANY_INFO.email}</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleCopyDetails}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#17283F] bg-white hover:bg-slate-50 rounded-md border border-slate-300 transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied to Clipboard' : 'Copy Quote Details'}</span>
                      </button>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#B97745]" />
                        <span>Call (480) 330-1646 Now</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#20262D] mb-1">
                          Your Name <span className="text-[#B97745]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="First and last name"
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md transition-colors ${
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
                          placeholder="(480) 330-0000"
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md transition-colors ${
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

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20262D] mb-1">
                        Email Address <span className="text-[#B97745]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md transition-colors ${
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

                    {/* Address */}
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
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md transition-colors ${
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

                    {/* Service & Preferred Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#20262D] mb-1">
                          Roofing Service Needed
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#B97745] transition-colors"
                        >
                          <option value="Shingle Roofing">Architectural Shingle Roofing</option>
                          <option value="Standing-Seam Metal">Standing-Seam Metal Roofing &amp; Fascia</option>
                          <option value="Tile & Underlayment">Tile Roofing &amp; Underlayment Replacement</option>
                          <option value="Roof Inspection">$75 Detailed Roof / Insurance Inspection</option>
                          <option value="Complete Replacement">Complete Roof Replacement</option>
                          <option value="Other">Other Custom Request</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#20262D] mb-1">
                          Preferred Contact Method
                        </label>
                        <div className="flex items-center gap-4 pt-2.5 text-xs">
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

                    {/* Message Details */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20262D] mb-1">
                        Project Details / Specific Requests
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your roof age, recent storm damage, or questions..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#B97745] transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-all shadow-md cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 text-[#B97745]" />
                        <span>{submitting ? 'Submitting Request...' : 'Send Free Quote Request'}</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 text-center">
                      Direct submission addressed to Ken Lawrence at {COMPANY_INFO.email}.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Roof Cost Estimator Tool */}
          <div className="mt-16 bg-[#F7F6F2] rounded-lg border border-slate-200 p-8 sm:p-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Estimation Tool</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#17283F]">
                  Approximate Roof Investment Calculator
                </h3>
                <p className="text-xs sm:text-sm text-[#68717B]">
                  Get an instant ballpark range based on typical Phoenix square footage and roofing materials.
                </p>
              </div>

              <button
                type="button"
                onClick={handleApplyEstimate}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
              >
                Apply to Quote Form &uarr;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 border-t border-slate-200">
              {/* Controls (7 cols) */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#20262D] mb-1">
                    <span>Approximate Roof Surface Area:</span>
                    <span className="text-[#B97745] font-mono">{estSqFt.toLocaleString()} sq ft</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={5000}
                    step={100}
                    value={estSqFt}
                    onChange={(e) => setEstSqFt(Number(e.target.value))}
                    className="w-full accent-[#B97745] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>1,000 sq ft</span>
                    <span>2,500 sq ft (Average Home)</span>
                    <span>5,000 sq ft</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20262D] mb-2">
                    Roofing Material System:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'shingle', label: 'Architectural Shingles' },
                      { id: 'tile', label: 'Tile & Underlayment' },
                      { id: 'metal', label: 'Standing-Seam Metal' },
                      { id: 'inspection', label: '$75 Inspection' }
                    ].map((mat) => (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setEstMaterial(mat.id as any)}
                        className={`p-2.5 text-xs font-medium rounded border text-center transition-colors cursor-pointer ${
                          estMaterial === mat.id
                            ? 'bg-[#17283F] text-white border-[#17283F] font-semibold'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {mat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Card (5 cols) */}
              <div className="md:col-span-5 bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#68717B]">
                  Estimated Ballpark Range
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#17283F]">
                  ${estimate.min.toLocaleString()}
                  {estMaterial !== 'inspection' && ` – $${estimate.max.toLocaleString()}`}
                </div>
                <p className="text-xs text-[#68717B] leading-relaxed">
                  {estimate.notes}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 italic">
                  *Ballpark figures only. Actual costs depend on pitch, deck condition, and ventilation after on-site inspection.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
