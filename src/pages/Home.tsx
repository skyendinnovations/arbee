import React, { useState } from "react";
import Hero from "../components/Hero";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; text?: string }>({
    type: "idle",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Mobile validation rules (normalized):
    // - Accepts a plain 10-digit number: XXXXXXXXXX
    // - Or optional 2-digit country code (with or without leading '+') followed by 10 digits:
    //   +CCXXXXXXXXXX or CCXXXXXXXXXX
    // Normalize by removing all characters except digits and leading plus.
    const raw = (form.mobile || "").trim();
    const normalized = raw
      .replace(/[()\-\s]/g, "") // remove spaces, dashes, parentheses
      // ensure only digits and an optional leading + remain
      .replace(/(?!^)[+]/g, "");

    if (!normalized) {
      errors.mobile = "Mobile number is required";
    } else {
      // Pattern: optional + then 2 digits, then 10 digits OR 12 digits (2+10) without plus OR 10 digits
      const pattern = /^(?:\+?\d{2})?\d{10}$/;
      if (!pattern.test(normalized)) {
        errors.mobile = "Enter 10 digits, or optional 2-digit country code +CC followed by 10 digits";
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "idle" });

    if (!validate()) {
      setStatus({ type: "error", text: "Please fix the errors above" });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Placeholder: replace with real POST to your backend
    // try {
    //   const response = await fetch('/api/request-quote', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form)
    //   });
    //   if (!response.ok) throw new Error('Failed to submit');
    // } catch (error) {
    //   setStatus({ type: "error", text: "Submission failed. Please try again." });
    //   setIsSubmitting(false);
    //   return;
    // }

    setStatus({ type: "success", text: "Request submitted successfully! We'll contact you shortly." });
    setForm({ name: "", email: "", mobile: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Hero />

      {/* Welcome section removed for streamlined mobile-first experience */}

      {/* Contact Form Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 italic">
              Let's build something amazing together.
            </p>
          </div>

          {/* Two-column layout: Text left, Form right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Text and Contact Info (desktop first, mobile second) */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Our team of experts is here to bring your construction vision to life. 
                    Whether it's residential, commercial, or infrastructure projects, 
                    we deliver quality craftsmanship with decades of experience.
                  </p>
                </div>

                {/* Contact Info with Icons */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">info@arbeeconstruction.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Visit Us</p>
                      <p className="text-sm text-gray-600">123 Construction Ave, Build City, BC 12345</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Form (mobile-first) */}
            <div className="order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100" noValidate>
                {/* Grid Layout for Form Fields - responsive and neat */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
                  {/* Name Field */}
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 text-sm border rounded-md bg-gray-50 placeholder-gray-400 italic
                        transition-all duration-150 focus:outline-none focus:ring-1 focus:bg-white hover:bg-gray-100
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${fieldErrors.name ? "border-red-300 focus:ring-red-400 focus:border-red-400" : "border-gray-200 focus:ring-amber-300 focus:border-amber-300"}
                      `}
                      placeholder="e.g. John Doe"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 text-sm border rounded-md bg-gray-50 placeholder-gray-400 italic
                        transition-all duration-150 focus:outline-none focus:ring-1 focus:bg-white hover:bg-gray-100
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${fieldErrors.email ? "border-red-300 focus:ring-red-400 focus:border-red-400" : "border-gray-200 focus:ring-amber-300 focus:border-amber-300"}
                      `}
                      placeholder="you@company.com"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number Field - Full Width on Mobile and Laptop */}
                  <div className="w-full lg:col-span-2">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 text-sm border rounded-md bg-gray-50 placeholder-gray-400 italic
                        transition-all duration-150 focus:outline-none focus:ring-1 focus:bg-white hover:bg-gray-100
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${fieldErrors.mobile ? "border-red-300 focus:ring-red-400 focus:border-red-400" : "border-gray-200 focus:ring-amber-300 focus:border-amber-300"}
                      `}
                      placeholder=""
                      aria-invalid={!!fieldErrors.mobile}
                      aria-describedby={fieldErrors.mobile ? "mobile-error" : undefined}
                    />
                    {fieldErrors.mobile && (
                      <p id="mobile-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {fieldErrors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 placeholder-gray-400 italic
                      transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-amber-300 
                      focus:border-amber-300 focus:bg-white resize-none hover:bg-gray-100
                      disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Briefly describe your project, timeline or questions..."
                  />
                </div>

                {/* Status Message and Submit Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
                  {/* Status Message */}
                  <div className="flex-1 min-h-[24px]" aria-live="polite" aria-atomic="true">
                    {status.type === "error" && (
                      <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{status.text}</span>
                      </div>
                    )}
                    {status.type === "success" && (
                      <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{status.text}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-md
                      hover:from-amber-600 hover:to-amber-700 active:from-amber-700 active:to-amber-800 focus:outline-none focus:ring-1 focus:ring-amber-300
                      transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}