// Depth content per industry, keyed by slug. Web copy is not slide-sparse: this adds the
// "why it works for you" substance beneath the problems/fit cards. Grounded in growth-system canon.

export const INDUSTRY_BODY: Record<string, { heading: string; text: string }[]> = {
  'home-services': [
    { heading: 'Speed is the whole game in your trade', text: "When a hot water cylinder bursts, that customer is ringing down a list. The plumber who replies in five minutes gets the job; the one who calls back three hours later has already lost it. Your AI agent replies in seconds, every time, so you stop losing urgent work simply because you were under a sink with your hands full." },
    { heading: 'Two kinds of customer, two kinds of ad', text: "Urgent jobs are on Google right now, actively searching for someone to fix it today. Planned work, the renovation, the new bathroom, the deck before summer, is on Facebook and Instagram, not searching yet but very reachable. We run both at once, so you catch the emergency call-outs and steadily fill the pipeline with the bigger planned jobs." },
    { heading: 'The quotes you never followed up', text: "Every tradie has a list of people who got a price and went quiet. Most never get a second message. A simple, well-timed nudge, “we’ve got a gap in the schedule next week”, books real jobs from that list with no ad spend at all. The AI agent handles the conversation and puts them in your calendar." },
  ],
  'health-wellness': [
    { heading: 'A reply in seconds feels like care', text: "When someone enquires about a treatment, they are in a buying moment. A reply the next day feels like being ignored; an instant, warm response feels like exactly the kind of attention they are paying you for. That first impression often decides whether they book with you or the clinic down the road who happened to answer first." },
    { heading: 'Your database is your quietest goldmine', text: "Every clinic has a list of clients who came once, or drifted away six months ago. A gentle, personal message brings a surprising number of them back, and the AI agent books the ones who are ready. It is some of the cheapest revenue you will ever find, because you already did the hard work of earning their trust the first time." },
  ],
  'professional-services': [
    { heading: 'The first impression is the sale', text: "Your clients are careful, considered buyers. A slow or scrappy first reply quietly tells them you are not the firm for them, before you have had any chance to prove otherwise. A prompt, professional, intelligent response does the opposite: it positions you as the serious choice from the very first message, which is exactly where trust starts." },
    { heading: 'Protect your billable time', text: "Discovery calls with people who were never a fit are expensive when your time is the product you sell. The AI agent has the qualifying conversation first, understanding the situation and whether you are a match, so that by the time you are on a call it is with someone genuinely worth your hour." },
  ],
  'ecommerce': [
    { heading: 'Your job is cheap, qualified traffic', text: "In e-commerce the website does the selling, so the job of marketing is to put the right people in front of it at the right cost. That is where AI ads earn their keep: generating and testing far more creative than a person could, finding the buyers, and optimising on actual sales rather than whoever happens to click cheapest." },
    { heading: 'Win back the browsers', text: "Most people do not buy on the first visit. Without retargeting, you paid to reach them once and then lost them for good. Cheap, warm retargeting ads follow those visitors over the next few days, and that is very often where the best return on your ad spend is quietly hiding." },
  ],
  'franchise': [
    { heading: 'Central control, local relevance', text: "A franchise lives or dies on consistency, but local owners rarely have the time or the marketing skill to run good campaigns themselves. We build the campaign once, roll it out across every location, and customise the local details automatically, so each area gets professional marketing without every franchisee having to become a marketer." },
    { heading: 'Every location, the same fast response', text: "A lead left waiting on a busy franchisee is a lead lost for the whole brand. The AI agent gives every enquiry, at every location, the same instant, on-brand reply and booking, no matter who is on shift, so the experience your customers get is consistent everywhere your name appears." },
  ],
};
