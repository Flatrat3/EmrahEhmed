"use client";

import Link from "next/link";
import { informatikaTopics } from "@/lib/data";
import { ArrowLeft, BookOpen, ChevronRight, FileText } from "lucide-react";

export default function InformaticsCurriculumPage() {
    return (
        <main className="flex-1 py-10 px-4 md:px-8 max-w-5xl mx-auto w-full">
            <div className="mb-8">
                <Link
                    href="/dersler"
                    className="inline-flex items-center text-muted-foreground hover:text-primary mb-4 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Dərslərə qayıt
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">İnformatika Dərsləri Proqramı</h1>
                <p className="text-lg text-muted-foreground">
                    Magistratura və digər imtahanlara hazırlıq üçün tam informatika kursu proqramı.
                </p>
            </div>

            <div className="grid gap-6">
                {informatikaTopics.map((topic) => (
                    <div
                        key={topic.id}
                        className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
                                        {topic.id}
                                    </div>
                                    <h2 className="text-xl font-bold">{topic.id}. {topic.title}</h2>
                                </div>
                            </div>

                            {topic.subtopics && topic.subtopics.length > 0 && (
                                <div className="mt-4 space-y-2 pl-14">
                                    {topic.subtopics.map((subtopic) => (
                                        <div
                                            key={subtopic.id}
                                            className="flex items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer"
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground mr-3 group-hover:bg-primary transition-colors"></div>
                                            <span className="font-medium text-sm text-foreground/80 group-hover:text-primary transition-colors">
                                                {subtopic.id} {subtopic.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">İmtahanlara Bizimlə Hazırlaşın</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Bütün mövzular üzrə video izahlarımız və sınaq imtahanlarımızla biliyinizi artırın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/dersler?category=İnformatika"
                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <BookOpen className="mr-2 h-5 w-5" />
                        Video Dərsləri İzlə
                    </Link>
                </div>
            </div>
        </main>
    );
}
