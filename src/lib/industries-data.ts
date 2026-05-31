// Per-vertical content. Customer-language, drawn from the LazyMagnet growth-system canon.
// Each vertical leads with how THAT customer searches, decides and buys.

export interface Industry {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  intro: string;
  problems: { t: string; d: string }[];
  fitHeading: string;
  fit: { t: string; d: string }[];
  ctaHeading: string;
  ctaBody: string;
}

export const INDUSTRY_DATA: Record<string, Industry> = {
  'home-services': {
    slug: 'home-services',
    label: 'Home Services & Trades',
    metaTitle: 'AI Marketing for Tradies & Home Services | LazyMagnet',
    metaDescription: 'For plumbers, electricians, builders and home service businesses. Win the job by replying first: AI ads bring leads in, the AI Sales Agent books them in seconds. From $197/mo.',
    keywords: 'marketing for tradies, plumber leads, electrician marketing, home services advertising, emergency callout leads, builder leads NZ',
    eyebrow: 'Home Services & Trades',
    h1: 'The job goes to whoever calls back first. Make that you.',
    intro: 'A burst pipe, a dead hot water cylinder, a switchboard that smells like burning. When someone has an urgent problem, they ring three businesses and book the first one that picks up. The rest of the time they are planning a reno and scrolling at night. LazyMagnet catches both: ads that reach them, and an AI agent that replies in seconds, day or night.',
    problems: [
      { t: 'You are on the tools, not by the phone', d: 'The enquiry comes in while you are under a sink. By the time you call back, they have booked someone else.' },
      { t: 'Quotes that never went anywhere', d: 'A list of people who got a price and went quiet. Most tradies never follow up. That is money left on the table.' },
      { t: 'Feast or famine', d: 'Slammed one month, dead the next, with no reliable way to keep the work coming.' },
    ],
    fitHeading: 'How the system works for trades',
    fit: [
      { t: 'Reply in seconds, even from the van', d: 'The AI agent answers every enquiry instantly and books it, so you win the job without stopping work.' },
      { t: 'Google for urgent, social for planned', d: 'We run search ads for the emergencies people are searching for right now, and social ads for the renovations they are dreaming about.' },
      { t: 'Wake up your old quotes', d: 'A simple "we have a gap in the schedule" message to past quotes books jobs with no ad spend.' },
      { t: 'After-hours cover, no answering service', d: 'A 9pm callout enquiry gets a fast, professional reply and a booking, not your voicemail.' },
    ],
    ctaHeading: 'Fill your schedule without chasing leads',
    ctaBody: 'Book a free demo. We will show you how the system would bring in jobs and book them for your trade, in your area.',
  },
  'health-wellness': {
    slug: 'health-wellness',
    label: 'Health & Wellness',
    metaTitle: 'AI Marketing for Clinics, Gyms & Med Spas | LazyMagnet',
    metaDescription: 'For physios, gyms, med spas and practitioners. Fill your calendar with the right clients: AI ads plus a 24/7 AI Sales Agent that qualifies and books. Reactivate lapsed clients too. From $197/mo.',
    keywords: 'clinic marketing, physio marketing, med spa advertising, gym lead generation, patient acquisition, wellness marketing NZ',
    eyebrow: 'Health & Wellness',
    h1: 'A full calendar of the right clients. Not no-shows and tyre kickers.',
    intro: 'Your best clients are worth a lot over time, but new-client flow is lumpy and good people drift away. When someone sees your offer and enquires, they are in a buying moment. A reply the next day feels like being ignored. A reply in seconds feels like care. LazyMagnet brings the right people in and books them before the moment passes.',
    problems: [
      { t: 'Reception cannot catch every enquiry', d: 'Forms and DMs pile up between clients. The keen ones cool off while they wait.' },
      { t: 'Lapsed clients you never followed up', d: 'People who came once, or stopped six months ago. A gentle nudge would bring many of them back.' },
      { t: 'Time wasted on the wrong enquiries', d: 'Bookings that are not a fit eat into a calendar that should be full of ideal clients.' },
    ],
    fitHeading: 'How the system works for clinics',
    fit: [
      { t: 'Instant, caring first response', d: 'The AI agent replies the moment someone enquires, answers their questions, and books them in, tuned to sound like your clinic.' },
      { t: 'Qualify for fit, not just availability', d: 'It books the people who are a genuine fit, so your day is full of the clients you actually want.' },
      { t: 'Reactivate your database', d: 'A warm, personal message to lapsed clients, and the agent books the ones who are ready to come back.' },
      { t: 'Ads that show the outcome', d: 'Lifestyle and transformation ads that speak to the result your clients want, run and optimised for you.' },
    ],
    ctaHeading: 'Turn enquiries into booked appointments',
    ctaBody: 'Book a free demo. We will show you how the system fills your calendar and brings lapsed clients back, set up for your clinic.',
  },
  'professional-services': {
    slug: 'professional-services',
    label: 'Professional Services',
    metaTitle: 'AI Marketing for Accountants, Lawyers & Consultants | LazyMagnet',
    metaDescription: 'For accountants, lawyers, consultants and agencies. Win considered, high-value clients with professional, responsive lead handling and qualification. AI ads plus a 24/7 AI Sales Agent. From $197/mo.',
    keywords: 'marketing for accountants, lawyer lead generation, consultant marketing, professional services advertising, B2B lead qualification NZ',
    eyebrow: 'Professional Services',
    h1: 'Win the considered client with the right first impression.',
    intro: 'Your clients do not buy on impulse. They take their time, and they judge you on how you handle the first contact. A slow or scrappy response loses trust before you have had a chance to earn it. LazyMagnet makes sure every enquiry gets a professional, prompt, intelligent response, and that by the time you speak, it is already a serious conversation.',
    problems: [
      { t: 'Enquiries that deserve a proper response', d: 'A considered buyer who gets a slow or thin reply quietly crosses you off and moves on.' },
      { t: 'Time lost qualifying poor-fit leads', d: 'Discovery calls with people who were never going to be a fit are expensive in a billable world.' },
      { t: 'Warm proposals that went cold', d: 'People who got a proposal, said they would think about it, and you never followed up.' },
    ],
    fitHeading: 'How the system works for professional services',
    fit: [
      { t: 'Professional, not pushy', d: 'The AI agent is available, articulate and responsive. It opens the conversation and positions the call, without pressure.' },
      { t: 'Qualify before the call', d: 'It understands the situation and the fit first, so your discovery calls are with serious, relevant prospects.' },
      { t: 'Re-open warm proposals', d: 'It references the previous conversation, checks what has changed, and books a call to pick things back up.' },
      { t: 'Credibility-led ads', d: 'Ads built around your track record and the specific problems you solve, not generic claims.' },
    ],
    ctaHeading: 'Make every enquiry a serious conversation',
    ctaBody: 'Book a free demo. We will show you how the system qualifies and books high-value clients for your firm.',
  },
  'ecommerce': {
    slug: 'ecommerce',
    label: 'E-Commerce & Retail',
    metaTitle: 'AI Ads for E-Commerce & Retail | LazyMagnet',
    metaDescription: 'For online stores and retail. AI ads that create, test and optimise across Google, Facebook and Instagram, optimising on real sales not just clicks. Lower your cost per sale. From $197/mo.',
    keywords: 'ecommerce advertising, online store ads, retail marketing, Facebook ads ecommerce, Google shopping ads, lower cost per sale NZ',
    eyebrow: 'E-Commerce & Retail',
    h1: 'More sales from the same ad budget.',
    intro: 'In e-commerce, your website does the selling, so the job of marketing is to put the right people in front of it at the right cost. That is where LazyMagnet earns its keep: AI ads that create and test endlessly, retarget the people who browsed but did not buy, and optimise on real sales rather than cheap clicks.',
    problems: [
      { t: 'Ad costs creep, sales do not keep up', d: 'Performance drifts, creative goes stale, and your cost per sale quietly climbs.' },
      { t: 'Browsers who never came back', d: 'Most people do not buy on the first visit. Without retargeting, you paid to reach them once and lost them.' },
      { t: 'Tracking that broke after the privacy changes', d: 'If your ads optimise on clicks instead of purchases, they are chasing the wrong people.' },
    ],
    fitHeading: 'How the system works for e-commerce',
    fit: [
      { t: 'Endless creative testing', d: 'The AI generates and tests far more ad variations than a person could, and backs the winners automatically.' },
      { t: 'Retargeting that pays', d: 'Cheap, warm ads that follow up the people who browsed but did not buy, often your best return.' },
      { t: 'Optimised on real sales', d: 'We feed the platforms your actual purchases, so they learn to find buyers, not bargain-hunters who never check out.' },
      { t: 'For considered purchases, add the agent', d: 'Selling something high-value or custom? A chat agent that answers product questions and closes by conversation can lift it further. For most stores, ads do the heavy lifting.' },
    ],
    ctaHeading: 'Bring your cost per sale down',
    ctaBody: 'Book a free demo. We will show you how AI ads would run and optimise for your store and your products.',
  },
  'franchise': {
    slug: 'franchise',
    label: 'Franchise & Multi-Location',
    metaTitle: 'AI Marketing for Franchises & Multi-Location Businesses | LazyMagnet',
    metaDescription: 'For franchises and multi-location groups. Consistent, fast lead response across every location, templated ads with local customisation, and network-wide database reactivation. From $197/mo.',
    keywords: 'franchise marketing, multi location advertising, franchise lead generation, local marketing at scale, franchise lead response NZ',
    eyebrow: 'Franchise & Multi-Location',
    h1: 'Every location, the same fast, professional response.',
    intro: 'A franchise lives or dies on consistency, but local owners rarely have the marketing skills to run campaigns, and a lead that waits at one location is a lead lost for the whole brand. LazyMagnet gives you central control with local relevance: ads templated and customised per area, and an AI agent that responds to every lead, at every location, the same way.',
    problems: [
      { t: 'Uneven marketing across locations', d: 'Some owners run great campaigns, some run none. The brand experience is a lottery.' },
      { t: 'Leads that wait on a busy franchisee', d: 'If the local owner is flat out, the enquiry sits, and a competitor wins it.' },
      { t: 'No simple way to work the whole network', d: 'A promotion or reactivation across every location at once is a logistical headache done by hand.' },
    ],
    fitHeading: 'How the system works for franchises',
    fit: [
      { t: 'Templated ads, local flavour', d: 'Build a campaign once, roll it out across locations, customise the local details automatically.' },
      { t: 'Same fast response everywhere', d: 'The AI agent gives every lead at every location an instant, on-brand reply and booking, regardless of who is on shift.' },
      { t: 'Reactivate the whole network at once', d: 'Run a database reactivation across every location simultaneously, with the agent booking the replies.' },
      { t: 'Owners just receive booked meetings', d: 'Franchisees do not need to learn marketing. The leads arrive qualified and booked.' },
    ],
    ctaHeading: 'Standardise growth across your network',
    ctaBody: 'Book a free demo. We will show you how the system runs across multiple locations while keeping each one locally relevant.',
  },
};
