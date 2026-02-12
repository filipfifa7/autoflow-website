"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, serviceCategories, Service } from "@/lib/data";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function UslugePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 text-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Usluge i cjenik"
          className="text-center mb-12"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "transition-all",
                selectedCategory === category.id && "shadow-md"
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-slate-400">Nema usluga u ovoj kategoriji.</p>
          </div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-lg border border-slate-800 bg-slate-900/70 p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ne možete pronaći ono što tražite?
          </h3>
          <p className="mb-6 text-slate-300">
            Kontaktirajte nas za prilagođene IT rješenja po vašim potrebama.
          </p>
          <Button size="lg" asChild>
            <a href="/kontakt">Kontaktirajte nas</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

