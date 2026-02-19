"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star, Zap, Crown } from "lucide-react";

export default function PremiumPage() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Basic",
            price: isAnnual ? "19" : "29",
            period: isAnnual ? "il" : "ay",
            description: "Başlanğıc üçün əla seçim",
            features: [
                "Bütün video dərslərə giriş",
                "Həftəlik 1 sınaq imtahanı",
                "Əsas mövzular üzrə qeydlər",
                "Reklamsız izləmə"
            ],
            icon: <Star className="h-6 w-6 text-blue-500" />,
            color: "blue",
            cta: "Seç",
            popular: false
        },
        {
            name: "Pro",
            price: isAnnual ? "39" : "49",
            period: isAnnual ? "il" : "ay",
            description: "Ən çox seçilən paket",
            features: [
                "Bütün video dərslərə giriş",
                "Gündəlik sınaq imtahanları",
                "Canlı dərs arxivinə giriş",
                "Müəllimlərlə sual-cavab",
                "Şəxsi inkişaf planı"
            ],
            icon: <Zap className="h-6 w-6 text-amber-500" />,
            color: "amber",
            cta: "İndi Başla",
            popular: true
        },
        {
            name: "VIP",
            price: isAnnual ? "79" : "99",
            period: isAnnual ? "il" : "ay",
            description: "Tam hazırlaşmaq istəyənlər üçün",
            features: [
                "Bütün Pro özəllikləri",
                "Fərdi mentorluq",
                "Özəl WhatsApp qrupu",
                "Canlı dərslərdə iştirak",
                "Offline materiallar",
                "100% nəticə zəmanəti"
            ],
            icon: <Crown className="h-6 w-6 text-purple-500" />,
            color: "purple",
            cta: "VIP Ol",
            popular: false
        }
    ];

    return (
        <main className="flex-1 py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Gələcəyinə <span className="text-primary">İnvestisiya</span> Et
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Sizə uyğun paketi seçin və imtahanlara peşəkar səviyyədə hazırlaşın.
                </p>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4">
                    <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Aylıq</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`w-14 h-7 rounded-full p-1 transition-colors ${isAnnual ? "bg-primary" : "bg-slate-200"}`}
                    >
                        <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${isAnnual ? "translate-x-7" : "translate-x-0"}`} />
                    </button>
                    <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                        İllik <span className="text-green-500 text-xs font-bold ml-1">-20%</span>
                    </span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <div key={plan.name} className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${plan.popular
                        ? "bg-card shadow-xl border-primary ring-2 ring-primary/20 z-10 scale-105"
                        : "bg-background shadow-md hover:shadow-lg border-border"
                        }`}>
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                                Ən Populyar
                            </div>
                        )}

                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-${plan.color}-100 dark:bg-${plan.color}-900/20`}>
                            {plan.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                        <div className="flex items-end gap-1 mb-8">
                            <span className="text-4xl font-extrabold">{plan.price}₼</span>
                            <span className="text-muted-foreground mb-1">/{plan.period}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                    <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-${plan.color}-100 text-${plan.color}-600 mt-0.5`}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>

            {/* Guarantee Section */}
            <div className="mt-20 text-center bg-slate-50 dark:bg-slate-900 rounded-3xl p-10">
                <h3 className="text-2xl font-bold mb-4">14 Günlük Geri Ödəniş Zəmanəti</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Əgər xidmətimizdən razı qalmasanız, ilk 14 gün ərzində heç bir sual verilmədən ödənişinizi geri qaytarırıq.
                </p>
            </div>
        </main>
    );
}
