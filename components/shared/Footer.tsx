"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
    const pathname = usePathname();

    // Hide Footer on specific pages (e.g., individual quiz pages)
    if (pathname?.startsWith("/test/") && pathname !== "/test") {
        return null;
    }

    return (
        <footer className="bg-slate-900 py-12 px-4 md:px-8 text-slate-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="font-bold text-2xl text-white mb-4 block">EmrahEdu</Link>
                    <p className="text-sm text-slate-400 mb-6">
                        Müasir dövrün tələblərinə uyğun, keyfiyyətli və əlçatan təhsil platforması.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Platforma</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/dersler" className="hover:text-white">Dərslər</Link></li>
                        <li><Link href="/test" className="hover:text-white">Sınaqlar</Link></li>
                        <li><Link href="/canli" className="hover:text-white">Canlı Dərslər</Link></li>
                        <li><Link href="/premium" className="hover:text-white">Premium</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Resurslar</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                        <li><Link href="/about" className="hover:text-white">Haqqımızda</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Əlaqə</Link></li>
                        <li><Link href="/faq" className="hover:text-white">Tez-tez verilən suallar</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Əlaqə</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">info@emrahedu.az</li>
                        <li className="flex items-center gap-2">+994 50 123 45 67</li>
                        <li className="text-xs mt-2 text-slate-500">
                            Bakı ş., Nərimanov r.,<br />A. Nemətulla küç. 23
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                &copy; {new Date().getFullYear()} EmrahEdu. Bütün hüquqlar qorunur.
            </div>
        </footer>
    );
}
