"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Service } from "@/lib/data";
import { useState } from "react";
import { ServiceModal } from "./service-modal";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="group relative flex h-full flex-col overflow-hidden border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/15 transition-opacity duration-300 group-hover:opacity-100" />
          <CardHeader>
            <CardTitle className="text-xl text-slate-50">{service.name}</CardTitle>
            <CardDescription className="line-clamp-2 text-slate-300/80">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {service.includes && service.includes.length > 0 && (
              <ul className="space-y-2 mb-4">
                {service.includes.slice(0, 3).map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-sm text-slate-200/90"
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
                {service.includes.length > 3 && (
                  <li className="text-sm text-cyan-300 font-medium">
                    + {service.includes.length - 3} više...
                  </li>
                )}
              </ul>
            )}
            <div className="mt-auto">
              <div className="text-2xl font-bold text-cyan-300">
                {service.price}
              </div>
              {service.note && (
                <p className="mt-1 text-xs text-slate-400">{service.note}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => setModalOpen(true)}
            >
              Zatraži ovu uslugu
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <ServiceModal
        service={service}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}

