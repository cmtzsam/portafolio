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
    </>
  );
};

export default HubspotEmbed;