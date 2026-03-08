import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#2c2d32", color: "#ffffff", padding: "90px 30px" }}>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="inline-block mb-6">
            <img src="/logo.svg" alt="TERREOAK Landscaping" style={{ height: "60px", width: "auto" }} />
          </Link>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="font-bold mb-5 text-lg text-white">Useful Links</h3>
          <ul className="space-y-2 text-base text-white/70">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">News & Blog</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-bold mb-5 text-lg text-white">Services</h3>
          <ul className="space-y-2 text-base text-white/70">
            <li><Link href="/landscape-installs" className="hover:text-white transition-colors">Landscaping</Link></li>
            <li><Link href="/residential-snow-removal" className="hover:text-white transition-colors">Residential Snow Removal</Link></li>
            <li><Link href="/irrigation-blowouts" className="hover:text-white transition-colors">Irrigation Blowouts</Link></li>
            <li><Link href="/spring-cleanup-calgary" className="hover:text-white transition-colors">Spring Cleanup</Link></li>
            <li><Link href="/fall-cleanup" className="hover:text-white transition-colors">Fall Cleanup</Link></li>
            <li><Link href="/commercial-grounds-maintenance" className="hover:text-white transition-colors">Commercial Maintenance</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-bold mb-5 text-lg text-white">Contact Us</h3>
          <ul className="space-y-4 text-base text-white/70">
            <li className="text-white/90 font-medium">Calgary, Alberta, Canada</li>
            <li>
              <a href="tel:+15877077648" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                (587) 707-7648
              </a>
            </li>
            <li>
              <a href="mailto:services@TERREOAK.ca" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                services@TERREOAK.ca
              </a>
            </li>
            <li className="pt-2">
              <span className="block text-white/40 uppercase text-xs font-bold tracking-wider mb-1">Hours</span>
              <span className="text-sm">Mon–Thu: 8am–8pm</span><br />
              <span className="text-sm">Fri–Sat: 9am–5pm</span><br />
              <span className="text-sm">Sun: Closed</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-4 justify-center sm:justify-start">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.36-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mx-auto max-w-6xl mt-16 pt-10 border-t border-white/10 text-center text-lg text-white/40">
        © {new Date().getFullYear()} TERREOAK Landscaping & Snow. All rights reserved.
      </div>
    </footer>
  );
}
