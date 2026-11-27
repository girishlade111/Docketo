"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/config/site";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className = "" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<"products" | "pages" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"products" | "pages" | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className={`${styles.navbar} ${className}`.trim()}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brandLink} aria-label="Docketo home">
          <img
            src="/assets/brand/6a9f9786ba671b49004b2392_Black.svg"
            alt="Docketo"
            width={127}
            height={34}
            className={styles.brandLogo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <div
            className={styles.dropdown}
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={styles.dropdownTrigger}
              aria-expanded={openDropdown === "products"}
              aria-controls="nav-dropdown-products"
              onClick={() => setOpenDropdown((cur) => (cur === "products" ? null : "products"))}
            >
              <span>Products</span>
              <img
                src="/assets/misc/6a97e0888b7091a5fa9de253_chevron-down.svg"
                alt=""
                width={16}
                height={16}
                className={`${styles.chevron} ${openDropdown === "products" ? styles.chevronRotated : ""}`}
              />
            </button>
            {openDropdown === "products" && (
              <div id="nav-dropdown-products" className={styles.dropdownPanel} role="menu">
                {SITE_CONFIG.headerNav.products.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={`${styles.dropdownItem} ${pathname === item.href ? styles.activeLink : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {SITE_CONFIG.headerNav.primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.activeLink : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={styles.dropdown}
            onMouseEnter={() => setOpenDropdown("pages")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={styles.dropdownTrigger}
              aria-expanded={openDropdown === "pages"}
              aria-controls="nav-dropdown-pages"
              onClick={() => setOpenDropdown((cur) => (cur === "pages" ? null : "pages"))}
            >
              <span>pages</span>
              <img
                src="/assets/misc/6a97e0888b7091a5fa9de253_chevron-down.svg"
                alt=""
                width={16}
                height={16}
                className={`${styles.chevron} ${openDropdown === "pages" ? styles.chevronRotated : ""}`}
              />
            </button>
            {openDropdown === "pages" && (
              <div id="nav-dropdown-pages" className={styles.dropdownPanel} role="menu">
                {SITE_CONFIG.headerNav.pagesDropdown.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    role="menuitem"
                    className={`${styles.dropdownItem} ${pathname === item.href ? styles.activeLink : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className={styles.desktopCta}>
          <Link href={SITE_CONFIG.headerNav.ctaHref} className="btn btn-dark">
            {SITE_CONFIG.headerNav.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span>Menu</span>
          <span className={styles.menuLines} aria-hidden="true">
            <span className={styles.menuLine} />
            <span className={styles.menuLineShort} />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-nav-drawer" className={styles.mobileDrawer}>
          <div className={styles.mobileGroup}>
            <button
              type="button"
              className={styles.mobileGroupBtn}
              aria-expanded={mobileSubmenu === "products"}
              onClick={() => setMobileSubmenu((cur) => (cur === "products" ? null : "products"))}
            >
              <span>Products</span>
              <img
                src="/assets/misc/6a97e0888b7091a5fa9de253_chevron-down.svg"
                alt=""
                width={16}
                height={16}
                className={`${styles.chevron} ${mobileSubmenu === "products" ? styles.chevronRotated : ""}`}
              />
            </button>
            {mobileSubmenu === "products" && (
              <div className={styles.mobileSublist}>
                {SITE_CONFIG.headerNav.products.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.mobileSublink}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {SITE_CONFIG.headerNav.primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.mobileLink}>
              {item.label}
            </Link>
          ))}

          <div className={styles.mobileGroup}>
            <button
              type="button"
              className={styles.mobileGroupBtn}
              aria-expanded={mobileSubmenu === "pages"}
              onClick={() => setMobileSubmenu((cur) => (cur === "pages" ? null : "pages"))}
            >
              <span>pages</span>
              <img
                src="/assets/misc/6a97e0888b7091a5fa9de253_chevron-down.svg"
                alt=""
                width={16}
                height={16}
                className={`${styles.chevron} ${mobileSubmenu === "pages" ? styles.chevronRotated : ""}`}
              />
            </button>
            {mobileSubmenu === "pages" && (
              <div className={styles.mobileSublist}>
                {SITE_CONFIG.headerNav.pagesDropdown.map((item) => (
                  <Link key={item.href + item.label} href={item.href} className={styles.mobileSublink}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className={styles.mobileCtaWrap}>
            <Link href={SITE_CONFIG.headerNav.ctaHref} className="btn btn-dark btn-full">
              {SITE_CONFIG.headerNav.ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
