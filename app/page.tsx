import Link from "next/link";
import { BookOpen, Brain, Monitor, Scale, Users, Video, Star, ChevronRight, ArrowRight, PlayCircle } from "lucide-react";
import { getLatestVideos } from "@/lib/youtube";
import VideoSlider from "@/components/shared/VideoSlider";

export default async function Home() {
  const videos = await getLatestVideos();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 text-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Məntiq və İnformatikanı <span className="text-primary block sm:inline">Sistemli Şəkildə Öyrən</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Dövlət Qulluğu, Magistr və Digər İmtahanlara Peşəkar Hazırlıq Platforması. İmtahanlara bizimlə hazırlaşın, uğur qazanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dersler"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Pulsuz Dərslərə Başla
              </Link>
              <Link
                href="/test"
                className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-input text-foreground px-8 py-3 rounded-full font-medium text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 shadow-sm"
              >
                <Brain className="mr-2 h-5 w-5" />
                Sınaq Testi Et
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Categories */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Tədris Sahələrimiz</h2>
              <p className="text-muted-foreground">İmtahanlara hazırlıq üçün əsas istiqamətlər</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/dersler/mentiq" className="block">
              <CategoryCard
                icon={<Brain className="h-8 w-8 text-purple-500" />}
                title="Məntiq"
                description="Analitik düşüncə və məntiqi mühakimə qabiliyyətlərini inkişaf etdir."
                color="bg-purple-50 dark:bg-purple-900/10"
              />
            </Link>
            <Link href="/dersler/informatika" className="block">
              <CategoryCard
                icon={<Monitor className="h-8 w-8 text-blue-500" />}
                title="İnformatika"
                description="Kompüter əsasları, ofis proqramları və texnoloji biliklər."
                color="bg-blue-50 dark:bg-blue-900/10"
              />
            </Link>
            <CategoryCard
              icon={<Scale className="h-8 w-8 text-amber-500" />}
              title="Qanunvericilik"
              description="Dövlət qulluğu və hüquqi normativ aktların izahlı tədrisi."
              color="bg-amber-50 dark:bg-amber-900/10"
            />
            <CategoryCard
              icon={<Users className="h-8 w-8 text-green-500" />}
              title="Canlı Dərslər"
              description="Müəllimlərlə interaktiv dərslər və sual-cavab sessiyaları."
              color="bg-green-50 dark:bg-green-900/10"
            />
          </div>
        </section>

        {/* Quiz Demo Section */}
        <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Özünü İndi Yoxla</h2>
              <p className="text-muted-foreground text-lg mb-8">
                10 suallıq sürətli sınaq imtahanı ilə bilik səviyyəni yoxla və nəticəni dərhal öyrən.
              </p>
              <Link
                href="/test"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all font-bold"
              >
                Sınağa Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border w-full max-w-md relative">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                PULSUZ
              </div>
              <div className="mb-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Sual Nümunəsi</div>
              <p className="font-medium text-lg mb-6">
                2, 5, 11, 23, 47, ? ardıcıllığını davam etdirin.
              </p>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors text-sm">A) 94</div>
                <div className="p-3 border rounded-lg bg-green-50 border-green-500 text-green-700 font-bold cursor-pointer transition-colors text-sm flex justify-between">
                  B) 95 <span className="text-green-600">✓</span>
                </div>
                <div className="p-3 border rounded-lg hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors text-sm">C) 96</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Son Video Dərslər</h2>
            <Link href="/dersler" className="text-primary font-medium hover:underline flex items-center">
              Hamısına bax <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <VideoSlider videos={videos} />
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Tələbələrimiz Nə Deyir?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Aysel Məmmədova"
                role="Dövlət Qulluqçusu"
                content="EmrahEdu sayəsində imtahandan yüksək bal toplayaraq arzuladığım vakansiyaya qəbul oldum. Dərslər çox başa düşülən idi."
              />
              <TestimonialCard
                name="Vüsal Kərimov"
                role="Magistr Tələbəsi"
                content="Məntiq dərsləri mənə ən çətin gələn hissə idi, amma buradakı izahlarla qısa müddətdə nəticəmi artırdım."
              />
              <TestimonialCard
                name="Nərgiz Əliyeva"
                role="Müəllim"
                content="İnformatika dərsləri çox sistemli şəkildə qurulub. Həm nəzəri, həm də praktiki biliklərim artdı."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">İmtahanlara Bizimlə Hazırlaşın</h2>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Premium paketlərimizlə daha çox resursa çıxış əldə edin və nəticənizi qarantiya altına alın.
              </p>
              <Link href="/premium" className="inline-block bg-background text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
                Premium Paketlər
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CategoryCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="group p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      <div className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function TestimonialCard({ name, role, content }: { name: string, role: string, content: string }) {
  return (
    <div className="p-8 rounded-2xl bg-card border shadow-sm">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
      </div>
      <p className="text-muted-foreground mb-6 italic">&quot;{content}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
