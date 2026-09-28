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
  lede: "Dallas & Allegra is a short film about a fallen quarterback turned small-time dealer and the steel-fortune heiress who falls for him, in a Pennsylvania town the mills left behind.",
  paragraphs: [
    "Dallas Dixon deals to pay off the debt his mother's death left behind, one last score standing between him and a life outside Bellvue Falls. Allegra Cunningham has a plane ticket to Oxford and everything money can buy, except a reason to want to leave.",
    "Set against the ruins of a shuttered steel mill and the wreckage it left of the town around it, the film follows what happens when two people from opposite ends of the same broken place decide to risk everything on each other.",
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
    bio: "Pittsburgh-based writer/director with 15+ years' experience as a director, first assistant director, and unit production manager across music videos, shorts, and features in Los Angeles. Directed the award-winning short Connected; developed the series Ghosts of War, a second-round selection at the Austin Film Festival.",
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

// TODO: replace with the live Seed&Spark campaign URL before launch.
export const campaignUrl = "https://seedandspark.com/fund/dallas-and-allegra";
