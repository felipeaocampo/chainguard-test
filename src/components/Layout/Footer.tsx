import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-11/1 max-w-[1152px] mx-auto grid grid-cols-4 py-[96px] ">
      <div className="footer-section-1 flex flex-col gap-[48px]">
        <div className="footer-links-group">
          <h4 className="mb-[12px]">Products</h4>
          <ul>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Chainguard Images</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Chainguard Services</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="mb-[12px]">Solutions</h4>
          <ul>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Container Image Security</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Vulnerability Remediation</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">
                Open Source Software Security
              </Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">
                Compliance & Risk Mitigation
              </Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">
                Software Supply Chain Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-section-1 flex flex-col gap-[48px]">
        <div className="footer-links-group">
          <h4 className="mb-[12px]">Developer</h4>
          <ul>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Open Source</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Docs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="mb-[12px]">Resources</h4>
          <ul>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Unchained Blog</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Chainguard Labs</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Customer Stories</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Scanners</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Security</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Education</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-section-1 flex flex-col gap-[48px]">
        <div className="footer-links-group">
          <h4 className="mb-[12px]">Company</h4>
          <ul>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">About</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Newsroom</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Careers</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Chainguard love</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Legal</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="mb-[12px]">Follow</h4>
          <ul>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Newsletter</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Twitter</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">Github</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">LinkedIn</Link>
            </li>
            <li className="mb-[8px]">
              <Link href="/chainguard-images">TikTok</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-section-1 flex flex-col gap-[48px]">
        <div className="footer-links-group">
          <p>&copy; 2023 Chainguard, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
