"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { services } from "@/lib/data";

function KontaktForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("usluga");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    try {
      if (formspreeId) {
        // Static host (e.g. Cloudflare Pages): use Formspree
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("email", formData.email);
        fd.append("phone", formData.phone || "");
        fd.append("service", formData.service || "");
        fd.append("message", formData.message);
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        const result = await response.json();
        if (!response.ok || result.error) {
          throw new Error(result.error || "Došlo je do greške pri slanju.");
        }
      } else {
        // Server (Vercel, Node): use our API
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (!response.ok || !result.ok) {
          throw new Error(result.error || "Došlo je do greške pri slanju.");
        }
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setError(err.message || "Došlo je do greške pri slanju. Pokušajte ponovno.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 text-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Kontakt"
          subtitle="Pošaljite nam upit ili kontaktirajte nas direktno"
          className="text-center mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Pošaljite upit</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Upit je poslan!</h4>
                    <p className="text-slate-300">
                      Odgovorit ćemo vam u najkraćem mogućem roku.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Ime i prezime *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1">
                        Usluga
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, service: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Odaberite uslugu (opcionalno)" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.name}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Poruka *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-400">
                        {error}
                      </p>
                    )}
                    <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                      {submitting ? "Slanje..." : "Pošalji upit"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & servis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Kontakt informacije</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-slate-300">+385 99 200 3120</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-slate-300">info@autoflow.hr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Lokacija</p>
                      <p className="text-slate-300">Čavorija 75, Popovača</p>
                      <p className="text-slate-400 text-sm mt-1">Radno vrijeme: 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Dogovori servis</h3>
                <p className="mb-4 text-slate-300">
                  Kontaktirajte nas za dogovor termina servisa ili konzultacije.
                </p>
                <Button className="w-full" size="lg" asChild>
                  <a href="mailto:info@autoflow.hr">Pošalji e-mail</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <Suspense fallback={<div className="py-12 md:py-20 text-center">Učitavanje...</div>}>
      <KontaktForm />
    </Suspense>
  );
}

