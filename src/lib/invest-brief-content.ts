export const investBrief = {
  deadline: "Funding closes November 14",
  eyebrow: "By Invitation",
  headline: "This Is The Deal.",
  subhead:
    "Dallas & Allegra is fully cast and crewed, with shoot dates locked. We're opening 8 Executive Producer seats, 4 at $2,500 and 4 at $5,000, to close the gap before production starts, not after.",

  dealPoints: [
    "Pay $2,500 or $5,000. You pick.",
    "Executive Producer credit, on-screen and on IMDb.",
    "Repaid first, plus 20%, if the feature gets financed.",
    "Paid directly: card or bank transfer, once your agreement's ready.",
  ],

  opportunity: {
    eyebrow: "The Opportunity",
    heading: "Get in before the cameras roll, not after the reviews.",
    paragraphs: [
      "Most people hear about a film after it's already made. At a festival. In a trailer. On a poster. An Executive Producer credit means your name is on it from here, before a single frame is shot.",
      "This isn't a first-time crew hoping to get lucky. Director J. Penberth Rabold has 15+ years producing and assistant-directing in Los Angeles. DP Daniel J. Lennox's debut feature won Best Feature at the 2012 CMM Film Festival. Grammy-credited songwriter Jacob Luttrell (JACOBISDEAD: Flo Rida, Charlie Puth, Ziggy Marley) plays Swyft and scores the film. This is a team that knows how to finish what it starts, and get it seen.",
    ],
  },

  pitch: {
    eyebrow: "Attached",
    heading: "Ty Simpkins is Dallas.",
    credits: [
      "Insidious",
      "Jurassic World",
      "Iron Man 3",
      "Avengers: Endgame",
      "Avengers: Doomsday (rumored)",
    ],
    paragraphs: [
      "He's attached to star as Dallas, signed on before a single Executive Producer position was ever offered.",
      "It doesn't end with the short. Simpkins is attached to the feature version of Dallas & Allegra too, which means the $5,000+ tier's feature credit isn't a hope for someday. It's a seat on a project that already has its lead.",
    ],
  },

  tiers: [
    {
      amount: "$2,500+",
      name: "Executive Producer: The Short",
      totalSeats: 4,
      claimed: 1,
      perks: [
        "EP credit, on-screen and on IMDb",
        "Every premiere and festival screening",
        "A Dallas & Allegra T-shirt, a signed napkin, and a signed title page",
        "First private link to the film, before any festival",
        "A signed, numbered print of the key art",
        "Numbered graphic novel. Only 10 exist",
      ],
      featured: false,
    },
    {
      amount: "$5,000+",
      name: "Executive Producer: Short & Feature",
      totalSeats: 4,
      claimed: 0,
      perks: [
        "Everything in the $2,500 tier",
        "EP credit on the feature too, if and when it moves into production",
        "First option on the feature's financing round",
        "Guaranteed priority negotiation on backend points for the feature",
        "An invitation to set, to meet the cast",
        "A personal song from JACOBISDEAD, unrelated to the film. Yours to keep",
      ],
      featured: true,
    },
  ],

  graphicNovel: {
    eyebrow: "Limited Edition",
    heading: "Ten copies. Ever.",
    paragraph:
      "Dallas & Allegra, adapted into a graphic novel: the full short, panel by panel, in a print run of exactly 10. Every Executive Producer receives a numbered copy. Once they're gone, they're gone. No reprint, no second run.",
  },

  repaid: {
    eyebrow: "How You Get Paid",
    heading: "The short is the proof of concept. Here's how you get repaid.",
    paragraphs: [
      "Dallas & Allegra isn't the finish line. It's the proof of concept. Whiplash followed the same path: an 18-minute short that won the Sundance Short Film Jury Award, then became the pitch that landed the feature a $3.3 million budget from Bold Films. We're building this short to do the same job: prove the story, the cast, and the team, then use that proof to finance the feature.",
      "The primary way Executive Producers get repaid isn't the short's own box office. It's the feature. If and when the feature secures financing, its budget is built with a recoupment line: Executive Producers are repaid their full investment, plus 20%, before the feature even goes into preproduction. Every Executive Producer, $2,500 or $5,000, is repaid the same way, at the same time.",
      "That's the plan, not a guarantee. Feature financing can take longer than expected, or may not happen at all. The fallback is the short's own distribution: festivals first, with streaming (including Amazon) part of the plan after that. If and when the short generates distribution revenue, the same terms apply: 100% of it goes to repaying your investment plus 20%, before the production sees a dollar.",
      "And that's not the end of it. The residual carries forward into the feature, too. After you're fully repaid, through either path, it's ongoing: 5% of residuals at the $2,500 level, 10% at the $5,000 level, on whatever the short and the feature go on to earn, for as long as either keeps earning.",
    ],
    caveat:
      "Worth saying plainly: feature financing isn't guaranteed, and streaming revenue for short films is typically modest. This isn't a guaranteed return on anything. Think of it as a meaningful bonus stacked on top of the credit, access, and relationship you're building, not the reason to say yes.",
    source: {
      text: "TheWrap: Damien Chazelle on how Whiplash's short led to a $3.3M Bold Films deal",
      href: "https://www.thewrap.com/damien-chazelle-produced-by-whiplash-la-la-land/",
    },
  },

  howItWorks: {
    eyebrow: "How This Works",
    heading: "Simple, safe, and entirely on your terms.",
    points: [
      {
        label: "Pay by card or bank transfer",
        body: "We send a Square invoice for your contribution. Pay by credit or debit card, or by direct bank transfer (ACH) — whichever works for you. No cash, no wires outside that.",
      },
      {
        label: "One invoice, one agreement",
        body: "Your Executive Producer Agreement is included with the invoice, so you see the full terms before anything is paid.",
      },
      {
        label: "Your credit is confirmed directly with us",
        body: "Executive Producer credit and terms are documented directly in your agreement with the production. Reach out and we'll walk you through exactly how it works before anything is final.",
      },
    ],
  },

  howToPledge: {
    eyebrow: "How To Invest",
    heading: "Five Steps. That's It.",
    steps: [
      {
        label: "Submit your info",
        body: "Tell us your legal name, contact info, mailing address, and which tier you want.",
        href: "/invest-brief/ep-info",
        linkText: "Submit Your Info",
      },
      {
        label: "We send your agreement and invoice",
        body: "We prepare your Executive Producer Agreement and a Square invoice for your contribution, and send both to you.",
      },
      {
        label: "Review and sign",
        body: "Read through the agreement. Ask us anything before you sign.",
      },
      {
        label: "Pay by card or bank transfer",
        body: "Pay the Square invoice however works for you — credit/debit card or direct bank transfer (ACH).",
      },
      {
        label: "You're an Executive Producer",
        body: "Once it's signed and paid, your seat is locked in.",
      },
    ],
  },

  epIntake: {
    eyebrow: "Get Started",
    heading: "Set Up Your Executive Producer Agreement",
    lede: "Tell us a bit about you and which tier you want. We'll prepare your Executive Producer Agreement and a Square invoice for your contribution, and send both your way.",
    success: "Got it. We'll be in touch with your Executive Producer Agreement and a Square invoice soon.",
  },

  faq: [
    {
      q: "What does an Executive Producer credit actually mean?",
      a: "It's a producing credit, on screen in the film itself and listed on IMDb, recognizing the financial contribution that made production possible. It's a real title, not an honorary one.",
    },
    {
      q: "How do I know my credit is guaranteed?",
      a: "Executive Producer credit and contribution terms are spelled out directly in your Executive Producer Agreement, which we send before any invoice is paid. Reach out and we'll walk through exactly how it's documented before anything is final.",
    },
    {
      q: "How do I actually pay?",
      a: "Directly, through a Square invoice we send you, by credit/debit card or bank transfer (ACH). There's no crowdfunding platform or campaign goal involved. Once your invoice is paid, your contribution is confirmed.",
    },
    {
      q: "Is this a tax-deductible donation?",
      a: "No. Dallas & Allegra is an independent film production, not a non-profit, and contributions at any level aren't tax-deductible charitable donations.",
    },
    {
      q: "What if the feature version never gets made?",
      a: "We believe in it. The short exists in part to prove the world and these characters can carry a feature. But the feature is not guaranteed. The $5,000+ tier includes feature credit if and when it happens; your Executive Producer credit on the short itself is never contingent on that. If the feature doesn't happen, your repayment path becomes the short's own distribution revenue instead of the feature's financing.",
    },
    {
      q: "Is the repayment guaranteed?",
      a: "No. The primary path is a recoupment line built into the feature's financing, if and when the feature secures funding. That's not guaranteed, and financing can take longer than hoped or not happen at all. The fallback, distribution revenue from the short itself, is real but typically modest for short films. Both are genuine parts of the plan, not promised returns.",
    },
  ],

  closing: {
    heading: "The budget is set. The dates are locked. What's left is you.",
    sub: "8 Executive Producer positions exist: 4 at $2,500 and 4 at $5,000. Funding needs to close by November 14.",
    cta: "Claim Your Executive Producer Credit",
  },
};
