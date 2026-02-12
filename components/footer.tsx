import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-14 w-56 md:h-16 md:w-72">
                <Image
                  src="/logo-autoflow.png"
                  alt="Autoflow logo"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Pouzdana IT rješenja i servis računala. Brzina, pouzdanost i transparentne cijene.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+385 99 200 3120</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>info@autoflow.hr</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Čavorija 75, Popovača</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white font-semibold mb-4">Lokacija</h3>
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60 shadow-lg max-w-sm md:max-w-xs">
              <iframe
                title="Autoflow – obrt za digitalizaciju i računalne usluge"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.1945356870756!2d16.58992677661008!3d45.546412027949216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766f9c08884c765%3A0xcb3d5bfd77307237!2sAutoflow%2C%20obrt%20za%20digitalizaciju%20i%20ra%C4%8Dunalne%20usluge!5e0!3m2!1shr!2shr!4v1770745169325!5m2!1shr!2shr"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Autoflow. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

