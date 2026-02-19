"use client";

import { useState } from "react";
import Link from "next/link";
import { quizzes } from "@/lib/data";
import { Search, Brain, Clock, HelpCircle, ChevronRight } from "lucide-react";

export default function TestsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("Bütün");

    const categories = ["Bütün", "Məntiq", "İnformatika", "Dövlət Qulluğu"];

    const filteredQuizzes = quizzes.filter((quiz) => {
        const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "Bütün" || quiz.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="flex-1 py-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Onlayn Sınaqlar</h1>
                    <p className="text-muted-foreground mt-1">
                        Biliklərinizi yoxlayın və imtahana hazırlaşın
                    </p>
                </div>

                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Sınaq axtar..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === cat
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Quizzes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuizzes.length > 0 ? (
                    filteredQuizzes.map((quiz) => (
                        <div key={quiz.id} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${quiz.category === "Məntiq" ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20" :
                                    quiz.category === "İnformatika" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20" :
                                        "bg-amber-100 text-amber-600 dark:bg-amber-900/20"
                                    }`}>
                                    <Brain className="h-6 w-6" />
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-md font-medium ${quiz.difficulty === "Asan" ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400" :
                                    quiz.difficulty === "Orta" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400" :
                                        "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                                    }`}>
                                    {quiz.difficulty}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-1">
                                {quiz.description}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-1">
                                    <HelpCircle className="h-4 w-4" />
                                    {quiz.questions.length} Sual
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {quiz.duration} dəq
                                </div>
                            </div>

                            <Link
                                href={`/test/${quiz.id}`}
                                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center hover:bg-primary/90 transition-colors"
                            >
                                Sınağa Başla <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-muted-foreground">Axtarışınıza uyğun sınaq tapılmadı.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
