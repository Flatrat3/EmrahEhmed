"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Dərslər", href: "/dersler" },
        { name: "Sınaqlar", href: "/test" },
        { name: "Canlı", href: "/canli" },
        { name: "Blog", href: "/blog" },
        { name: "Premium", href: "/premium", className: "text-amber-600 hover:text-amber-700 font-bold" },
        { name: "Əlaqə", href: "/contact" },
    ];

    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

    // Hide Navbar on specific pages (e.g., individual quiz pages)
    if (pathname?.startsWith("/test/") && pathname !== "/test") {
        return null;
    }

    return (
        <header className="border-b h-16 flex items-center px-4 md:px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <Link href="/" className="font-bold text-2xl text-primary mr-8" onClick={() => setIsMobileMenuOpen(false)}>
                EmrahEdu
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex ml-auto gap-6 text-sm font-medium items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "transition-colors hover:text-primary",
                            isActive(link.href) ? "text-primary font-bold" : "text-muted-foreground",
                            link.className
                        )}
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="h-6 w-px bg-border mx-2"></div>

                <Link
                    href="/profile"
                    className={cn(
                        "hover:text-primary transition-colors",
                        isActive("/profile") ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                >
                    Profil
                </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className="ml-auto md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "py-2 px-4 rounded-md transition-colors",
                                isActive(link.href) ? "bg-primary/10 text-primary font-bold" : "hover:bg-secondary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2 px-4 rounded-md hover:bg-secondary font-medium"
                    >
                        Profil
                    </Link>
                </div>
            )}
        </header>
    );
}
