"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Code, Briefcase, Smartphone, Globe, Database, Calendar, MessageSquare, Box, Ticket } from "lucide-react";

const applications = [
  {
    id: "lucky-spin-wheel",
    name: "Lucky Spin Wheel – Kotac popusta",
    description: "Aplikacija za dobivanje popusta putem srećkastog kotača.",
    category: "Automatizacija",
    useCase: "Promocije, lojalnost kupaca i nagradne igre",
    techStack: ["Web", "Lovable"],
    icon: Zap,
    url: "https://kotac-popusta.lovable.app/",
  },
  {
    id: "autohub",
    name: "Autohub",
    description: "Aplikacija za automehaničare i radionice – upravljanje servisom, vozila i narudžbe.",
    category: "Poslovni alati",
    useCase: "Autoservisi, radionice i mehaničari",
    techStack: ["Web", "Lovable"],
    icon: Briefcase,
    logo: "/apps/autohub-logo.png",
    url: "https://auto-hubflow.lovable.app",
  },
  {
    id: "tryon-boutique",
    name: "Try On Boutique",
    description: "Aplikacija za virtualno isprobavanje odjeće i shopping iskustvo.",
    category: "Web aplikacije",
    useCase: "Boutique trgovine i modna industrija",
    techStack: ["Web", "Lovable"],
    icon: Globe,
    url: "https://tryon-shop-buddy.lovable.app/",
  },
  {
    id: "automatizacija-termina",
    name: "Automatizirano zakazivanje termina",
    description: "Sustav za automatsko upravljanje terminima, slanje obavijesti i integraciju s kalendarom.",
    category: "Automatizacija",
    useCase: "Idealno za salone, medicinske ordinacije i sve uslužne djelatnosti",
    techStack: ["React", "Node.js", "PostgreSQL"],
    icon: Calendar,
    url: "https://example.com/automatizacija-termina",
  },
  {
    id: "whatsapp-instagram-bot",
    name: "WhatsApp i Instagram bot",
    description: "Automatizirani odgovori na poruke, upravljanje narudžbama i komunikacija s klijentima.",
    category: "Automatizacija",
    useCase: "Za sve poslovne subjekte koji žele automatizirati komunikaciju",
    techStack: ["Python", "API Integration", "Cloud"],
    icon: MessageSquare,
    url: "https://example.com/whatsapp-instagram-bot",
  },
  {
    id: "3d-model-generator",
    name: "Pretvaranje slika u 3D modele",
    description: "Napredna aplikacija za pretvaranje 2D slika u 3D modele pomoću AI tehnologije.",
    category: "Automatizacija",
    useCase: "Za dizajnere, arhitekte i kreativne industrije",
    techStack: ["AI/ML", "Python", "3D Rendering"],
    icon: Box,
    url: "https://example.com/3d-model-generator",
  },
  {
    id: "ticketing-system",
    name: "Ticketing aplikacija",
    description: "Kompletan sustav za upravljanje zahtjevima, podrškom klijentima i praćenjem problema.",
    category: "Poslovni alati",
    useCase: "Za IT odjele, customer support i interne timove",
    techStack: ["Next.js", "TypeScript", "MongoDB"],
    icon: Ticket,
    url: "https://example.com/ticketing-system",
  },
  {
    id: "web-app",
    name: "Web aplikacije",
    description: "Prilagođene web aplikacije za vaše poslovne potrebe - od jednostavnih do kompleksnih sustava.",
    category: "Web aplikacije",
    useCase: "Za sve poslovne procese koji zahtijevaju digitalizaciju",
    techStack: ["Next.js", "React", "TypeScript"],
    icon: Globe,
    url: "https://example.com/web-app",
  },
  {
    id: "business-tools",
    name: "Poslovni alati",
    description: "CRM sustavi, upravljanje projektima, fakturiranje i druga poslovna rješenja.",
    category: "Poslovni alati",
    useCase: "Za optimizaciju poslovnih procesa i povećanje produktivnosti",
    techStack: ["Full Stack", "Cloud", "API"],
    icon: Briefcase,
    url: "https://example.com/business-tools",
  },
];

export default function AplikacijePage() {
  const categories = ["Sve", "Automatizacija", "Web aplikacije", "Poslovni alati"];
  const [logoError, setLogoError] = React.useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 text-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Aplikacije koje razvijamo"
          subtitle="Moderne aplikacije za automatizaciju i digitalizaciju vašeg poslovanja"
          className="text-center mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-2xl"
              >
                <Card className="flex h-full flex-col border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 overflow-hidden">
                        {"logo" in app && app.logo && !logoError[app.id] ? (
                          <Image
                            src={app.logo}
                            alt={app.name}
                            width={48}
                            height={48}
                            className="object-contain"
                            onError={() => setLogoError((p) => ({ ...p, [app.id]: true }))}
                          />
                        ) : (
                          <app.icon className="h-6 w-6" />
                        )}
                      </div>
                      <Badge variant="secondary">{app.category}</Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-50">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-slate-300/90">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-300 mb-2">Primjena:</p>
                      <p className="text-sm text-slate-400">{app.useCase}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300 mb-2">Tehnologije:</p>
                      <div className="flex flex-wrap gap-2">
                        {app.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-slate-700 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-lg border border-slate-800 bg-slate-900/70 p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-slate-50">
            Trebate prilagođenu aplikaciju?
          </h3>
          <p className="text-slate-300 mb-6">
            Razvijamo aplikacije po vašim specifičnim potrebama. Kontaktirajte nas za besplatnu konzultaciju.
          </p>
          <a href="/kontakt" className="inline-block">
            <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Kontaktirajte nas
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

