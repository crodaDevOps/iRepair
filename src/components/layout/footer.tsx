"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";

/**
 * Footer Component for iRepair Technologies
 *
 * Features:
 * - Multi-column responsive layout (1 col mobile, 2 cols tablet, 4 cols desktop)
 * - Sticky footer behavior
 * - Dark mode support via design tokens
 * - WCAG 2.1 AA compliant
 * - Newsletter signup
 * - Social media links
 */

const quickLinks = [
  { label: "Catalog", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const categoryLinks = [
  { label: "iPhone Parts", href: "/products?brand=Apple" },
  { label: "Samsung Parts", href: "/products?brand=Samsung" },
  { label: "Motorola Parts", href: "/products?brand=Motorola" },
];

const supportLinks = [
  { label: "Return Policy", href: "/return-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Request a Quote", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: Facebook,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: Linkedin,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setSubmitMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitMessage("Thank you for subscribing!");
    setEmail("");
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(""), 3000);
  };

  return (
    <footer
      className="mt-auto bg-primary-dark text-primary-foreground"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company Info Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center" aria-label="iRepair Technologies home">
              <Image
                src="/irepair-logo.jpeg"
                alt="iRepair Technologies"
                width={160}
                height={52}
                className="h-10 w-auto rounded-md"
              />
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/75">
              Your trusted B2B source for high-quality cell phone repair parts.
              Wholesale pricing on OEM and aftermarket components for iPhone,
              Samsung, Motorola, and more.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop by Brand</h3>
            <nav aria-label="Product categories">
              <ul className="space-y-3">
                {categoryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Support Column */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="not-italic space-y-3">
                <a
                  href="mailto:sales@irepairtech.com"
                  className="flex items-center gap-3 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>sales@irepairtech.com</span>
                </a>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-3 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>1-800-555-1234</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-primary-foreground/75">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    1234 Industrial Parkway
                    <br />
                    Los Angeles, CA 90001
                  </span>
                </div>
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 rounded-lg bg-primary-foreground/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-primary-foreground/75">
                Get updates on new products, special offers, and industry news.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full max-w-md gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for newsletter
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground"
                aria-describedby={submitMessage ? "newsletter-message" : undefined}
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={isSubmitting}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {isSubmitting ? (
                  "..."
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Subscribe to newsletter</span>
                  </>
                )}
              </Button>
            </form>
          </div>
          {submitMessage && (
            <p
              id="newsletter-message"
              className="mt-2 text-sm text-primary-foreground"
              role="status"
              aria-live="polite"
            >
              {submitMessage}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-foreground/20" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-primary-foreground/75">
            &copy; {currentYear} iRepair Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
            >
              Terms of Service
            </Link>
            <span className="text-primary-foreground/40" aria-hidden="true">
              |
            </span>
            <Link
              href="/return-policy"
              className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
            >
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
