"use client";

import Link from "next/link";
import { Calendar, Clock, Video, Users, PlayCircle, AlertCircle } from "lucide-react";

// Mock data for live lessons
const upcomingLives = [
    {
        id: 1,
        title: "Məntiq: Sınaq İmtahanı İzahı",
        instructor: "Emrah Əhmədov",
        date: "20 Fevral 2024",
        time: "20:00",
        topic: "Sınaq Təhlili",
        status: "upcoming"
    },
    {
        id: 2,
        title: "İnformatika: Excel Funksiyaları",
        instructor: "Aynur Məmmədova",
        date: "22 Fevral 2024",
        time: "19:00",
        topic: "MS Excel",
        status: "upcoming"
    }
];

const pastLives = [
    {
        id: 102,
        title: "DİM SINAQ : 29 YANVAR (MƏNTİQ) 2023",
        date: "29 Yanvar 2023",
        duration: "52 dəq",
        views: 1200,
        thumbnail: "https://img.youtube.com/vi/rrHLlO0mWKQ/maxresdefault.jpg",
        videoUrl: "rrHLlO0mWKQ"
    },
    {
        id: 103,
        title: "DİM (SINAQ 26 DEKABR 2021)",
        date: "26 Dekabr 2021",
        duration: "45 dəq",
        views: 950,
        thumbnail: "https://img.youtube.com/vi/bq99b8VzdHM/hqdefault.jpg",
        videoUrl: "bq99b8VzdHM"
    },
    {
        id: 104,
        title: "ƏN SON QƏBUL İMTAHANINDA DÜŞMÜŞ SUAL TİPLƏRİ | 2022",
        date: "15 Fevral 2022",
        duration: "48 dəq",
        views: 1100,
        thumbnail: "https://img.youtube.com/vi/f0gBjZyHank/maxresdefault.jpg",
        videoUrl: "f0gBjZyHank"
    },
    {
        id: 105,
        title: "Canlıda Məntiq Suallari",
        date: "10 Fevral 2024",
        duration: "60 dəq",
        views: 1500,
        thumbnail: "https://img.youtube.com/vi/3yQoQ8WXAxs/hqdefault.jpg",
        videoUrl: "3yQoQ8WXAxs"
    },
    {
        id: 106,
        title: "Qəbulda düşəcək MƏNTİQ sualları",
        date: "05 Fevral 2024",
        duration: "40 dəq",
        views: 1300,
        thumbnail: "https://img.youtube.com/vi/-B4hsf9iW24/hqdefault.jpg",
        videoUrl: "-B4hsf9iW24"
    }
];

export default function LiveLessonsPage() {
    return (
        <main className="flex-1 py-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="mb-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Canlı Dərslər</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Müəllimlərlə birbaşa ünsiyyət qurun, suallarınızı verin və mövzuları daha dərindən öyrənin.
                </p>
            </div>

            {/* Upcoming Live Sessions */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Video className="h-6 w-6 text-red-500" />
                    Qarşıdakı Canlı Yayımlar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingLives.map((live) => (
                        <div key={live.id} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Video className="h-32 w-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">
                                        {live.topic}
                                    </span>
                                    <span className="flex items-center text-sm font-medium text-red-500 animate-pulse">
                                        <AlertCircle className="h-4 w-4 mr-1" /> Tezliklə
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{live.title}</h3>
                                <p className="text-muted-foreground mb-6">Müəllim: {live.instructor}</p>

                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-sm bg-secondary px-3 py-2 rounded-lg">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        {live.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm bg-secondary px-3 py-2 rounded-lg">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        {live.time}
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                                    Xatırlatma Yarat
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Past Live Archives */}
            <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-500" />
                    Keçmiş Dərslərin Arxivi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pastLives.map((video) => (
                        <Link
                            key={video.id}
                            href={`https://www.youtube.com/watch?v=${video.videoUrl}`}
                            target="_blank"
                            className="group cursor-pointer block"
                        >
                            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl mb-3 relative overflow-hidden">
                                {/* Placeholder for real image */}
                                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                                    <Video className="h-12 w-12 text-muted-foreground/30" />
                                </div>
                                {/* Actual Image if available */}
                                {video.thumbnail && (
                                    <div className="absolute inset-0">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <PlayCircle className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 duration-300" />
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </div>
                            </div>
                            <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                                {video.title}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                                <span>{video.date}</span>
                                <span className="flex items-center gap-1">
                                    <Users className="h-3 w-3" /> {video.views} baxış
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <button className="text-primary font-medium hover:underline">
                        Daha Çox Göstər
                    </button>
                </div>
            </div>

            {/* Premium CTA */}
            <section className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Daha Çox Canlı Dərs İstəyirsiniz?</h2>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Premium üzvlük əldə edərək həftəlik qapalı canlı dərslərə və xüsusi sual-cavab sessiyalarına qoşulun.
                    </p>
                    <Link href="/premium" className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20">
                        Premium-a Keç
                    </Link>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                </div>
            </section>
        </main>
    );
}
