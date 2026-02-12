"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  Shield,
  DollarSign,
  Wrench,
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import TextType from "@/components/text-type";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const processSteps = [
    {
      icon: Wrench,
      title: "Kontakt",
      description: "Pošaljite upit ili nazovite nas",
    },
    {
      icon: CheckCircle,
      title: "Dijagnostika",
      description: "Analiziramo problem i predložimo rješenje",
    },
    {
      icon: Zap,
      title: "Izvršenje",
      description: "Brzo i profesionalno rješavamo problem",
    },
    {
      icon: Shield,
      title: "Podrška",
      description: "Osiguravamo dugotrajnu podršku",
    },
  ];

  const faqs = [
    {
      question: "Koliko dugo traje servis računala?",
      answer: "Vrijeme servisa ovisi o vrsti problema. Osnovni servis obično traje 1-2 sata, dok kompleksniji problemi mogu zahtijevati više vremena. Uvijek vas obavijestimo o procijenjenom vremenu prije početka rada.",
    },
    {
      question: "Nudite li garanciju na servis?",
      answer: "Da, nudimo garanciju na sve naše usluge. Detalje o garanciji možete pronaći u opisu svake usluge ili nas kontaktirajte za više informacija.",
    },
    {
      question: "Radite li i na lokaciji klijenta?",
      answer: "Da, nudimo usluge i na lokaciji klijenta za poslovne klijente. Za detalje o dostupnosti i cijenama, kontaktirajte nas.",
    },
    {
      question: "Kako mogu zatražiti ponudu?",
      answer: "Možete nas kontaktirati putem kontakt forme na našoj web stranici, telefonom ili e-mailom. Odgovorit ćemo vam u najkraćem mogućem roku.",
    },
    {
      question: "Nudite li hitne intervencije?",
      answer: "Da, za poslovne klijente nudimo hitne intervencije. Kontaktirajte nas za više informacija o dostupnosti i cijenama.",
    },
  ];

  return (
    <div className="flex flex-col bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/autoflow-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Autoflow • IT servis i aplikacije
            </p>
            <TextType
              as="h1"
              className="mb-6 text-4xl md:text-6xl font-semibold leading-tight text-slate-50"
              text="Autoflow – pouzdana IT rješenja i servis računala"
              typingSpeed={40}
              deletingSpeed={40}
              pauseDuration={2000}
              loop={false}
              showCursor
              cursorCharacter="▎"
              cursorBlinkDuration={0.5}
            />
            <p className="mb-8 text-xl text-slate-200/90">
              Brza pomoć, stručna podrška i transparentne cijene za kućne i
              poslovne korisnike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/usluge">
                  Pogledaj usluge i cijene
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Pošalji upit</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Brzina",
                description: "Brzo rješavamo probleme i vraćamo vas na posao",
              },
              {
                icon: Shield,
                title: "Pouzdanost",
                description: "Profesionalni pristup i dugogodišnje iskustvo",
              },
              {
                icon: DollarSign,
                title: "Transparentne cijene",
                description: "Jasne cijene bez skrivenih troškova",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group rounded-2xl bg-slate-900/70 border border-slate-800 p-8 shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-300 mb-4 group-hover:bg-cyan-500/20 group-hover:text-cyan-200 transition-colors">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-50">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Naše usluge"
            subtitle="Širok spektar IT usluga za vaše potrebe"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/usluge">
                Pogledaj sve usluge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kako radimo"
            subtitle="Jednostavan proces u 4 koraka"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-4">
                    <step.icon className="h-10 w-10" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -z-10" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-50">
                  {step.title}
                </h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Aplikacije koje razvijamo"
            subtitle="Moderne aplikacije za automatizaciju i digitalizaciju vašeg poslovanja"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Automatizacija",
                description: "Automatizirano zakazivanje termina, slanje odgovora i više",
                icon: Zap,
              },
              {
                title: "Web aplikacije",
                description: "Moderne web aplikacije prilagođene vašim potrebama",
                icon: Code,
              },
              {
                title: "Poslovni alati",
                description: "Ticketing sustavi, CRM alati i druga poslovna rješenja",
                icon: CheckCircle,
              },
            ].map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-100">
                  <app.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-50">
                  {app.title}
                </h3>
                <p className="text-slate-300">{app.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/aplikacije">
                Saznaj više
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            title="Često postavljana pitanja"
            subtitle="Pronađite odgovore na najčešća pitanja"
            className="text-center mb-12"
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spremni za početak?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktirajte nas danas i dobit ćete brz i profesionalan odgovor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">Pošalji upit</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/usluge">Pogledaj cijene</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

