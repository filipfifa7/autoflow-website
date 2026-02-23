 "use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import TextType from "@/components/text-type";
import CircularGallery from "@/components/circular-gallery";

const portfolioItems = [
  {
    id: "servis-racunala",
    title: "Servis računala i optimizacija sustava",
    description:
      "Primjeri prije/poslije servisa, čišćenja, nadogradnji i ubrzanja sustava za kućne i poslovne korisnike.",
    type: "Usluge",
  },
  {
    id: "automatizacija-poslovanja",
    title: "Automatizacija poslovanja",
    description:
      "Workflowovi za automatizirano zakazivanje termina, slanje obavijesti i automatiziranu komunikaciju.",
    type: "Aplikacije",
  },
  {
    id: "web-aplikacije",
    title: "Web aplikacije",
    description:
      "Moderne web aplikacije prilagođene klijentima – dashboardi, administracijska sučelja i specijalizirani alati.",
    type: "Web",
  },
  {
    id: "ticketing-crm",
    title: "Ticketing i CRM rješenja",
    description:
      "Sustavi za praćenje zahtjeva klijenata, internu podršku i organizaciju svakodnevnog rada.",
    type: "Poslovno",
  },
];

export default function PortfolioPage() {
  const galleryItems = [
    {
      image: "/portfolio/Group 18 (1).png",
      text: portfolioItems[0].title,
    },
    {
      image: "/portfolio/Group 20.png",
      text: portfolioItems[1].title,
    },
    {
      image: "/portfolio/m1.png",
      text: portfolioItems[2].title,
    },
    {
      image: "/portfolio/z.png",
      text: portfolioItems[3].title,
    },
  ];

  const appsGalleryItems = [
    {
      video: "/portfolio/videos/kotac-popusta.mp4",
      text: "Video prikaz – Lucky Spin Wheel (Kotac popusta)",
    },
    {
      video: "/portfolio/videos/autohub.mp4",
      text: "Video prikaz – Autohub",
    },
    {
      video: "/portfolio/videos/tryon-boutique.mp4",
      text: "Video prikaz – Try On Boutique",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxItems, setLightboxItems] = useState<{ image?: string; video?: string; text: string }[]>(galleryItems);

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-20 text-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Portfolio"
          subtitle="Primjeri projekata, usluga i aplikacija na kojima radimo"
          className="text-center mb-12"
        />

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <TextType
            as="p"
            className="text-lg md:text-2xl text-slate-200"
            text={[
              "Digitaliziramo vaše procese.",
              "Automatiziramo ponavljajuće zadatke.",
              "Gradimo rješenja po mjeri vašeg posla.",
            ]}
            typingSpeed={45}
            deletingSpeed={35}
            pauseDuration={2000}
            showCursor
            cursorCharacter="▎"
          />
        </div>

        <div className="max-w-5xl mx-auto h-[480px] md:h-[600px] relative">
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.06}
            scrollSpeed={2}
            scrollEase={0.05}
            onImageClick={(index) => {
              setLightboxItems(galleryItems);
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          />
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3 text-center md:text-left">
            Video prikazi aplikacija
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl text-sm md:text-base text-center md:text-left">
            U ovoj sekciji će biti kratki videi koji prikazuju kako vaše aplikacije rade u stvarnom okruženju –
            korisničko sučelje, glavne funkcionalnosti i tok rada.
          </p>
          <div className="h-[420px] md:h-[520px] relative">
            <CircularGallery
              items={appsGalleryItems}
              bend={1.2}
              textColor="#ffffff"
              borderRadius={0.06}
              scrollSpeed={2.5}
              scrollEase={0.05}
              onImageClick={(index) => {
                setLightboxItems(appsGalleryItems);
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      {lightboxOpen && (() => {
        const current = lightboxItems[lightboxIndex];
        const isVideo = current && "video" in current && current.video;
        return (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo ? (
                <video
                  src={current.video}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element -- lightbox dynamic src */
                <img
                  src={current?.image}
                  alt={current?.text ?? ""}
                  className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
                />
              )}
              <p className="mt-3 text-center text-slate-100 text-sm">
                {current?.text}
              </p>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

