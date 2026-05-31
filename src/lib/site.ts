// Central site config + nav. One source of truth for links, so nothing 404s.

export const SITE = {
  name: 'LazyMagnet',
  domain: 'https://demo.lazymagnet.com',
  phoneLabel: '0800 LAZYMAGNET',
  logo: 'https://assets.cdn.filesafe.space/ta7OhEhODTBhXhTYUNgF/media/63e1a3ffa4862067ee273ea3.png',
  bookUrl: '/get-started',
};

export const NAV = [
  { label: 'AI Ads', href: '/ai-ads' },
  { label: 'AI Sales Agent', href: '/ai-sales-agent' },
  { label: 'The Full System', href: '/ultimate' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
];

export const INDUSTRIES = [
  { slug: 'home-services', label: 'Home Services & Trades', short: 'Trades' },
  { slug: 'health-wellness', label: 'Health & Wellness', short: 'Clinics' },
  { slug: 'professional-services', label: 'Professional Services', short: 'Pro Services' },
  { slug: 'ecommerce', label: 'E-Commerce & Retail', short: 'E-Commerce' },
  { slug: 'franchise', label: 'Franchise & Multi-Location', short: 'Franchise' },
];

/** True if `current` path is the nav item `href` (or a child of it). */
export function isActive(current: string, href: string): boolean {
  const c = current.replace(/\/$/, '') || '/';
  const h = href.replace(/\/$/, '') || '/';
  if (h === '/') return c === '/';
  return c === h || c.startsWith(h + '/');
}
