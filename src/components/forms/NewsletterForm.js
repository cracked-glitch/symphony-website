'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-success text-sm text-center">You&rsquo;re subscribed. We&rsquo;ll be in touch.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="you@company.com"
        required
        className="flex-1 rounded-lg border border-border bg-bg-primary px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
        aria-label="Email address for newsletter"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
