'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Overlay({ open, className = '', children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) return null;

  return createPortal(
    <div className={`fixed inset-0 z-40 ${className}`}>{children}</div>,
    document.body
  );
}
