"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ArrowRight,
  Truck,
  ShieldCheck,
  DollarSign,
  CheckCircle2,
} from "lucide-react";

// ============================================================================
// iRepair Technologies — Simple Landing Page
// Header, Hero with search + CTA, value pillars, simple quote CTA strip.
// All other marketing content has been moved to /products and /about.
// ============================================================================

function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/products?search=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-border bg-gradient-to-b from-primary-light to-background"
    >
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-20 text-center md:py-28 lg:py-32">
        <Badge
          variant="secondary"
          className="gap-1.5 border border-primary/15 bg-primary/10 px-3 py-1 text-primary"
        >
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          Trusted by 1,000+ repair shops across the USA
        </Badge>

        <h1
          id="hero-heading"
          className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Wholesale cell phone parts,
          <br className="hidden sm:inline" />{" "}
          <span className="text-primary">delivered fast.</span>
        </h1>

        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          iRepair Technologies supplies OEM and aftermarket components to
          independent repair shops. Quality guaranteed, volume pricing, and
          same-day shipping.
        </p>

        {/* Search + CTA */}
        <form
          onSubmit={handleSearch}
          role="search"
          aria-label="Search parts catalog"
          className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by model, SKU, or part name"
              aria-label="Search parts"
              className="h-12 border-border bg-card pl-11 text-base shadow-sm"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 px-6">
            Search Catalog
          </Button>
        </form>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 border-border bg-card px-6"
          >
            <Link href="/products">
              Browse All Products
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="h-11 px-6">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================

const pillars = [
  {
    icon: Truck,
    title: "Same-day shipping",
    description: "Orders placed before 2 PM EST ship the same business day.",
  },
  {
    icon: ShieldCheck,
    title: "90-day warranty",
    description: "Every part tested before shipping and backed by our warranty.",
  },
  {
    icon: DollarSign,
    title: "Wholesale pricing",
    description: "Competitive B2B rates with volume discounts on every order.",
  },
];

function ValuePillarsSection() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="border-b border-border bg-muted/40"
    >
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 id="pillars-heading" className="sr-only">
          Why choose iRepair Technologies
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-border/70 bg-card">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <pillar.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================

function CallToActionStrip() {
  return (
    <section aria-labelledby="cta-heading" className="bg-primary-dark">
      <div className="container mx-auto flex flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <h2
            id="cta-heading"
            className="text-balance text-2xl font-bold text-primary-foreground sm:text-3xl"
          >
            Can&apos;t find the part you need?
          </h2>
          <p className="mt-2 text-pretty text-primary-foreground/80">
            We can source parts for nearly any device. Send us a quote request
            and a specialist will respond within one business day.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="h-11 bg-primary-foreground px-6 text-primary hover:bg-primary-foreground/90"
        >
          <Link href="/contact">
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

// ============================================================================

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePillarsSection />
      <CallToActionStrip />
    </>
  );
}
