// The source repeated the same block of markup sixteen times to list these
// people. That is a list of data, not a layout — keeping it as data means a
// change of office is an edit here, not in the page.
import type { ImageMetadata } from "astro";

import eden from "../assets/images/eden.jpg";
import marc from "../assets/images/marc.jpg";
import techtobi from "../assets/images/techtobi.jpg";
import placeholder from "../assets/images/fotohier.gif";

export interface Member {
  name: string;
  role: string;
  photo: ImageMetadata;
  github?: string;
}

export const members: Member[] = [
  { name: "Eden Gregor", role: "Vorsitzender", photo: eden },
  {
    name: "River Barratt",
    role: "Stellvertretender Vorsitzender, Queer-connect-orga, IT",
    photo: placeholder,
  },
  {
    name: "Cleo Konsorski",
    role: "Finanzreferentin, Queer-connect-orga",
    photo: placeholder,
  },
  { name: 'Maurice "Moro" Lewerentz', role: "Kassenwart", photo: placeholder },
  {
    name: "Jan Luca Schneider",
    role: "Mitglied, IT",
    photo: placeholder,
    github: "https://github.com/graylayy",
  },
  {
    name: "Tobias Guido Bläser",
    role: "Grillpräsident, IT",
    photo: techtobi,
    github: "https://github.com/tobi-blazor",
  },
  {
    name: "Marie-Cecile Brodda",
    role: "Mitglied, Stammtisch-orga",
    photo: placeholder,
  },
  { name: 'Maximilian "Maxi" Meßmann', role: "Mitglied", photo: placeholder },
  {
    name: 'Tobias "Tobi der Ⅱ" Bötzel',
    role: "Mitglied, Spieleabend(Pizza)-orga",
    photo: placeholder,
  },
  { name: "Marc Uwe Moellenkamp", role: "Mitglied", photo: marc },
  {
    name: "Jerome-Bennet Dietrich",
    role: "Mitglied, Discord-Mod",
    photo: placeholder,
  },
  { name: 'Maximilian "Max" Scech', role: "Mitglied", photo: placeholder },
  {
    name: "Adrian Brinkel",
    role: "Mitglied, Spieleabend-orga",
    photo: placeholder,
  },
  { name: 'Constantin "Consti" Gubert', role: "Mitglied", photo: placeholder },
  { name: "Mike Koroch", role: "Mitglied", photo: placeholder },
  { name: "Chen Xu", role: "Helfer, Öffentlichkeitsarbeit", photo: placeholder },
];
