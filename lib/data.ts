export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  note?: string;
  category: "servis" | "softver" | "poslovno" | "edukacija";
  includes?: string[];
}

export const services: Service[] = [
  {
    id: "optimizacija-sustava",
    name: "Optimizacija sustava",
    description: "Ubrzavanje rada računala, brisanje nepotrebnih datoteka, malware skeniranje, ubrzavanje pokretanja računala",
    price: "15€",
    category: "servis",
    includes: [
      "Ubrzavanje rada računala",
      "Brisanje nepotrebnih datoteka",
      "Malware skeniranje",
      "Ubrzavanje pokretanja računala",
    ],
  },
  {
    id: "osnovno-ciscenje",
    name: "Osnovno čišćenje računala/laptopa",
    description: "Ispuhivanje računala zrakom, čišćenje kućišta i ventilatora, provjera temperatura rada računala",
    price: "25€",
    category: "servis",
    includes: [
      "Ispuhivanje računala zrakom",
      "Čišćenje kućišta i ventilatora",
      "Provjera temperatura rada računala",
    ],
  },
  {
    id: "optimizacija-ciscenje",
    name: "Optimizacija + Čišćenje",
    description: "Ispuhivanje računala zrakom, čišćenje kućišta i ventilatora, provjera temperatura rada računala + ubrzavanje rada računala, brisanje nepotrebnih datoteka, malware skeniranje, ubrzavanje pokretanja",
    price: "35€",
    category: "servis",
    includes: [
      "Ispuhivanje računala zrakom",
      "Čišćenje kućišta i ventilatora",
      "Provjera temperatura rada",
      "Ubrzavanje rada računala",
      "Brisanje nepotrebnih datoteka",
      "Malware skeniranje",
      "Ubrzavanje pokretanja",
    ],
  },
  {
    id: "instalacija-os",
    name: "Instalacija/Reinstalacija operativnog sustava",
    description: "Instalacija/reinstalacija novog licenciranog operativnog sustava po želji",
    price: "35€",
    category: "servis",
    includes: [
      "Instalacija/reinstalacija OS-a",
      "Licencirani operativni sustav",
      "Osnovna konfiguracija",
    ],
  },
  {
    id: "instalacija-os-backup",
    name: "Instalacija operativnog sustava + backup podataka",
    description: "Instalacija novog operativnog sustava sa licencom, te backup starih podataka na priloženi prostor za pohranu",
    price: "45€",
    category: "servis",
    includes: [
      "Instalacija novog OS-a sa licencom",
      "Backup starih podataka",
      "Prijenos na priloženi prostor",
    ],
  },
  {
    id: "dijagnostika",
    name: "Dijagnostika problema računala/laptopa",
    description: "Pronalazak problema rada računala/laptopa te otklon problema kako bi računalo moglo normalno nastaviti raditi",
    price: "15€",
    note: "Ukoliko se nastavi sa uslugom popravka onda je besplatno",
    category: "servis",
    includes: [
      "Dijagnostika problema",
      "Detaljno izvještavanje",
      "Preporuke za rješenje",
    ],
  },
  {
    id: "zamjena-termalne-paste",
    name: "Zamjena termalne paste i čišćenje hladnjaka",
    description: "Brisanje stare termalne paste sa hladnjaka, čišćenje hladnjaka i postavljanje nove kvalitetne termalne paste",
    price: "30€",
    category: "servis",
    includes: [
      "Brisanje stare termalne paste",
      "Čišćenje hladnjaka",
      "Postavljanje nove kvalitetne paste",
    ],
  },
  {
    id: "kompletan-servis",
    name: "Osnovno čišćenje + zamjena paste + instalacija/reinstalacija OS-a/optimizacija",
    description: "Dubinsko čišćenje računala, zamjena termalne paste i čišćenje hladnjaka računala, dijagnostika i instalacija/reinstalacija operativnog sustava ili optimizacija",
    price: "50€",
    category: "servis",
    includes: [
      "Dubinsko čišćenje računala",
      "Zamjena termalne paste",
      "Čišćenje hladnjaka",
      "Dijagnostika",
      "Instalacija/reinstalacija OS-a ili optimizacija",
    ],
  },
  {
    id: "podrska-daljinu",
    name: "Pomoć i podrška na daljinu (TeamViewer/AnyDesk)",
    description: "Online pristup računalu te otklon ili dijagnostika problema",
    price: "15€",
    category: "servis",
    includes: [
      "Online pristup računalu",
      "Otklon problema",
      "Dijagnostika",
    ],
  },
  {
    id: "slaganje-nadogradnja",
    name: "Slaganje/Nadogradnja računala",
    description: "Sklapanje računala po želji ili nadogradnja sa preporučenim komponentama ili komponentama po želji",
    price: "50€",
    note: "Svi djelovi idu preko obrta te se ne naplaćuju po nižoj partnerskoj cijeni i nisu u cijeni usluge",
    category: "servis",
    includes: [
      "Sklapanje računala po želji",
      "Nadogradnja sa preporučenim komponentama",
      "Instalacija i testiranje",
    ],
  },
  {
    id: "it-konzultacije",
    name: "IT konzultacije za obrte i tvrtke",
    description: "1 sat konzultacija vezanih za hardware računala, nadogradnju sustava i ostalo",
    price: "15€",
    note: "Ukoliko se nastavi sa nekom drugom uslugom onda je besplatno",
    category: "poslovno",
    includes: [
      "1 sat konzultacija",
      "Hardware preporuke",
      "Nadogradnja sustava",
      "Ostale IT preporuke",
    ],
  },
  {
    id: "konzultacije-digitalizacija",
    name: "Konzultacije/Savjetovanje oko aplikativnih i digitalnih rješenja",
    description: "1 sat konzultacija vezanih za moguću izradu digitalizacije, automatizacije, aplikacije, web stranice ili ostalog",
    price: "25€",
    note: "Ukoliko se nastavi sa izradom onda je besplatno",
    category: "poslovno",
    includes: [
      "1 sat konzultacija",
      "Digitalizacija preporuke",
      "Automatizacija preporuke",
      "Aplikacije i web stranice",
    ],
  },
  {
    id: "najam-aplikacija",
    name: "Najam gotovih aplikacija",
    description: "Mjesečni najam gotovih automatiziranih aplikacija (automatizirano zakazivanje termina, slanje Whatsapp i Instagram odgovora, pretvaranje slika u 3d modele, Ticketing aplikacija) + tehnička podrška 24/7",
    price: "35-50€",
    category: "softver",
    includes: [
      "Mjesečni najam aplikacija",
      "Automatizirano zakazivanje termina",
      "Whatsapp i Instagram odgovori",
      "Pretvaranje slika u 3D modele",
      "Ticketing aplikacija",
      "Tehnička podrška 24/7",
    ],
  },
  {
    id: "odrzavanje-racunala",
    name: "Održavanje računala",
    description: "Mjesečno održavanje računala (rutinski pregled, podrška na daljinu, podrška uživo, popravak računala, dijagnostika problema računala itd.)",
    price: "50€",
    category: "poslovno",
    includes: [
      "Rutinski pregled",
      "Podrška na daljinu",
      "Podrška uživo",
      "Popravak računala",
      "Dijagnostika problema",
    ],
  },
  {
    id: "razvoj-aplikacija",
    name: "Razvoj i održavanje aplikacija",
    description: "Razvoj Web i poslovnih aplikacija, održavanje i tehnička podrška",
    price: "Po dogovoru",
    category: "softver",
    includes: [
      "Razvoj Web aplikacija",
      "Razvoj poslovnih aplikacija",
      "Održavanje",
      "Tehnička podrška",
    ],
  },
  {
    id: "nadogradnja-aplikacija",
    name: "Nadogradnja postojećih iznajmljenih aplikacija",
    description: "Nadogradnja/ Razvoj novih modula za korištene aplikacije",
    price: "Po dogovoru",
    category: "softver",
    includes: [
      "Nadogradnja aplikacija",
      "Razvoj novih modula",
      "Tehnička podrška",
    ],
  },
  {
    id: "projektna-specifikacija",
    name: "Izrada projektne specifikacije digitalizacije i automatizacije",
    description: "Izrada kompletne specifikacije dogovorenih usluga digitalizacije ili automatizacije + postavljanje aplikacije na produkcijski server i računalo",
    price: "100€",
    category: "poslovno",
    includes: [
      "Kompletna specifikacija",
      "Digitalizacija plan",
      "Automatizacija plan",
      "Postavljanje na produkcijski server",
    ],
  },
  {
    id: "edukacije-djeca",
    name: "Edukacije za djecu (7-15god.)",
    description: "4*2 školska sata informatičkih edukacija za djecu i roditelje (ponašanje na internetu, uvod u algoritme i programiranje, osnovno korištenje računala, itd.)",
    price: "40€",
    category: "edukacija",
    includes: [
      "4*2 školska sata",
      "Ponašanje na internetu",
      "Uvod u algoritme i programiranje",
      "Osnovno korištenje računala",
    ],
  },
  {
    id: "edukacije-mlade",
    name: "Edukacije za mlade (16+ god.) - programiranje",
    description: "2 školska sata edukacije programiranja u jednoj od sljedećih tehnologija (C++, C#, Python, C#.NET CORE)",
    price: "15€",
    note: "Pogodno uzeti više sati pa je cijena manja",
    category: "edukacija",
    includes: [
      "2 školska sata",
      "C++, C#, Python, C#.NET CORE",
      "Praktični primjeri",
    ],
  },
  {
    id: "ostale-usluge",
    name: "Ostale usluge",
    description: "Sve ostale IT usluge koje nisu navedene u cijeniku, po dogovoru",
    price: "Po dogovoru",
    category: "servis",
    includes: [
      "Prilagođene IT usluge",
      "Po dogovoru",
    ],
  },
  {
    id: "usluge-dizajna",
    name: "Usluge dizajna",
    description:
      "Rad u Canvi, Figmi i Illustratoru (podsjetnice, pozivnice i ostale usluge po potrebi).",
    price: "Po dogovoru",
    note: "Cijena ovisi o veličini i kompleksnosti zahtjeva.",
    category: "softver",
    includes: [
      "Dizajn podsjetnica i pozivnica",
      "Priprema vizuala za društvene mreže",
      "Rad u Canvi, Figmi i Illustratoru",
      "Prilagodba dizajna vašem brendu",
    ],
  },
];

export const serviceCategories = [
  { id: "all", label: "Sve usluge" },
  { id: "servis", label: "Servis" },
  { id: "softver", label: "Softver" },
  { id: "poslovno", label: "Poslovno" },
  { id: "edukacija", label: "Edukacija" },
];

