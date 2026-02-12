"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Service } from "@/lib/data";
import Link from "next/link";

interface ServiceModalProps {
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ServiceModal({ service, open, onOpenChange }: ServiceModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-slate-50">{service.name}</DialogTitle>
          <DialogDescription className="text-base text-slate-300">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {service.includes && service.includes.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 text-slate-200">Što je uključeno:</h4>
              <ul className="space-y-2">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-slate-300">
                    <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center justify-between p-4 bg-slate-900/70 border border-slate-800 rounded-lg">
            <div>
              <p className="text-sm text-slate-300">Cijena:</p>
              <p className="text-3xl font-bold text-cyan-300">{service.price}</p>
            </div>
            {service.note && (
              <p className="text-sm text-slate-400 max-w-xs">{service.note}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={() => onOpenChange(false)}
              asChild
            >
              <Link href={`/kontakt?usluga=${encodeURIComponent(service.name)}`}>
                Pošalji upit
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Zatvori
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

