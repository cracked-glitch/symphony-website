import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-6xl font-bold font-heading text-purple mb-4">404</h1>
      <h2 className="text-2xl font-bold font-heading mb-4">Page Not Found</h2>
      <p className="text-text-secondary mb-8 max-w-md">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
