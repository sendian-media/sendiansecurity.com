import { useEffect, useRef, useState } from 'react';
import { Cookie } from 'lucide-react';

// Ported from sendiangroup.com src/components/analytics/AnalyticsConsent.tsx
// (English only; theme via the --accent/--surface tokens aliased to the security palette in global.css).

type Consent = 'accepted' | 'rejected';
type StoredConsent = { version: string; value: Consent; updatedAt: number };
type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityFunction;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_STORAGE_KEY = 'sendian.analytics-consent';
const CONSENT_VERSION = '2026-06';
const CONSENT_MAX_AGE = 1000 * 60 * 60 * 24 * 180;

const copy = {
  en: {
    title: 'Cookie preferences',
    description: 'Necessary cookies keep the site working. With your permission, we also use analytics cookies from Microsoft Clarity and Google Analytics to understand how visitors use this website.',
    privacy: 'Read the Privacy Policy',
    accept: 'Accept all',
    reject: 'Reject all',
    manage: 'Manage',
    save: 'Save preferences',
    cancel: 'Cancel',
    necessary: 'Necessary',
    necessaryDescription: 'Remember your privacy choice and keep the website working.',
    alwaysOn: 'Always on',
    analyticsLabel: 'Analytics',
    analyticsDescription: 'Allow Microsoft Clarity and Google Analytics to collect website interaction analytics.',
    settingsTitle: 'Analytics cookie settings',
    settingsDescription: 'Microsoft Clarity and Google Analytics help us understand how visitors use the website through interaction analytics, heatmaps, and session replay.',
    allowLabel: 'Allow analytics cookies',
    allowDescription: 'Load Microsoft Clarity and Google Analytics to help us improve the website.',
    rejectLabel: 'Reject analytics cookies',
    rejectDescription: 'Do not load Microsoft Clarity or Google Analytics.',
  },
} as const;

const readConsent = (): Consent | null => {
  try {
    const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? '') as StoredConsent;
    if (
      stored.version !== CONSENT_VERSION ||
      !['accepted', 'rejected'].includes(stored.value) ||
      Date.now() - stored.updatedAt > CONSENT_MAX_AGE
    ) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return stored.value;
  } catch {
    return null;
  }
};

const saveConsent = (value: Consent) => {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
      version: CONSENT_VERSION,
      value,
      updatedAt: Date.now(),
    } satisfies StoredConsent));
  } catch {
    // Keep the current-page choice even when browser storage is unavailable.
  }
};

const getClarity = () => {
  if (window.clarity) return window.clarity;

  const clarity: ClarityFunction = (...args) => {
    clarity.q?.push(args);
  };
  clarity.q = [];
  window.clarity = clarity;
  return clarity;
};

const loadClarity = (projectId: string) => {
  const clarity = getClarity();
  clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });

  if (document.querySelector('script[data-sendian-clarity]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
  script.dataset.sendianClarity = 'true';
  document.head.append(script);
};

const loadGa = (measurementId: string) => {
  if (document.querySelector('script[data-sendian-ga]')) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };
  }
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.sendianGa = 'true';
  document.head.append(script);
};

