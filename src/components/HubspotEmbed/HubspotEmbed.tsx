"use client";

import React, { useEffect, useId, useRef, useCallback } from "react";
import Script from "next/script";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region?: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}
<style jsx global>{`
  .hs-form { margin: 0 !important; }
  .hs-form form { margin: 0 !important; }
  .hs-form fieldset { margin: 0 !important; padding: 0 !important; }
  .hs-form .hs-form-field { margin-bottom: 12px !important; }
  .hs-form .hs_submit { margin: 0 !important; padding-bottom: env(safe-area-inset-bottom); }
  .hs-form .legal-consent-container { margin: 8px 0 0 !important; }
`}</style>
const HubspotEmbed = ({
  region,
  portalId,
  formId,
  targetId: explicitTargetId,
  className,
}: {
  region?: string;
  portalId: string;
  formId: string;
  targetId?: string;
  className?: string;
}) => {
  const autoId = useId().replace(/:/g, "_");
  const targetId = explicitTargetId ?? `hs-form-${autoId}`;

  const init = useRef(false);

  const create = useCallback(() => {
    if (init.current || typeof window === "undefined" || !window.hbspt) return;
    const el = document.getElementById(targetId);
    if (!el) return;
    if (el.childNodes.length > 0) { init.current = true; return; }
    window.hbspt.forms.create({ region, portalId, formId, target: `#${targetId}` });
    init.current = true;
  }, [region, portalId, formId, targetId]);

  useEffect(() => {
    create();
  }, [create]);

  return (
    <>
      <Script
        id="hs-forms-shell"
        src="https://js.hsforms.net/forms/shell.js"
        strategy="afterInteractive"
        onLoad={create}
      />
      <div id={targetId} className={className} />
      <style jsx global>{`
        /* Compact HubSpot form spacing in modal on mobile */
        .hs-form { margin-bottom: 0 !important; }
        .hs-form .hs_submit { margin-bottom: 0 !important; }
        .hs-form .legal-consent-container { margin: 8px 0 0 !important; }
      `}</style>
    </>
  );
};

export default HubspotEmbed;

