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

export type BioSegment = string | { italic: string };

export type TeamMember = {
  name: string;
  role: string;
  bio: string | BioSegment[];
  links?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: "J. Penberth Rabold",
    role: "Writer & Director",
    bio: [
      "A writer and director drawn to character-driven stories about identity, love, and survival. He moved to Los Angeles in 2000 and spent fifteen years as a unit production manager and first assistant director on features, shorts, and music videos before moving into writing and directing in 2015. His work has earned 22 festival selections and awards, including two second-round selections at the Austin Film Festival, for ",
      { italic: "Bathory" },
      " and ",
      { italic: "Ghosts of War" },
      ", and screenplays and TV projects that have drawn interest from Netflix, Apple, Starz, and HBO. His short ",
      { italic: "Connected" },
      " was runner-up for the Jury Prize and Best Visuals at the 2019 Filmmakers Collaboration Challenge. ",
      { italic: "Dallas & Allegra" },
      ", a contemporary Rust Belt reimagining of ",
      { italic: "Romeo and Juliet" },
      ", is the first film he's directing without a gatekeeper across the table, just the people who believe in it.",
    ],
    links: [{ label: "jpenberth.com", href: "https://jpenberth.com/" }],
  },
  {
    name: "Shannon Geary",
    role: "Producer",
    bio: "Pittsburgh-area producer and set photographer with 21 years' experience as a music educator and theater director before moving into film production.",
    links: [{ label: "catalystory.com", href: "https://catalystory.com/" }],
  },
  {
    name: "Kerry Fleming",
    role: "Producer",
    bio: [
      "Writer, producer, and director, and founder of RPD Entertainment. Co-writer of the thriller ",
      { italic: "Rock Paper Scissors" },
      " (with the late Victor Miller, creator of ",
      { italic: "Friday the 13th" },
      "), starring Michael Madsen and Tatum O'Neal, released by Lionsgate and Vertical Entertainment. Currently producing the sports drama ",
      { italic: "The Last Mile" },
      " and directing the true-crime short ",
      { italic: "Not Guilty — Ep. 42" },
      ", starring John Dugan (",
      { italic: "The Texas Chain Saw Massacre" },
      ").",
    ],
  },
  {
    name: "Eva Beadle",
    role: "Executive Producer",
    bio: [
      "Executive Producer and founder of BSA Talent, where she develops and packages elevated film and television projects for major studios, streamers, and independent financiers. Her credits include ",
      { italic: "In the Mix" },
      " starring Usher and the network comedy ",
      { italic: "Method & Red" },
      ", alongside collaborations with Academy Award winner Mel Gibson.",
    ],
  },
  {
    name: "Daniel J. Lennox",
    role: "Director of Photography",
    bio: [
      "Writer/director whose debut feature ",
      { italic: "Jackson's Run" },
      " won Best Feature at the 2012 CMM Film Festival in New York, with nine additional nominations. Known for award-winning shorts built on emotional intensity.",
    ],
    links: [{ label: "sycamorefilms.com", href: "https://sycamorefilms.com/" }],
  },
  {
    name: "Jacob Luttrell",
    role: "“Swyft” · Music Supervisor",
    bio: "Grammy-credited songwriter performing as JACOBISDEAD, with writing credits including Flo Rida's “Wild Ones” and Charlie Puth's “Marvin Gaye.” Plays Swyft and composes original music for the film.",
    links: [{ label: "jacobisdead.com", href: "https://jacobisdead.com/" }],
  },
];

// Investor-facing team bios for the hidden /invest and /invest-brief pages
// only. Same people as `team` above, but written to foreground industry
// credentials, box office scale, and commercial track record, for an
// audience evaluating this as an investment rather than browsing a film
// site. The main public site keeps the narrative bios in `team`.
export const investorTeam: TeamMember[] = [
  {
    name: "J. Penberth Rabold",
    role: "Writer & Director",
    bio: [
      "Fifteen years as a unit production manager and first assistant director, including stunt unit work on the blockbusters ",
      { italic: "San Andreas" },
      " and ",
      { italic: "Furious 7" },
      ", which together grossed nearly $2 billion worldwide. Since moving into writing and directing in 2015, his work has earned 22 festival selections and awards, with screenplays and TV projects drawing interest from Netflix, Apple, Starz, and HBO. ",
      { italic: "Dallas & Allegra" },
      ", a contemporary Rust Belt reimagining of ",
      { italic: "Romeo and Juliet" },
      ", is his feature debut as writer-director.",
    ],
    links: [{ label: "jpenberth.com", href: "https://jpenberth.com/" }],
  },
  {
    name: "Shannon Geary",
    role: "Producer",
    bio: [
      "21 years of hands-on production and set experience, as a music educator and theater director before moving into film. Producing ",
      { italic: "Dallas & Allegra" },
      " as the production's Pittsburgh-based lead.",
    ],
    links: [{ label: "catalystory.com", href: "https://catalystory.com/" }],
  },
  {
    name: "Kerry Fleming",
    role: "Producer",
    bio: [
      "Producer and founder of RPD Entertainment. His thriller ",
      { italic: "Rock Paper Scissors" },
      ", starring Michael Madsen and Tatum O'Neal, was released theatrically by Lionsgate and Vertical Entertainment. Currently producing the sports drama ",
      { italic: "The Last Mile" },
      " and directing the true-crime short ",
      { italic: "Not Guilty — Ep. 42" },
      ", starring John Dugan (",
      { italic: "The Texas Chain Saw Massacre" },
      ").",
    ],
  },
  {
    name: "Eva Beadle",
    role: "Executive Producer",
    bio: [
      "Executive Producer and founder of BSA Talent, developing and packaging elevated genre and prestige projects for major studios and streamers. Her slate includes ",
      { italic: "In the Mix" },
      " starring Usher and the network comedy ",
      { italic: "Method & Red" },
      ", alongside collaborations with Academy Award winner Mel Gibson. She brings that same access and packaging to ",
      { italic: "Dallas & Allegra" },
      ".",
    ],
  },
  {
    name: "Daniel J. Lennox",
    role: "Director of Photography",
    bio: [
      "Writer/director whose debut feature ",
      { italic: "Jackson's Run" },
      " won Best Feature at the 2012 CMM Film Festival in New York, with nine additional nominations. Brings that same award-winning eye to ",
      { italic: "Dallas & Allegra" },
      " as Director of Photography.",
    ],
    links: [{ label: "sycamorefilms.com", href: "https://sycamorefilms.com/" }],
  },
  {
    name: "Jacob Luttrell",
    role: "“Swyft” · Music Supervisor",
    bio: [
      "Grammy-credited songwriter performing as JACOBISDEAD, with writing credits including Flo Rida's “Wild Ones” and Charlie Puth's “Marvin Gaye.” Plays Swyft and composes original music for ",
      { italic: "Dallas & Allegra" },
      ".",
    ],
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
