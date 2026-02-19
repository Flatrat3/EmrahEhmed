import Link from "next/link";
import Image from "next/image";
import { Clock, PlayCircle } from "lucide-react";
import { Lesson } from "@/lib/data";

interface LessonCardProps {
    lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
    const hasVideo = lesson.videoUrl && lesson.videoUrl !== "placeholder";
    const href = hasVideo ? `https://www.youtube.com/watch?v=${lesson.videoUrl}` : "#";
    const target = hasVideo ? "_blank" : "_self";

    return (
        <div className="group bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <div className="aspect-video relative overflow-hidden bg-slate-100">
                <Image
                    src={lesson.thumbnailUrl}
                    alt={lesson.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    {hasVideo && (
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <PlayCircle className="h-6 w-6 text-white" />
                        </div>
                    )}
                </div>
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded-md font-medium">
                    {lesson.category}
                </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {lesson.duration}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full border ${lesson.difficulty === "Asan" ? "bg-green-50 text-green-600 border-green-200" :
                        lesson.difficulty === "Orta" ? "bg-yellow-50 text-yellow-600 border-yellow-200" :
                            "bg-red-50 text-red-600 border-red-200"
                        }`}>
                        {lesson.difficulty}
                    </span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {hasVideo ? (
                        <Link href={href} target={target}>{lesson.title}</Link>
                    ) : (
                        <span>{lesson.title}</span>
                    )}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                    {lesson.description}
                </p>
                <div className="pt-4 border-t flex justify-between items-center mt-auto">
                    <div className="text-xs font-medium text-muted-foreground">
                        {lesson.topic}
                    </div>
                    {hasVideo ? (
                        <Link href={href} target={target} className="text-sm font-semibold text-primary hover:underline">
                            İzlə &rarr;
                        </Link>
                    ) : (
                        <span className="text-sm font-semibold text-muted-foreground cursor-not-allowed">
                            Tezliklə
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
