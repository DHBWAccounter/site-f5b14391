"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this suitable for children?",
    answer:
      "Our experience is designed for ages 10+. Younger players may find certain zones too intense. We recommend the Standard Entry for families.",
  },
  {
    question: "How long does a full round take?",
    answer:
      "Plan for 75–90 minutes for the complete 18-hole experience. Speed players have finished in under 45, but where's the fun in rushing?",
  },
  {
    question: "Is the venue wheelchair accessible?",
    answer:
      "Yes. All primary courses are fully accessible. The Null Zone requires special accommodations—please contact us in advance.",
  },
  {
    question: "Can I book for a private event?",
    answer:
      "Absolutely. We host corporate events, birthdays, bachelor parties, and more. Contact our events team at events@cyberpunkminigolf.com.",
  },
  {
    question: "Do you serve food and drinks?",
    answer:
      "Our Chrome Bar offers a full menu of themed cocktails, craft beers, and synth-wave snacks. Outside food is not permitted.",
  },
];

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-base" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block font-mono text-xs text-neon-cyan uppercase tracking-widest mb-4">
            // Information Terminal
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="text-white">Data Terminal: </span>
            <span className="text-gradient-cyber">FAQ</span>
          </h2>
          <p className="font-body text-lg text-foreground/70">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "cyber-card overflow-hidden transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-elevated/30 transition-colors"
              >
                <span className="font-display text-base sm:text-lg font-bold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-neon-cyan flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-48" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6 font-body text-foreground/70 leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
