"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PanelTop,
  Battery,
  Usb,
  Camera,
  Wrench,
  Search,
  ArrowRight,
  Truck,
  ShieldCheck,
  DollarSign,
  Headphones,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// iRepair Technologies — Catalog landing
// Moved from previous home page: categories, brands, features.
// ============================================================================

const categories = [
  {
    name: "Screens & LCDs",
    icon: PanelTop,
    description: "Display assemblies, digitizers, and LCD screens.",
    count: 156,
    href: "/products?category=Screens",
  },
  {
    name: "Batteries",
    icon: Battery,
    description: "Original and aftermarket batteries for all models.",
    count: 89,
    href: "/products?category=Batteries",
  },
  {
    name: "Charging Ports",
    icon: Usb,
    description: "USB-C, Lightning, and charging flex cables.",
    count: 45,
    href: "/products?category=ChargingPorts",
  },
  {
    name: "Cameras",
    icon: Camera,
    description: "Front and rear camera modules and lens assemblies.",
    count: 67,
    href: "/products?category=Cameras",
  },
  {
    name: "Back Glass",
    icon: PanelTop,
    description: "Back glass panels and housing replacements.",
    count: 34,
    href: "/products?category=BackGlass",
  },
  {
    name: "Other Parts",
    icon: Wrench,
    description: "Buttons, speakers, sensors, and small components.",
    count: 23,
    href: "/products?category=Other",
  },
];

const brands = [
  {
    name: "Apple",
    deviceCount: 18,
    href: "/products?brand=Apple",
    description: "iPhone, iPad, and accessory parts.",
  },
  {
    name: "Samsung",
    deviceCount: 20,
    href: "/products?brand=Samsung",
    description: "Galaxy S, Note, and A-series parts.",
  },
  {
    name: "Motorola",
    deviceCount: 12,
    href: "/products?brand=Motorola",
    description: "Moto G, Edge, and Razr parts.",
  },
];

const features = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description:
      "Same-day shipping on orders placed before 2 PM EST. Free shipping on orders over $200.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "All parts tested before shipping. 90-day warranty on every product.",
  },
  {
    icon: DollarSign,
    title: "Wholesale Pricing",
    description:
      "Competitive wholesale pricing with volume discounts on every order.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated support team for technical questions and order help.",
  },
];

// ============================================================================

function CatalogHero({ initialSearch }: { initialSearch: string }) {
  const [query, setQuery] = React.useState(initialSearch);

  return (
    <section className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Parts Catalog
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Browse by category or brand to find the exact parts you need.
          </p>

          <form
            role="search"
            aria-label="Search parts catalog"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              // In a real app this would trigger a filtered query; for now we
              // just keep the controlled state so the input reflects URL.
            }}
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
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============================================================================

interface CategoryCardProps {
  name: string;
  icon: React.ElementType;
  description: string;
  count: number;
  href: string;
}

function CategoryCard({
  name,
  icon: Icon,
  description,
  count,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full focus-visible:outline-none"
      aria-label={`Browse ${name} — ${count} products`}
    >
      <Card className="h-full border-border/70 bg-card transition-colors hover:border-primary/40 hover:shadow-md">
        <CardContent className="p-6">
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors",
              "group-hover:bg-primary group-hover:text-primary-foreground",
            )}
          >
            <Icon
              className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground"
              aria-hidden="true"
            />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {name}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <Badge variant="secondary" className="text-xs">
            {count} products
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}

function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="border-b border-border"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10 flex flex-col gap-2">
          <h2
            id="categories-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            Browse by Category
          </h2>
          <p className="text-muted-foreground">
            Find the exact parts you need from our full catalog of components.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================

interface BrandCardProps {
  name: string;
  deviceCount: number;
  href: string;
  description: string;
}

function BrandCard({ name, deviceCount, href, description }: BrandCardProps) {
  return (
    <Link
      href={href}
      className="group block focus-visible:outline-none"
      aria-label={`Shop ${name} parts — ${deviceCount} devices`}
    >
      <Card className="border-border/70 bg-card transition-colors hover:border-primary/40 hover:shadow-md">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl font-bold uppercase text-primary">
            {name.slice(0, 2)}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {name}
            </h3>
            <p className="mb-2 line-clamp-1 text-sm text-muted-foreground">
              {description}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-xs">
                {deviceCount} devices
              </Badge>
              <span className="inline-flex items-center font-medium text-primary group-hover:underline">
                Shop {name}
                <ArrowRight
                  className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function BrandsSection() {
  return (
    <section aria-labelledby="brands-heading" className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10 flex flex-col gap-2">
          <h2
            id="brands-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            Shop by Brand
          </h2>
          <p className="text-muted-foreground">
            We carry parts for all major smartphone brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================

function FeaturesSection() {
  return (
    <section aria-labelledby="features-heading">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            Why wholesale with iRepair?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We&apos;re committed to quality parts and friction-free ordering
            for your repair business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/70 bg-card text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon
                    className="h-7 w-7 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";

  return (
    <>
      <CatalogHero initialSearch={initialSearch} />
      <CategoriesSection />
      <BrandsSection />
      <FeaturesSection />
    </>
  );
}

export default function ProductsPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="animate-pulse text-muted-foreground">Loading catalog...</p>
        </div>
      }
    >
      <CatalogContent />
    </React.Suspense>
  );
}
