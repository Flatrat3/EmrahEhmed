"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Video {
    id: string;
    title: string;
    link: string;
    thumbnail: string;
    published: string;
    views: string;
}

interface VideoSliderProps {
    videos: Video[];
}

export default function VideoSlider({ videos }: VideoSliderProps) {
    if (!videos || videos.length === 0) {
        return null;
    }

    return (
        <div className="video-slider-container">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-12"
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id}>
                        <Link
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block h-full"
                        >
                            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl mb-3 relative overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:ring-primary/50">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <PlayCircle className="h-12 w-12 text-white/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 drop-shadow-md" />
                                </div>
                            </div>
                            <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors text-lg h-14" title={video.title}>
                                {video.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                <span>{video.published}</span>
                                {/* Views are not available in RSS, so we hide specific view counts or use a generic indicator if needed */}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: var(--primary) !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--primary) !important;
          background-color: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .dark .swiper-button-next,
        .dark .swiper-button-prev {
          background-color: rgba(30, 41, 59, 0.8);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
      `}</style>
        </div>
    );
}
