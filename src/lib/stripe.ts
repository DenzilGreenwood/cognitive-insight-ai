import { loadStripe, Stripe } from '@stripe/stripe-js';
import { StripeProduct } from '@/types';

let stripePromise: Promise<Stripe | null>;

/**
 * Get Stripe instance
 */
export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error('Stripe publishable key is not set');
    }
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
}

/**
 * Product definitions for the consulting platform
 */
export const STRIPE_PRODUCTS: StripeProduct[] = [
  {
    id: 'clarity_session',
    name: 'Clarity Session',
    description: 'A focused 90-minute session to navigate complexity and develop insight',
    priceId: process.env.NEXT_PUBLIC_STRIPE_CLARITY_SESSION_PRICE_ID || '',
    amount: 29700, // $297.00
    currency: 'usd',
    interval: null,
    features: [
      '90-minute focused session',
      'Visual clarity map delivered',
      'Action-oriented insights',
      'Follow-up summary document'
    ]
  },
  {
    id: 'monthly_retainer',
    name: 'Monthly Insight Retainer',
    description: 'Ongoing strategic advisory with monthly insights and priority access',
    priceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_RETAINER_PRICE_ID || '',
    amount: 149700, // $1,497.00
    currency: 'usd',
    interval: 'month',
    features: [
      '2 Clarity Sessions per month',
      'Monthly insight report',
      'Priority email support',
      'Quarterly strategic review',
      'Access to private research'
    ]
  },
  {
    id: 'research_project',
    name: 'Strategic Research Project',
    description: 'Deep-dive research and analysis for complex strategic challenges',
    priceId: process.env.NEXT_PUBLIC_STRIPE_RESEARCH_PROJECT_PRICE_ID || '',
    amount: 497700, // $4,977.00
    currency: 'usd',
    interval: null,
    features: [
      'Comprehensive research project',
      '4-6 week delivery timeline',
      'Executive summary + detailed report',
      'Strategic recommendations',
      'Implementation roadmap',
      'Follow-up consultation session'
    ]
  }
];

/**
 * Create Stripe checkout session
 */
export async function createCheckoutSession(priceId: string, successUrl: string, cancelUrl: string): Promise<string> {
  try {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        successUrl,
        cancelUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId } = await response.json();
    return sessionId;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to initiate payment process');
  }
}

/**
 * Redirect to Stripe checkout
 */
export async function redirectToCheckout(priceId: string): Promise<void> {
  try {
    const stripe = await getStripe();
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const successUrl = `${origin}/dashboard?payment=success`;
    const cancelUrl = `${origin}/services?payment=cancelled`;

    const sessionId = await createCheckoutSession(priceId, successUrl, cancelUrl);

    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
}

/**
 * Get product by ID
 */
export function getProductById(productId: string): StripeProduct | undefined {
  return STRIPE_PRODUCTS.find(product => product.id === productId);
}

/**
 * Format currency amount
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount / 100);
}

/**
 * Create billing portal session
 */
export async function createBillingPortalSession(returnUrl: string): Promise<string> {
  try {
    const response = await fetch('/api/stripe/create-billing-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        returnUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create billing portal session');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Error creating billing portal session:', error);
    throw new Error('Failed to access billing portal');
  }
}

/**
 * Get customer subscriptions
 */
export async function getCustomerSubscriptions(): Promise<unknown[]> {
  try {
    const response = await fetch('/api/stripe/subscriptions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch subscriptions');
    }

    const { subscriptions } = await response.json();
    return subscriptions;
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw new Error('Failed to load subscription information');
  }
}
