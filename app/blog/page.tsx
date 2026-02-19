"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="flex-1 py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Bloq və Xəbərlər</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Təhsil, karyera və imtahanlara hazırlıq haqqında ən son məlumatlar, faydalı məsləhətlər.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="flex flex-col bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                        <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {post.category}
                            </div>
                        </Link>

                        <div className="flex-1 p-6 flex flex-col">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <User className="h-3.5 w-3.5" />
                                    {post.author}
                                </div>
                            </div>

                            <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t">
                                <div className="flex gap-2">
                                    {post.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-xs text-secondary-foreground">
                                            <Tag className="h-3 w-3 mr-1" /> {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-semibold flex items-center hover:underline">
                                    Oxu <ArrowRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Newsletter Signup (Optional but good for Blog) */}
            <div className="mt-24 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Yeniliklərdən Xəbərdar Olun</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Ən son məqalələr və imtahan xəbərləri birbaşa e-poçt ünvanınıza gəlsin.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="E-poçt ünvanınız"
                        className="flex-1 px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors">
                        Abunə Ol
                    </button>
                </form>
            </div>
        </main>
    );
}
