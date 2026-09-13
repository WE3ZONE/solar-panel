import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl md:text-4xl font-extrabold leading-[1.3] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-8 ${
            dark ? "text-paper/60" : "text-ink/60"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
