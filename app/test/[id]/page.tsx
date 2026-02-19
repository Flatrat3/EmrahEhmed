"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { quizzes, Quiz } from "@/lib/data";
import { Clock, ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const quiz = quizzes.find((q) => q.id === resolvedParams.id);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (quiz) {
            setSelectedAnswers(new Array(quiz.questions.length).fill(null));
            setTimeLeft(quiz.duration * 60);
        }
    }, [quiz]);

    useEffect(() => {
        if (timeLeft > 0 && !isFinished) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !isFinished && quiz) {
            finishQuiz();
        }
    }, [timeLeft, isFinished, quiz]);

    if (!quiz) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Sınaq tapılmadı</h1>
                    <Link href="/test" className="text-primary hover:underline">Sınaqlara qayıt</Link>
                </div>
            </div>
        );
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (optionIndex: number) => {
        if (isFinished) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setSelectedAnswers(newAnswers);
    };

    const finishQuiz = () => {
        setIsFinished(true);
        setShowResults(true);
    };

    const calculateScore = () => {
        let correct = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === quiz.questions[index].correctAnswer) {
                correct++;
            }
        });
        return correct;
    };

    if (showResults) {
        const score = calculateScore();
        const percentage = Math.round((score / quiz.questions.length) * 100);

        return (
            <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
                <header className="h-16 border-b bg-background flex items-center px-4 md:px-8">
                    <Link href="/test" className="flex items-center text-muted-foreground hover:text-foreground">
                        <ChevronLeft className="h-5 w-5 mr-1" /> Çıxış
                    </Link>
                    <div className="ml-auto font-bold">Nəticələr</div>
                </header>

                <main className="flex-1 py-10 px-4">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="bg-card p-8 rounded-2xl border shadow-sm text-center">
                            <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
                            <div className="text-4xl font-extrabold text-primary mb-2">{percentage}%</div>
                            <p className="text-muted-foreground mb-6">
                                {score} düzgün, {quiz.questions.length - score} səhv
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link href="/test" className="px-6 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                                    Digər Sınaqlar
                                </Link>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    Yenidən Başla
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl font-bold px-2">Sualların İzahı</h2>
                            {quiz.questions.map((q, i) => {
                                const userAnswer = selectedAnswers[i];
                                const isCorrect = userAnswer === q.correctAnswer;
                                const isSkipped = userAnswer === null;

                                return (
                                    <div key={q.id} className={`bg-card p-6 rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50/10' : 'border-red-200 bg-red-50/10'}`}>
                                        <div className="flex gap-3 mb-4">
                                            <span className="font-bold text-muted-foreground">{i + 1}.</span>
                                            <div className="flex-1 font-medium">{q.text}</div>
                                            <div className="shrink-0">
                                                {isCorrect ? <CheckCircle className="h-6 w-6 text-green-500" /> :
                                                    isSkipped ? <AlertCircle className="h-6 w-6 text-yellow-500" /> :
                                                        <XCircle className="h-6 w-6 text-red-500" />}
                                            </div>
                                        </div>
                                        <div className="space-y-2 pl-6">
                                            {q.options.map((opt, optIndex) => (
                                                <div key={optIndex} className={`p-3 rounded-lg text-sm border ${optIndex === q.correctAnswer ? "bg-green-100 dark:bg-green-900/30 border-green-300 text-green-800 dark:text-green-300" :
                                                    optIndex === userAnswer ? "bg-red-100 dark:bg-red-900/30 border-red-300 text-red-800 dark:text-red-300" :
                                                        "bg-background/50 border-transparent"
                                                    }`}>
                                                    {opt}
                                                    {optIndex === q.correctAnswer && <span className="float-right font-bold text-green-700 dark:text-green-400">✓ Düzgün</span>}
                                                    {optIndex === userAnswer && optIndex !== q.correctAnswer && <span className="float-right font-bold text-red-700 dark:text-red-400">✗ Sizin cavab</span>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pl-6 pt-4 border-t text-sm text-muted-foreground">
                                            <span className="font-bold text-foreground">İzah:</span> {q.explanation}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            {/* Quiz Header */}
            <header className="h-16 px-4 md:px-8 border-b bg-background flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-primary'}`}>
                        <Clock className="h-5 w-5" />
                        {formatTime(timeLeft)}
                    </div>
                </div>
                <div className="flex-1 max-w-md mx-4 hidden md:block">
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <button
                    onClick={finishQuiz}
                    className="px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors"
                >
                    İmtahanı Bitir
                </button>
            </header>

            {/* Quiz Main */}
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-3xl bg-card border rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                    {/* Question Header */}
                    <div className="p-6 md:p-8 border-b bg-secondary/20 flex justify-between items-center">
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                            Sual {currentQuestionIndex + 1} / {quiz.questions.length}
                        </span>
                        <span className="text-xs px-2 py-1 bg-background border rounded text-muted-foreground">
                            {quiz.category}
                        </span>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 p-6 md:p-10 flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
                            {currentQuestion.text}
                        </h2>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(index)}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center ${selectedAnswers[currentQuestionIndex] === index
                                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                                        : "border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 shrink-0 transition-colors ${selectedAnswers[currentQuestionIndex] === index
                                        ? "border-primary bg-primary text-white"
                                        : "border-muted-foreground/30 text-muted-foreground"
                                        }`}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span className="font-medium text-lg">{option}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="p-6 border-t bg-secondary/10 flex justify-between items-center">
                        <button
                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestionIndex === 0}
                            className="flex items-center text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5 mr-1" /> Əvvəlki
                        </button>

                        {currentQuestionIndex < quiz.questions.length - 1 ? (
                            <button
                                onClick={() => setCurrentQuestionIndex(prev => Math.min(quiz.questions.length - 1, prev + 1))}
                                className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                            >
                                Növbəti <ChevronRight className="h-5 w-5 ml-1" />
                            </button>
                        ) : (
                            <button
                                onClick={finishQuiz}
                                className="flex items-center px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all shadow-md shadow-green-600/20"
                            >
                                Bitir <CheckCircle className="h-5 w-5 ml-2" />
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
