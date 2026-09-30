"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { lawyerProfile } from "@/content/lawyer";
import { primaryNav } from "@/content/navigation";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label="S&M Law Firm home">
          <span className="brand-firm">S&M Law Firm</span>
          <span className="brand-name">{lawyerProfile.displayName}</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {primaryNav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-cta">
          <Link className="btn" href="/contact">
            <span className="cta-full">Schedule Consultation</span>
            <span className="cta-short">Consult</span>
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="visually-hidden">
            {open ? "Close menu" : "Open menu"}
          </span>
        </button>
      </div>

      <div className="mobile-drawer" id="mobile-nav" hidden={!open}>
        <nav aria-label="Mobile">
          {primaryNav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="btn" href="/contact">
            Schedule Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
