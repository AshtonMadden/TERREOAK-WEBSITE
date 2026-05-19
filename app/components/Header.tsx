"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedSection(null); // Reset accordions when opening/closing
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 && window.innerWidth >= 1024);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;
  const isParentActive = (paths: string[]) => paths.some(path => pathname === path);

  const getTextLogoSrc = () => {
    if (pathname.includes("snow-removal")) return "/snow-text-logo.png";
    return "/landscape-text-logo.png";
  };

  return (
    <header style={styles.header}>
      <div style={{
        background: "#fafafa",
        backdropFilter: isScrolled ? "none" : "blur(16px)",
        WebkitBackdropFilter: isScrolled ? "none" : "blur(16px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease"
      }}>
        {/* Top contact banner */}
        <div style={{
          ...styles.topBar,
          maxHeight: isScrolled ? 0 : 40,
          opacity: isScrolled ? 0 : 1,
          overflow: "hidden",
          padding: isScrolled ? 0 : "6px 0",
          transition: "all 0.3s ease"
        }}>
          <div style={styles.topInner}>
            <div style={styles.topText} className="top-bar-text-container flex flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 whitespace-nowrap text-[11px] sm:text-[13px]">
              <a href="tel:+15877077648" className="hover:text-white/80 transition-colors">(587) 707-7648</a>
              <span className="opacity-50">|</span>
              <a href="mailto:services@TERREOAK.ca" className="hover:text-white/80 transition-colors">services@TERREOAK.ca</a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div style={{ ...styles.mainBar, minHeight: isScrolled ? 55 : 80, padding: isScrolled ? "0" : "5px 0", transition: "all 0.3s ease" }}>
          <div style={styles.mainInner}>
            {/* Logo = Home */}
            <Link href="/" style={styles.logoWrap} aria-label="TERREOAK Home">
              <Image
                src="/logo.png"
                alt="TERREOAK Landscaping"
                width={360}
                height={70}
                priority
                style={{ height: isScrolled ? "46px" : "70px", width: "auto", transition: "height 0.3s ease" }}
                className="object-contain"
              />
              <Image
                src={getTextLogoSrc()}
                alt="TERREOAK"
                width={360}
                height={55}
                priority
                style={{ height: isScrolled ? "38px" : "55px", width: "auto", marginLeft: "-18px", transition: "height 0.3s ease" }}
                className="object-contain hidden sm:block"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="nav-desktop hidden lg:flex items-center gap-1 xl:gap-4">
              <Link
                href="/landscape-installs"
                className="group relative inline-block"
                style={{
                  ...styles.navLink,
                  color: isActive("/landscape-installs") ? "#017a6d" : "#000000",
                }}
              >
                Landscaping
                <span className={`absolute bottom-[8px] left-[10px] w-[calc(100%-20px)] h-[2px] bg-[#017a6d] origin-left transition-transform duration-300 ${isActive("/landscape-installs") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>

              {/* Snowblowing stays as-is */}
              <Link
                href="/residential-snow-removal"
                className="group relative inline-block"
                style={{
                  ...styles.navLink,
                  color: isActive("/residential-snow-removal") ? "#017a6d" : "#000000",
                }}
              >
                Residential Snow
                <span className={`absolute bottom-[8px] left-[10px] w-[calc(100%-20px)] h-[2px] bg-[#017a6d] origin-left transition-transform duration-300 ${isActive("/residential-snow-removal") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>

              {/* SEASONAL dropdown */}
              <div className="navItem" style={styles.navItem}>
                <button
                  className="navTrigger group relative inline-block"
                  style={{
                    ...styles.navLink,
                    color: isParentActive(["/irrigation-blowouts", "/spring-cleanup-calgary", "/fall-cleanup"]) ? "#017a6d" : "#000000",
                  }}
                  type="button"
                >
                  Seasonal Services <span style={styles.caret}>▾</span>
                  <span className={`absolute bottom-[8px] left-[10px] w-[calc(100%-20px)] h-[2px] bg-[#017a6d] origin-left transition-transform duration-300 ${isParentActive(["/irrigation-blowouts", "/spring-cleanup-calgary", "/fall-cleanup"]) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>

                <div className="dropdown" style={styles.dropdown}>
                  <Link href="/irrigation-blowouts" className="dropdownLink" style={styles.dropdownLink}>
                    Irrigation Blowouts
                  </Link>
                  <Link href="/spring-cleanup-calgary" className="dropdownLink" style={styles.dropdownLink}>
                    Spring Clean Up
                  </Link>
                  <Link href="/fall-cleanup" className="dropdownLink" style={styles.dropdownLink}>
                    Fall Clean Up
                  </Link>
                </div>
              </div>

              {/* COMMERCIAL (single link now) */}
              <Link
                href="/commercial-grounds-maintenance"
                className="group relative inline-block"
                style={{
                  ...styles.navLink,
                  color: isActive("/commercial-grounds-maintenance") ? "#017a6d" : "#000000",
                }}
              >
                Commercial
                <span className={`absolute bottom-[8px] left-[10px] w-[calc(100%-20px)] h-[2px] bg-[#017a6d] origin-left transition-transform duration-300 ${isActive("/commercial-grounds-maintenance") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>

              {/* MORE dropdown */}
              <div className="navItem" style={styles.navItem}>
                <button
                  className="navTrigger group relative inline-block"
                  style={{
                    ...styles.navLink,
                    color: isParentActive(["/customer-support", "/projects", "/blog", "/about"]) ? "#017a6d" : "#000000",
                  }}
                  type="button"
                >
                  More <span style={styles.caret}>▾</span>
                  <span className={`absolute bottom-[8px] left-[10px] w-[calc(100%-20px)] h-[2px] bg-[#017a6d] origin-left transition-transform duration-300 ${isParentActive(["/customer-support", "/projects", "/blog", "/about"]) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>

                <div className="dropdown" style={styles.dropdown}>
                  <Link href="/customer-support" className="dropdownLink" style={styles.dropdownLink}>
                    Customer Support
                  </Link>
                  <Link href="/projects" className="dropdownLink" style={styles.dropdownLink}>
                    Projects
                  </Link>
                  <Link href="/blog" className="dropdownLink" style={styles.dropdownLink}>
                    Blog
                  </Link>
                  <Link href="/about" className="dropdownLink" style={styles.dropdownLink}>
                    About
                  </Link>
                </div>
              </div>

              {/* PRICE PROJECT BUTTON */}
              <Link
                href="/landscape-installs"
                style={styles.priceProjectBtn}
                className="hover:scale-105"
              >
                PRICE PROJECT
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              style={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              className="flex lg:hidden"
            >
              <div style={styles.hamburgerLine}></div>
              <div style={styles.hamburgerLine}></div>
              <div style={styles.hamburgerLine}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu (Full Screen) */}
      <div
        style={{
          ...styles.mobileDrawerOverlay,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? "visible" : "hidden",
        }}
        onClick={toggleMobileMenu}
      >
        <div
          style={{
            ...styles.mobileDrawer,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={styles.drawerHeader}>
            <Link href="/" onClick={toggleMobileMenu} style={styles.logoWrap}>
              <Image
                src="/logo.png"
                alt="TERREOAK Landscaping"
                width={360}
                height={70}
                style={{ height: "70px", width: "auto" }}
                className="object-contain"
              />
              <Image
                src={getTextLogoSrc()}
                alt="TERREOAK"
                width={360}
                height={55}
                style={{ height: "55px", width: "auto", marginLeft: "-18px" }}
                className="object-contain"
              />
            </Link>
            <button style={styles.closeSquare} onClick={toggleMobileMenu}>
              <span style={styles.closeText}>✕</span>
            </button>
          </div>

          <nav style={styles.drawerNav}>
            {/* Commercial Services */}
            <Link href="/commercial-grounds-maintenance" style={styles.drawerLink} onClick={toggleMobileMenu}>
              Commercial Services
            </Link>

            {/* Residential Snow */}
            <Link href="/residential-snow-removal" style={styles.drawerLink} onClick={toggleMobileMenu}>
              Residential Snow
            </Link>

            {/* Landscaping */}
            <Link href="/landscape-installs" style={styles.drawerLink} onClick={toggleMobileMenu}>
              Landscaping
            </Link>

            {/* Seasonal Services */}
            <div>
              <button style={styles.accordionHeader} onClick={() => toggleSection('seasonal')}>
                <span style={styles.drawerLinkText}>SEASONAL SERVICES</span>
                <div style={styles.plusIcon}>
                  {expandedSection === 'seasonal' ? '−' : '+'}
                </div>
              </button>
              {expandedSection === 'seasonal' && (
                <div style={styles.accordionContent}>
                  <Link href="/irrigation-blowouts" style={styles.drawerSubLink} onClick={toggleMobileMenu}>Irrigation Blowouts</Link>
                  <Link href="/spring-cleanup-calgary" style={styles.drawerSubLink} onClick={toggleMobileMenu}>Spring Clean Up</Link>
                  <Link href="/fall-cleanup" style={styles.drawerSubLink} onClick={toggleMobileMenu}>Fall Clean Up</Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button style={styles.accordionHeader} onClick={() => toggleSection('resources')}>
                <span style={styles.drawerLinkText}>Resources</span>
                <div style={styles.plusIcon}>
                  {expandedSection === 'resources' ? '−' : '+'}
                </div>
              </button>
              {expandedSection === 'resources' && (
                <div style={styles.accordionContent}>
                  <Link href="/projects" style={styles.drawerSubLink} onClick={toggleMobileMenu}>Projects</Link>
                  <Link href="/blog" style={styles.drawerSubLink} onClick={toggleMobileMenu}>Blog</Link>
                  <Link href="/about" style={styles.drawerSubLink} onClick={toggleMobileMenu}>About</Link>
                  <Link href="/customer-support" style={styles.drawerSubLink} onClick={toggleMobileMenu}>Customer Support</Link>
                </div>
              )}
            </div>

            {/* Mobile PRICE PROJECT Button */}
            <div style={{ marginTop: 20 }}>
              <Link
                href="/landscape-installs"
                style={styles.drawerPriceProjectBtn}
                onClick={toggleMobileMenu}
              >
                PRICE PROJECT
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: { width: "100%", position: "fixed", zIndex: 100, top: 0, left: 0 },

  topBar: {
    background: "#017a6d",
    minHeight: 26,
    display: "flex",
    alignItems: "center",
    padding: "6px 0",
  },
  topText: {
    color: "#ffffff",
    fontSize: 10,
    width: "100%",
    fontWeight: 700,
    letterSpacing: "0.05em",
    lineHeight: "1.2",
    textTransform: "uppercase",
  },
  topInner: {
    maxWidth: 1200,
    margin: "0 auto",
    width: "100%",
    padding: "0 20px",
  },
  mainBar: {
    background: "transparent",
    minHeight: 80,
    display: "flex",
    alignItems: "center",
    padding: "5px 0",
  },
  mainInner: {
    maxWidth: 1440,
    margin: "0 auto",
    width: "100%",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  logoWrap: { display: "flex", alignItems: "center", gap: 0, textDecoration: "none" },

  nav: {
    alignItems: "center",
    gap: 12,
  },
  navItem: { position: "relative", display: "flex", alignItems: "center" },
  navLink: {
    color: "#000000",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0.3,
    textDecoration: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "10px 8px",
    textTransform: "uppercase",
  },
  caret: { marginLeft: 4, opacity: 0.8, fontSize: 9, verticalAlign: "middle" },

  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    minWidth: 240,
    background: "#ffffff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12,
    padding: 8,
    marginTop: 8,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    zIndex: 50,
    display: "none",
  },
  dropdownLink: {
    display: "block",
    padding: "10px 12px",
    borderRadius: 10,
    color: "#000000",
    textDecoration: "none",
    fontSize: 13.5,
    fontWeight: 600,
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },



  hamburger: {
    flexDirection: "column",
    gap: 5,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 10,
  },
  hamburgerLine: {
    width: 25,
    height: 3,
    background: "#000000",
    borderRadius: 2,
  },

  mobileDrawerOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#fafafa", // Softer white
    zIndex: 200,
    transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s",
  },
  mobileDrawer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    padding: "30px 24px",
    overflowY: "auto",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  closeSquare: {
    background: "#01fa6d", // Light green from site primary green
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    borderRadius: 4,
  },
  closeText: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerNav: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  drawerLink: {
    color: "#000000", // Changed to black for white background
    fontSize: 28, // Matches the large bold text in image
    fontWeight: 900,
    textDecoration: "none",
    display: "block",
    textTransform: "uppercase",
  },
  drawerLinkText: {
    color: "#000000", // Changed to black for white background
    fontSize: 28,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  accordionHeader: {
    width: "100%",
    background: "transparent",
    border: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    textAlign: "left",
  },
  plusIcon: {
    width: 60,
    height: 34,
    borderRadius: 99,
    border: "1.5px solid #000000", // Changed to black
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "normal",
    color: "#000000", // Ensure the +/- is black
  },
  accordionContent: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: "20px 0 10px 20px",
  },
  drawerSubLink: {
    color: "rgba(0,0,0,0.8)", // Changed to black for light background
    fontSize: 18,
    fontWeight: 700,
    textDecoration: "none",
    textTransform: "uppercase",
  },

  priceProjectBtn: {
    background: "#01fa6d",
    color: "#000000",
    fontSize: 12,
    fontWeight: 900,
    padding: "10px 18px",
    borderRadius: 99,
    textTransform: "uppercase",
    textDecoration: "none",
    marginLeft: 10,
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  drawerPriceProjectBtn: {
    background: "#01fa6d",
    color: "#000000",
    fontSize: 20,
    fontWeight: 900,
    padding: "16px",
    borderRadius: 12,
    textTransform: "uppercase",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    width: "100%",
  }
};
