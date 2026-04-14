'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const inputClasses = "w-full rounded-lg border border-bg-glass-border bg-bg-glass backdrop-blur-sm px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all duration-200";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="glass rounded-xl border border-success/30 p-8 text-center glow-cyan">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold font-heading mb-2">Thanks for reaching out.</h3>
        <p className="text-text-secondary">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">Name</label>
        <input type="text" id="name" name="name" required className={inputClasses} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
        <input type="email" id="email" name="email" required className={inputClasses} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1.5">Company</label>
        <input type="text" id="company" name="company" required className={inputClasses} placeholder="Your company" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1.5">Service Interest</label>
        <select id="service" name="service" required className={inputClasses}>
          <option value="">Select a service</option>
          <option value="workshop">AI Literacy Workshop</option>
          <option value="agent">Custom Agent Development</option>
          <option value="automation">Workflow Automation</option>
          <option value="unsure">Not Sure Yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">Message</label>
        <textarea id="message" name="message" required rows={5} className={`${inputClasses} resize-none`} placeholder="Tell us about your project and goals..." />
      </div>
      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'Sending...' : 'Book My Discovery Call'}
      </Button>
    </form>
  );
}
