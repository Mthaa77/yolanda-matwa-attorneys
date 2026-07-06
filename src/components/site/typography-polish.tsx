export function TypographyPolish() {
  return (
    <style>{`
      #main-content h1,
      #main-content h2,
      #main-content h3,
      #main-content h4 {
        max-inline-size: 100%;
        overflow-wrap: anywhere;
        text-wrap: balance;
        text-shadow: 0 10px 28px rgba(15, 31, 56, 0.12);
      }

      #main-content h1,
      #main-content h2 {
        font-kerning: normal;
        font-feature-settings: "kern", "liga", "clig", "calt";
      }

      #main-content .text-cream.font-display,
      #main-content .text-cream h1,
      #main-content .text-cream h2,
      #main-content .text-cream h3 {
        text-shadow: 0 10px 30px rgba(0, 0, 0, 0.38);
      }

      @media (max-width: 639px) {
        #main-content h1,
        #main-content h2 {
          letter-spacing: -0.035em;
        }
      }
    `}</style>
  );
}
