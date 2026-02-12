"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Zap, Shield, Users, Target, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Brzina",
    description: "Brzo reagiranje i rješavanje problema kako biste što prije mogli nastaviti s radom.",
  },
  {
    icon: Shield,
    title: "Pouzdanost",
    description: "Dugogodišnje iskustvo i profesionalan pristup svakom projektu.",
  },
  {
    icon: Target,
    title: "Transparentnost",
    description: "Jasne cijene, bez skrivenih troškova. Sve je definirano unaprijed.",
  },
  {
    icon: Users,
    title: "Orijentacija na klijenta",
    description: "Vaše potrebe su naš prioritet. Slušamo i prilagođavamo se.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Osnivanje",
    description: "Autoflow je osnovan s vizijom pružanja kvalitetnih IT usluga lokalnoj zajednici.",
  },
  {
    year: "2026",
    title: "Širenje usluga",
    description: "Proširili smo ponudu na razvoj aplikacija i digitalnih rješenja.",
  },
  {
    year: "2026",
    title: "Poslovni klijenti",
    description: "Započeli smo suradnju s poslovnim klijentima i nudimo mjesečno održavanje.",
  },
  {
    year: "2026",
    title: "Edukacije",
    description: "Dodali smo edukacijske programe za djecu i mlade.",
  },
  {
    year: "2026",
    title: "Danas",
    description: "Nastavljamo rasti i razvijati se, uvijek fokusirani na kvalitetu i zadovoljstvo klijenata.",
  },
];

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 text-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="O nama"
          subtitle="Vaš pouzdan partner za IT rješenja"
          className="text-center mb-16"
        />

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Naša priča</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Autoflow je IT tvrtka osnovana s ciljem pružanja kvalitetnih, pouzdanih i pristupačnih IT usluga lokalnoj zajednici i poslovnim klijentima. Specijalizirani smo za servis računala, optimizaciju sustava, razvoj aplikacija i digitalnih rješenja.
            </p>
            <p>
              Naša misija je pomoći vam da vaša tehnologija radi besprijekorno, kako biste se mogli fokusirati na ono što je za vas najvažnije - vaš posao. Kombiniramo tehničko znanje s pristupačnim pristupom, osiguravajući da svaki klijent dobije rješenje prilagođeno njegovim potrebama.
            </p>
          </div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Naša misija i vrijednosti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-slate-800 bg-slate-900/70 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-50">
                  {value.title}
                </h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Zašto odabrati Autoflow?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Iskustvo</h3>
              <p className="text-slate-300">
                Dugogodišnje iskustvo u IT industriji s dokazanim rezultatima.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brzina</h3>
              <p className="text-slate-300">
                Brzo reagiranje i rješavanje problema kako biste što prije mogli nastaviti s radom.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pouzdanost</h3>
              <p className="text-slate-300">
                Profesionalan pristup i garancija kvalitete na sve naše usluge.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Naš put</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start md:items-center"
                >
                  <div className="absolute left-6 md:left-6 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10" />
                  <div className="ml-12 md:ml-16 flex-1 rounded-lg bg-slate-900/80 p-6 shadow-md border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

