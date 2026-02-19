"use client";

import Link from "next/link";
import { User, BookOpen, Award, TrendingUp, Settings, LogOut, FileText, CheckCircle } from "lucide-react";

export default function ProfilePage() {
    // Mock User Data
    const user = {
        name: "Murad Əliyev",
        email: "murad.aliyev@example.com",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80",
        joinDate: "Yanvar 2024",
        role: "Tələbə (Pro)",
    };

    const stats = [
        { label: "İzlənilən Dərslər", value: "24", icon: <BookOpen className="h-5 w-5 text-blue-500" /> },
        { label: "Sınaq Nəticələri", value: "12", icon: <FileText className="h-5 w-5 text-green-500" /> },
        { label: "Ortalama Bal", value: "85%", icon: <Award className="h-5 w-5 text-amber-500" /> },
        { label: "Davamiyyət", value: "14 gün", icon: <TrendingUp className="h-5 w-5 text-purple-500" /> },
    ];

    const recentActivity = [
        {
            id: 1,
            type: "quiz",
            title: "Məntiq: Sınaq İmtahanı #1",
            date: "Bu gün, 14:30",
            score: "92%",
            status: "completed"
        },
        {
            id: 2,
            type: "lesson",
            title: "İnformatika: Excel Düsturları",
            date: "Dünən, 18:45",
            progress: "100%",
            status: "completed"
        },
    ];

    return (
        <div className="flex-1 bg-slate-50 dark:bg-slate-900 w-full">

            <div className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-6">
                    <div className="bg-card border rounded-2xl p-6 shadow-sm text-center">
                        <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 overflow-hidden border-4 border-background shadow-sm">
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-muted-foreground text-sm mb-4">{user.email}</p>
                        <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">
                            {user.role}
                        </div>
                    </div>

                    <nav className="bg-card border rounded-2xl p-4 shadow-sm space-y-1">
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium transition-colors">
                            <User className="h-5 w-5" /> Şəxsi Kabinet
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground rounded-xl font-medium transition-colors">
                            <BookOpen className="h-5 w-5" /> Dərslərim
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground rounded-xl font-medium transition-colors">
                            <Award className="h-5 w-5" /> Sertifikatlar
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground rounded-xl font-medium transition-colors">
                            <Settings className="h-5 w-5" /> Tənzimləmələr
                        </button>
                        <div className="pt-4 mt-4 border-t">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                                <LogOut className="h-5 w-5" /> Çıxış
                            </button>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-3 space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
                                <div className="mb-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-full">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h3 className="font-bold text-lg">Son Fəaliyyətlər</h3>
                            <Link href="#" className="text-sm text-primary hover:underline font-medium">Hamısına bax</Link>
                        </div>
                        <div className="divide-y">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-colors">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.type === 'quiz' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {activity.type === 'quiz' ? <FileText className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm md:text-base">{activity.title}</h4>
                                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-sm md:text-base">
                                            {activity.score || activity.progress}
                                        </div>
                                        <div className="text-xs text-green-600 font-medium flex items-center justify-end gap-1">
                                            <CheckCircle className="h-3 w-3" /> Tamamlandı
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Chart Placeholder */}
                    <div className="bg-card border rounded-2xl shadow-sm p-6">
                        <h3 className="font-bold text-lg mb-6">Həftəlik İnkişaf</h3>
                        <div className="h-48 flex items-end justify-between gap-2 px-2">
                            {[40, 65, 30, 85, 50, 90, 60].map((height, i) => (
                                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                                    <div
                                        className="w-full bg-primary/20 rounded-t-lg relative group-hover:bg-primary/40 transition-colors"
                                        style={{ height: `${height}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {height}%
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">Example</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground px-2">
                            <span>B.E</span><span>Ç.A</span><span>Ç</span><span>C.A</span><span>C</span><span>Ş</span><span>B</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
