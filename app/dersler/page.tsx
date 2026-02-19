"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { lessons } from "@/lib/data";
import { LessonCard } from "@/components/shared/LessonCard";
import { Search, Filter, BookOpen } from "lucide-react";

export default function LessonsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("Bütün");
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Bütün");

    // Derive unique categories and topics from data
    const categories = ["Bütün", "Məntiq", "İnformatika"];
    const difficulties = ["Bütün", "Asan", "Orta", "Çətin"];

    const filteredLessons = useMemo(() => {
        return lessons.filter((lesson) => {
            const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                lesson.topic.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "Bütün" || lesson.category === selectedCategory;
            const matchesDifficulty = selectedDifficulty === "Bütün" || lesson.difficulty === selectedDifficulty;

            return matchesSearch && matchesCategory && matchesDifficulty;
        });
    }, [searchQuery, selectedCategory, selectedDifficulty]);

    return (
        <main className="flex-1 py-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dərslər</h1>
                    <p className="text-muted-foreground mt-1">
                        Bilik və bacarıqlarınızı inkişaf etdirmək üçün video dərslər
                    </p>
                </div>

                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Axtarış..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="border rounded-xl p-6 bg-card shadow-sm">
                        <div className="flex items-center gap-2 font-semibold text-lg mb-4">
                            <Filter className="h-5 w-5" />
                            Filtrlər
                        </div>

                        {/* Special Links */}
                        <div className="mb-6 pb-6 border-b">
                            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Tədris Proqramı</h3>
                            <Link
                                href="/dersler/mentiq"
                                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-2"
                            >
                                <BookOpen className="h-4 w-4" />
                                Məntiq Proqramı
                            </Link>
                            <Link
                                href="/dersler/informatika"
                                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
                            >
                                <BookOpen className="h-4 w-4" />
                                İnformatika Proqramı
                            </Link>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Kateqoriya</h3>
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedCategory === cat ? "border-primary bg-primary" : "border-muted-foreground group-hover:border-primary"
                                            }`}>
                                            {selectedCategory === cat && <div className="w-2 h-2 rounded-full bg-white" />}
                                        </div>
                                        <input
                                            type="radio"
                                            name="category"
                                            className="hidden"
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                        />
                                        <span className={`text-sm ${selectedCategory === cat ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                                            {cat}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Difficulty Filter */}
                        <div>
                            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Çətinlik</h3>
                            <div className="flex flex-wrap gap-2">
                                {difficulties.map((diff) => (
                                    <button
                                        key={diff}
                                        onClick={() => setSelectedDifficulty(diff)}
                                        className={`px-3 py-1.5 text-xs rounded-md border transition-all ${selectedDifficulty === diff
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-background hover:bg-secondary text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {diff}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lessons Grid */}
                <div className="lg:col-span-3">
                    {filteredLessons.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredLessons.map((lesson) => (
                                <LessonCard key={lesson.id} lesson={lesson} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                                <BookOpen className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-medium">Nəticə tapılmadı</h3>
                            <p className="text-muted-foreground mt-2">Axtarış filtrlərini dəyişərək yenidən cəhd edin.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("Bütün"); setSelectedDifficulty("Bütün"); }}
                                className="mt-6 text-primary font-medium hover:underline"
                            >
                                Filtrləri sıfırla
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
