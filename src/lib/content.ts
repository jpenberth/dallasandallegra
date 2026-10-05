export const film = {
  title: "Dallas & Allegra",
  tagline: "Love is destruction.",
  logline:
    "She's got a plane ticket to Oxford. He's got a safe full of cash and one last score. In a steel town built on dead dreams, they fall for each other anyway, and discover the fastest way out of hell is straight through it, together.",
  meta: {
    format: "Short Film",
    genre: "Romance / Crime",
    location: "Pittsburgh, Pennsylvania",
  },
};

export const statement = {
  lines: [
    "A dying steel town doesn't leave much room for hope.",
    "He found a reason to stay. She found a reason to run. Neither expected to find it in each other.",
  ],
};

export const story = {
  eyebrow: "The Story",
  heading: ["Two people,", "one impossible choice"],
  lede: "In Bellvue Falls, everyone is addicted to something. Two young star-crossed lovers are about to choose the most dangerous one: each other.",
  paragraphs: [
    "Dallas Dixon, a fallen quarterback turned dealer, is two payments away from walking out of the only life this town ever offered him. Allegra Cunningham, a trust fund baby and heir to the Cunningham steel fortune, was born on the right side of town and is less than a year from a plane to Oxford.",
    "Then she tracks him down at a local diner to return her addict mother's Oxy. One late night conversation later, two people who were never supposed to meet believe they can outrun everything.",
  ],
  closing: [
    "A Rust Belt ",
    { italic: "Romeo and Juliet" },
    " about the ones this town lets disappear, and a love that burns hotter than whatever is trying to put it out.",
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  links?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: "J. Penberth Rabold",
    role: "Writer & Director",
    bio: "Writer/director based between Pittsburgh and LA. Fifteen years as a unit production manager and first assistant director taught him what a story costs once it has to stand on a set, long before he had one worth telling himself. He's come close more times than he can count — a series that went down to the wire, a film that stalled at the finish line — and come to believe storytelling is ultimately about human connection: stories that push characters toward their own self-empowerment and start a conversation about the love that makes us want to survive. Dallas & Allegra is the first film he's making without a gatekeeper across the table, just the people who believe in it — alongside the award-winning short Connected and the series Ghosts of War, a second-round Austin Film Festival selection.",
    links: [{ label: "jpenberth.com", href: "https://jpenberth.com/" }],
  },
  {
    name: "Shannon Geary",
    role: "Producer",
    bio: "Pittsburgh-area producer and set photographer with 21 years' experience as a music educator and theater director before moving into film production.",
  },
  {
    name: "Daniel J. Lennox",
    role: "Director of Photography",
    bio: "Writer/director whose debut feature Jackson's Run won Best Feature at the 2012 CMM Film Festival in New York, with nine additional nominations. Known for award-winning shorts built on emotional intensity.",
    links: [{ label: "sycamorefilms.com", href: "https://sycamorefilms.com/" }],
  },
  {
    name: "Jacob Luttrell",
    role: "“Swyft” · Music Supervisor",
    bio: "Grammy-credited songwriter performing as JACOBISDEAD, with writing credits including Flo Rida's “Wild Ones” and Charlie Puth's “Marvin Gaye.” Plays Swyft and composes original music for the film.",
    links: [{ label: "jacobisdead.com", href: "https://jacobisdead.com/" }],
  },
];

export const stills = [
  { src: "/images/wildcats-bleachers.jpg", alt: "Empty football bleachers marked 'Home of the Wildcats' overlook a fog-covered steel mill town at dusk." },
  { src: "/images/still-here-street.jpg", alt: "A decayed Bellvue Falls street lined with burned-out buildings." },
  { src: "/images/dallas-mirror.jpg", alt: "Dallas washes his hands at a cracked bathroom mirror, the mill skyline out the window." },
  { src: "/images/mill-handoff.jpg", alt: "Two silhouetted figures exchange a bag inside the ruins of the old steel mill at sunset." },
  { src: "/images/lit-window.jpg", alt: "A single lit window glows in an otherwise dark row of brick houses at night." },
  { src: "/images/truck-warner-marquee.jpg", alt: "Dallas and Allegra sit in the bed of a truck overlooking Bellvue Falls, the Warner theater marquee glowing below." },
];

export const social = {
  instagram: "https://www.instagram.com/dallasandallegra/",
  instagramHandle: "@dallasandallegra",
};

export const campaignUrl = "https://seedandspark.com/fund/dallasallegra";
