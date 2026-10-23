import { useState } from "react";
import { Laptop } from "lucide-react";
import { asset, siteData } from "../data/data";

export default function Logo({ decorative = false, className = "" }) {
  const { images } = siteData;
  const src = images.logo ? asset(images.logo) : "";
  const alt = decorative ? "" : images.logoAlt || siteData.company.name;
  const [state, setState] = useState(src ? "loading" : "missing");

  return (
    <span className={`logo-slot ${className}`.trim()}>
      {state !== "ready" ? (
        <span
          className="logo-fallback"
          role={decorative ? undefined : "img"}
          aria-label={decorative ? undefined : alt}
          aria-hidden={decorative ? true : undefined}
        >
          <Laptop size={22} aria-hidden="true" />
        </span>
      ) : null}
      {src && state !== "missing" ? (
        <img
          className={`logo-img${state === "ready" ? " is-ready" : ""}`}
          src={src}
          alt={alt}
          decoding="async"
          onLoad={() => setState("ready")}
          onError={() => setState("missing")}
        />
      ) : null}
    </span>
  );
}
