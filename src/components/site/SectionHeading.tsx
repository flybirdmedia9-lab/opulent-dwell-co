export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={`text-[10px] uppercase tracking-[0.4em] md:text-xs ${light ? "text-gold" : "text-gold"}`}>
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-4xl leading-[1.1] md:text-5xl ${
          light ? "text-ivory" : "text-midnight"
        }`}
      >
        {title}
      </h2>
      {align === "center" && (
        <div className="mx-auto mt-5 h-px w-16 bg-gradient-gold" />
      )}
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-ivory/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}