// GA/Clarity cookies are first-party, so iterating document.cookie covers the
// per-stream `_ga_*` variants without hardcoding them.
const clearAnalyticsCookies = () => {
  window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' });
  window.clarity?.('consent', false);
  // Revoke GA consent first so its periodic hits stop rewriting `_ga` cookies.
  window.gtag?.('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  const domains = [location.hostname, `.${location.hostname}`];
  for (const name of document.cookie.split(';').map((part) => part.split('=')[0]?.trim() ?? '')) {
    if (!/^(_ga|_gid|_gat|_clck|_clsk)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax`;
    }
  }
};

interface Props {
  clarityProjectId?: string;
  gaMeasurementId?: string;
}

export default function AnalyticsConsent({ clarityProjectId, gaMeasurementId }: Props) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [bannerAnalytics, setBannerAnalytics] = useState(false);
  const [settingsChoice, setSettingsChoice] = useState<Consent>('rejected');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const consentRef = useRef<Consent | null>(null);
  const text = copy.en;
  const privacyPath = '/privacy-policy-2';

  const openSettings = (trigger?: HTMLElement) => {
    triggerRef.current = trigger ?? document.activeElement as HTMLElement;
    setSettingsChoice(consentRef.current ?? 'rejected');
    dialogRef.current?.showModal();
  };

  const closeSettings = () => {
    dialogRef.current?.close();
  };

  const updateConsent = (nextConsent: Consent) => {
    saveConsent(nextConsent);
    consentRef.current = nextConsent;
    setConsent(nextConsent);
    setExpanded(false);

    if (nextConsent === 'accepted') {
      if (clarityProjectId) loadClarity(clarityProjectId);
      if (gaMeasurementId) loadGa(gaMeasurementId);
    } else {
      clearAnalyticsCookies();
    }
  };

  useEffect(() => {
    const storedConsent = readConsent();
    consentRef.current = storedConsent;
    setConsent(storedConsent);
    setReady(true);
    if (storedConsent === 'accepted') {
      if (clarityProjectId) loadClarity(clarityProjectId);
      if (gaMeasurementId) loadGa(gaMeasurementId);
    }

    const revealSettingsButtons = () => {
      document.querySelectorAll<HTMLElement>('[data-open-analytics-settings]').forEach((button) => {
        button.hidden = false;
      });
    };
    revealSettingsButtons();

    const openSettingsFromFooter = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest<HTMLElement>('[data-open-analytics-settings]');
      if (!trigger) return;
      event.preventDefault();
      openSettings(trigger);
    };

    document.addEventListener('click', openSettingsFromFooter);
    return () => document.removeEventListener('click', openSettingsFromFooter);
  }, [clarityProjectId, gaMeasurementId]);

  if (!ready) return null;

  return (
    <>
      {consent === null && (
        <aside
          aria-labelledby="analytics-consent-title"
          className="fixed bottom-4 right-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 text-neutral-900 shadow-[0_18px_48px_rgba(26,26,26,0.16)] sm:right-6 sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-1.5">
            <h2 id="analytics-consent-title" className="flex items-center gap-2 text-sm font-bold tracking-tight text-[var(--text-primary)]">
              <Cookie aria-hidden="true" className="size-4 text-[var(--accent-text)]" />
              {text.title}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{text.description}</p>
            <a href={privacyPath} className="w-fit text-xs font-semibold text-[var(--accent-text)] underline underline-offset-4 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]">
              {text.privacy}
            </a>
          </div>

          {expanded && (
            <fieldset className="flex flex-col divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <legend className="sr-only">{text.settingsTitle}</legend>
              <div className="flex items-start justify-between gap-4 p-3">
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{text.necessary}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-[var(--text-secondary)]">{text.necessaryDescription}</span>
                </span>
                <span className="shrink-0 pt-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">{text.alwaysOn}</span>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-4 p-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--accent-text)]">
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{text.analyticsLabel}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-[var(--text-secondary)]">{text.analyticsDescription}</span>
                </span>
                <input
                  type="checkbox"
                  checked={bannerAnalytics}
                  onChange={(event) => setBannerAnalytics(event.target.checked)}
                  className="mt-0.5 size-5 shrink-0 accent-[var(--accent-text)]"
                />
              </label>
            </fieldset>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => updateConsent('accepted')}
              className="min-h-10 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-light)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"
            >
              {text.accept}
            </button>
            <button
              type="button"
              onClick={() => updateConsent('rejected')}
              className="min-h-10 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-neutral-500 hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"
            >
              {text.reject}
            </button>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => {
                if (expanded) updateConsent(bannerAnalytics ? 'accepted' : 'rejected');
                else setExpanded(true);
              }}
              className="ms-auto min-h-10 rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-secondary)] underline underline-offset-4 hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"
            >
              {expanded ? text.save : text.manage}
            </button>
          </div>
        </aside>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="analytics-settings-title"
        className="w-[min(calc(100%-2rem),34rem)] rounded-2xl border border-[var(--border)] bg-white p-0 text-neutral-900 shadow-lg backdrop:bg-black/45"
        onClose={() => triggerRef.current?.focus()}
      >
        <form
          method="dialog"
          onSubmit={(event) => {
            event.preventDefault();
            updateConsent(settingsChoice);
            closeSettings();
          }}
          className="p-6 sm:p-8"
        >
          <h2 id="analytics-settings-title" className="text-xl font-bold">{text.settingsTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{text.settingsDescription}</p>

          <fieldset className="mt-6 space-y-3">
            <legend className="sr-only">{text.settingsTitle}</legend>
            <label className="flex cursor-pointer gap-3 rounded-xl border border-[var(--border)] p-4 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--accent)]">
              <input
                type="radio"
                name="analytics-consent"
                value="accepted"
                checked={settingsChoice === 'accepted'}
                onChange={() => setSettingsChoice('accepted')}
                className="mt-1 size-5 shrink-0 accent-[var(--accent-text)]"
              />
              <span>
                <span className="block font-semibold">{text.allowLabel}</span>
                <span className="mt-1 block text-sm text-[var(--text-secondary)]">{text.allowDescription}</span>
              </span>
            </label>
            <label className="flex cursor-pointer gap-3 rounded-xl border border-[var(--border)] p-4 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--accent)]">
              <input
                type="radio"
                name="analytics-consent"
                value="rejected"
                checked={settingsChoice === 'rejected'}
                onChange={() => setSettingsChoice('rejected')}
                className="mt-1 size-5 shrink-0 accent-[var(--accent-text)]"
              />
              <span>
                <span className="block font-semibold">{text.rejectLabel}</span>
                <span className="mt-1 block text-sm text-[var(--text-secondary)]">{text.rejectDescription}</span>
              </span>
            </label>
          </fieldset>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeSettings}
              className="min-h-10 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-neutral-500 hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"
            >
              {text.cancel}
            </button>
            <button
              type="submit"
              className="min-h-10 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-light)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"
            >
              {text.save}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
