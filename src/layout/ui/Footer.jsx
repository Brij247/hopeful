import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div>
            {" "}
            <div className="flex items-center gap-3 mb-4">
              {" "}
              <img
                src="/hope-logo.png"
                alt="Excel Hope Logo"
                className="h-10 w-10 rounded-full"
              />{" "}
              <span className="text-xl font-bold tracking-wide">
                Excel HOPE
              </span>{" "}
            </div>{" "}
            <p className="text-gray-400 max-w-xs mb-4">
              {" "}
              Transforming lives through education, compassion, and hope. A
              Christian-based charity for underprivileged children.{" "}
            </p>{" "}
            <div className="flex gap-4 mt-2">
              {" "}
              <a
                href="https://facebook.com/excelhope"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="hover:text-blue-400"
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />{" "}
                </svg>{" "}
              </a>{" "}
              <a
                href="https://instagram.com/excelhope"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="hover:text-pink-400"
              >
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {" "}
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="currentColor"
                    className="text-pink-500 group-hover:text-pink-400 transition"
                  />{" "}
                  <path
                    d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.2-7.95a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"
                    fill="#fff"
                  />{" "}
                </svg>{" "}
              </a>{" "}
              <a
                href="mailto:support@excelhope.org"
                aria-label="Email"
                className="hover:text-blue-300"
              >
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {" "}
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="currentColor"
                    className="text-blue-400 group-hover:text-blue-300 transition"
                  />{" "}
                  <path
                    d="M6 8.5l6 4.5 6-4.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <rect
                    x="6"
                    y="8.5"
                    width="12"
                    height="7"
                    rx="2"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />{" "}
                </svg>{" "}
              </a>{" "}
            </div>{" "}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/sponser-a-child">Sponsor a Child</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
          <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
            <p>📧 support@excelhope.org</p>
            <p>📞 +91 94959 27117</p>
            <p>📞 +91 97468 18422</p>
            <p>
              📍 Excel Hope, Kumbanad P O,
              <br />
              Pathanamthitta dist, Kerala - 689547
            </p>
          </div>
        </div>

        {/* Parent Organization */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Parent Organization</h4>
          <div className="text-gray-400 text-sm leading-relaxed">
            <p className="font-medium text-gray-300">Excel Ministries</p>
            <p>Reg. No: P.14/09</p>
            <p className="mt-2 italic">
              “Reaching the young generation with love of Jesus ❤️”
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm px-4">
        <p>
          &copy; {new Date().getFullYear()} Excel HOPE. All rights reserved.
        </p>
        <p className="mt-1">
          Managed under Excel Ministries | Registered Society
        </p>
      </div>
    </footer>
  );
}
