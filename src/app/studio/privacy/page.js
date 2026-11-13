import PolicyPage from '@/components/site/PolicyPage';
import { getPolicies, POLICY_UPDATED } from '@/lib/policies';
import { studioHuman } from '@/lib/studio';

const policies = getPolicies({
  brand: 'Symphony Studio',
  base: '/studio',
  email: studioHuman.email,
  address: '698 Rochelle Drive NE, Atlanta, GA',
});
const policy = policies.privacy;

export const metadata = {
  title: { absolute: `${policy.title} | Symphony Studio` },
  description: policy.description,
};

const links = [
  { href: '/studio/terms', label: 'Terms of Service' },
  { href: '/studio/refunds', label: 'Refund Policy' },
  { href: '/studio/privacy', label: 'Privacy Policy' },
].filter((l) => l.href !== '/studio/privacy');

export default function Page() {
  return <PolicyPage policy={policy} updated={POLICY_UPDATED} kicker="Symphony Studio" links={links} />;
}
