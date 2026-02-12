# Autoflow Website

Moderna, profesionalna web stranica za IT tvrtku Autoflow - pouzdana IT rješenja i servis računala.

## 🚀 Tehnologije

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - animacije
- **shadcn/ui** - UI komponente
- **lucide-react** - ikone

## 📦 Instalacija

1. Instalirajte dependencies:
```bash
npm install
```

2. Pokrenite development server:
```bash
npm run dev
```

3. Otvorite [http://localhost:3000](http://localhost:3000) u browseru.

## 🏗️ Struktura projekta

```
autoflow-website/
├── app/                    # Next.js App Router stranice
│   ├── page.tsx           # Početna stranica
│   ├── usluge/            # Usluge i cjenik
│   ├── aplikacije/        # Aplikacije koje razvijamo
│   ├── o-nama/            # O nama stranica
│   ├── kontakt/           # Kontakt stranica
│   ├── layout.tsx         # Glavni layout
│   └── globals.css         # Globalni stilovi
├── components/            # React komponente
│   ├── ui/                # shadcn/ui komponente
│   ├── navbar.tsx         # Navigacijska traka
│   ├── footer.tsx         # Footer
│   ├── service-card.tsx   # Kartica usluge
│   └── ...
├── lib/                   # Utility funkcije i podaci
│   ├── data.ts            # Podaci o uslugama
│   └── utils.ts           # Utility funkcije
└── public/                 # Statički fajlovi
```

## 📄 Stranice

### Početna (/)
- Hero sekcija s glavnom porukom
- Vrijednosti (brzina, pouzdanost, transparentnost)
- Pregled usluga (6 kartica)
- Kako radimo (4 koraka)
- Pregled aplikacija
- FAQ sekcija
- Finalni CTA

### Usluge (/usluge)
- Kompletan cjenik svih usluga
- Filter po kategorijama (Servis, Softver, Poslovno, Edukacija)
- Modal dijalog za detalje usluge
- Direktan link na kontakt formu s preodabranom uslugom

### Aplikacije (/aplikacije)
- Pregled aplikacija koje razvijamo
- Kategorije: Automatizacija, Web aplikacije, Poslovni alati
- Tech stack badge-ovi
- Use case opisi

### O nama (/o-nama)
- Priča o Autoflow-u
- Misija i vrijednosti
- Zašto odabrati Autoflow
- Timeline animacija

### Kontakt (/kontakt)
- Kontakt forma s validacijom
- Odabir usluge iz dropdown-a
- Kontakt informacije
- Radno vrijeme
- CTA za dogovor servisa

## 🎨 Dizajn

- **Primarna boja**: Plava (#2563eb)
- **Sekundarna boja**: Cyan (#06b6d4)
- **Font**: Inter (Google Fonts)
- **Responsive**: Mobile-first pristup
- **Animacije**: Framer Motion za smooth scroll animacije

## ✨ Funkcionalnosti

- ✅ Responsive dizajn (mobile, tablet, desktop)
- ✅ Smooth scroll animacije
- ✅ Sticky navbar s aktivnim linkom
- ✅ Modal dijalog za detalje usluge
- ✅ Filter usluga po kategorijama
- ✅ Kontakt forma s validacijom
- ✅ SEO optimizacija
- ✅ Accessibility (a11y) podrška

## 🔧 Build za produkciju

```bash
npm run build
npm start
```

## 📝 Napomene

- Sve cijene su u eurima (€)
- Kontakt forma trenutno samo logira podatke u konzolu - potrebno je dodati backend integraciju
- Logo je trenutno placeholder - zamijenite s pravim logom kada bude dostupan

## 📞 Kontakt

Za pitanja ili podršku, kontaktirajte: info@autoflow.hr

