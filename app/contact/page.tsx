"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="flex-1 py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Bizimlə Əlaqə</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Suallarınız var? Bizə yazın və ya zəng edin. Sizə kömək etməkdən məmnun olarıq.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Əlaqə Məlumatları</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-bold mb-1">Telefon</div>
                                    <p className="text-muted-foreground text-sm">+994 50 123 45 67</p>
                                    <p className="text-muted-foreground text-sm">+994 55 987 65 43</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-bold mb-1">E-poçt</div>
                                    <p className="text-muted-foreground text-sm">info@emrahedu.az</p>
                                    <p className="text-muted-foreground text-sm">support@emrahedu.az</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-bold mb-1">Ünvan</div>
                                    <p className="text-muted-foreground text-sm">Bakı şəhəri, Nərimanov rayonu,</p>
                                    <p className="text-muted-foreground text-sm">A. Nemətulla küçəsi 23</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t">
                            <h3 className="font-bold mb-4">Sosial Media</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-secondary rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 bg-secondary rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 bg-secondary rounded-full hover:bg-red-100 hover:text-red-600 transition-colors">
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border rounded-2xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Bizə Yazın</h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Adınız</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Adınız" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Soyadınız</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Soyadınız" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">E-poçt</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="example@mail.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Mövzu</label>
                            <select className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                                <option>Ümumi suallar</option>
                                <option>Texniki dəstək</option>
                                <option>Əməkdaşlıq</option>
                                <option>Digər</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Mesajınız</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]" placeholder="Mesajınızı bura yazın..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                            <Send className="h-5 w-5" /> Göndər
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
