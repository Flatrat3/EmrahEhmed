"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from "lucide-react";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: "Məqalə tapılmadı",
        };
    }

    return {
        title: `${post.title} | EmrahEdu Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.imageUrl],
            type: "article",
        },
    };
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <main className="flex-1 py-12 px-4 md:px-8 max-w-4xl mx-auto w-full">
            <article>
                {/* Post Header */}
                <header className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {readTime} dəq oxu
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            <User className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-sm">{post.author}</div>
                            <div className="text-xs text-muted-foreground">Müəllif</div>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-lg mb-10">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* Post Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags & Share */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center px-3 py-1 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer">
                                <Tag className="h-3 w-3 mr-2" /> {tag}
                            </span>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-secondary transition-colors text-sm font-medium">
                        <Share2 className="h-4 w-4" /> Paylaş
                    </button>
                </div>
            </article>

            {/* Related Posts (Mock) */}
            <section className="mt-20 pt-10 border-t">
                <h3 className="text-2xl font-bold mb-8">Digər Məqalələr</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts
                        .filter(p => p.id !== post.id)
                        .slice(0, 2)
                        .map(relatedPost => (
                            <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                                <div className="aspect-video relative rounded-xl overflow-hidden mb-4 bg-slate-100">
                                    <Image
                                        src={relatedPost.imageUrl}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                                    {relatedPost.title}
                                </h4>
                                <div className="text-sm text-muted-foreground mt-2">
                                    {relatedPost.date}
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
        </main>
    );
}
