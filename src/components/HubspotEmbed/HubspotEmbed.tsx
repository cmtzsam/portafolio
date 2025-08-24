"use client";
import { useEffect, useId, useRef } from "react";
import Script from "next/script";

type Props = { region?: string; portalId: string; formId: string; className?: string };

export default function HubspotEmbed({ region, portalId, formId, className }: Props) {
  const targetId = useId().replace(/:/g, "_");
  const init = useRef(false);

  const create = () => {
    if (init.current || !window.hbspt) return;
    const el = document.getElementById(targetId);
    if (!el || el.childNodes.length) { init.current = true; return; }
    window.hbspt.forms.create({ region, portalId, formId, target: `#${targetId}` });
    init.current = true;
  };

  // Si el script ya estaba en la página, intenta crear al hidratar
  useEffect(() => { create(); }, [region, portalId, formId]);

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
}