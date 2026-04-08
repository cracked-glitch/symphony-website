'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Placeholder: replace with Formspree, custom API, etc.
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-success/30 bg-success/10 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold font-heading mb-2">Thanks for reaching out.</h3>
        <p className="text-text-secondary">We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1.5">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
          placeholder="Your company"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1.5">Service Interest</label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
        >
          <option value="">Select a service</option>
          <option value="workshop">AI Literacy Workshop</option>
          <option value="agent">Custom Agent Development</option>
          <option value="automation">Workflow Automation</option>
          <option value="unsure">Not Sure — Tell Me What Fits</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple resize-none"
          placeholder="Tell us about your project and goals..."
        />
      </div>
      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'Sending...' : 'Book My Discovery Call'}
      </Button>
    </form>
  );
}
