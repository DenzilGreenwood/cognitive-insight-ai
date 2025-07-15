export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'client' | 'admin';
  createdAt: Date;
  lastLoginAt: Date;
}

export interface ClientProfile {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IntakeForm {
  id: string;
  clientId: string;
  formData: {
    primaryChallenge: string;
    desiredOutcome: string;
    timeline: string;
    budget: string;
    previousExperience: string;
    additionalContext: string;
  };
  status: 'pending' | 'reviewed' | 'approved';
  submittedAt: Date;
  reviewedAt?: Date;
}

export interface EncryptedEntry {
  id: string;
  clientId: string;
  encryptedData: string; // AES-GCM encrypted JSON
  metadata: {
    type: 'journal' | 'insight' | 'note';
    title: string;
    createdAt: Date;
    updatedAt: Date;
    version: string;
  };
  iv: string; // Initialization vector for AES-GCM
  salt: string; // Salt for PBKDF2
}

export interface ClarityMap {
  id: string;
  clientId: string;
  title: string;
  encryptedContent: string; // Encrypted map data
  thumbnailUrl?: string;
  metadata: {
    type: 'clarity_session' | 'strategic_advisory' | 'insight_report';
    sessionDate: Date;
    facilitator: string;
    status: 'draft' | 'completed' | 'delivered';
  };
  iv: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deliverable {
  id: string;
  clientId: string;
  title: string;
  description: string;
  fileUrl: string; // Firebase Storage URL
  fileName: string;
  fileSize: number;
  mimeType: string;
  uploadedBy: string; // Admin UID
  metadata: {
    type: 'insight_report' | 'clarity_map' | 'research_document';
    projectId?: string;
    sessionId?: string;
  };
  isEncrypted: boolean;
  downloadCount: number;
  createdAt: Date;
  expiresAt?: Date;
}

export interface Session {
  id: string;
  clientId: string;
  type: 'clarity_session' | 'strategic_advisory';
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduledDate: Date;
  duration: number; // minutes
  bookingLink?: string; // Calendly/TidyCal link
  notes?: string;
  remainingUses: number;
  expiresAt: Date;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  clientId: string;
  stripeSubscriptionId: string;
  stripePriceId: string;
  status: 'active' | 'cancelled' | 'past_due' | 'paused';
  plan: {
    name: string;
    type: 'clarity_session' | 'monthly_retainer' | 'research_project';
    sessionsIncluded: number;
    price: number;
    interval: 'month' | 'year';
  };
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Feedback {
  id: string;
  clientId: string;
  type: 'testimonial' | 'private_feedback';
  rating: number; // 1-5 stars
  content: string;
  sessionId?: string;
  deliverableId?: string;
  status: 'pending' | 'approved' | 'rejected';
  isPublic: boolean;
  submittedAt: Date;
  reviewedAt?: Date;
  reviewedBy?: string; // Admin UID
}

export interface SystemLog {
  id: string;
  action: string;
  userId: string;
  userRole: 'client' | 'admin';
  resource: string;
  resourceId: string;
  metadata: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: Date;
}

// Encryption types
export interface EncryptionKeyPair {
  encryptedPassphrase: string;
  recoveryKey: string; // Shown once, used to decrypt passphrase
  salt: string;
  iterations: number;
  createdAt: Date;
}

export interface EncryptedBlob {
  data: string; // Base64 encoded encrypted data
  iv: string; // Initialization vector
  salt: string; // PBKDF2 salt
  version: string; // Encryption version (e.g., "1.1.1")
}

// Stripe types
export interface StripeProduct {
  id: string;
  name: string;
  description: string;
  priceId: string;
  amount: number;
  currency: string;
  interval: 'month' | 'year' | null;
  features: string[];
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  phone?: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

// Dashboard types
export interface DashboardStats {
  totalClients: number;
  activeSessions: number;
  completedProjects: number;
  revenue: {
    thisMonth: number;
    lastMonth: number;
    growth: number;
  };
}

export interface ClientDashboardData {
  profile: ClientProfile;
  activeSessions: Session[];
  recentDeliverables: Deliverable[];
  subscription?: Subscription;
  encryptedEntries: EncryptedEntry[];
  clarityMaps: ClarityMap[];
}
