// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://new.lazymagnet.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    // AI Ads consolidation
    '/ai-ads-3968': '/ai-ads',
    '/ai-ads-to-customers': '/ai-ads',
    '/ai-powered-content-4330': '/ai-ads',
    // AI Sales Agent consolidation
    '/ai-bot': '/ai-sales-agent',
    '/ai-bot-draft': '/ai-sales-agent',
    '/ai-conversion-bot': '/ai-sales-agent',
    '/ai-sales-bot-landing-page': '/ai-sales-agent',
    // System / nurture
    '/leads-4605': '/ultimate',
    // Pricing + offers -> pricing
    '/lazymagnet-pricing': '/pricing',
    '/ai-ads-pricing': '/pricing',
    '/ads-engage-special-offer': '/pricing',
    '/overages': '/pricing',
    // Demo / contact
    '/schedule-demo': '/get-started',
    '/contact-us-3825': '/contact',
    '/thank-you-for-schedule-a-call-2218': '/get-started',
    '/thank-you-page-payment': '/get-started',
    '/payment-form': '/get-started',
    // Legal
    '/privacy-policy-4627-4219': '/privacy',
    '/terms-and-conditions-4940-6875': '/terms',
  },
});
