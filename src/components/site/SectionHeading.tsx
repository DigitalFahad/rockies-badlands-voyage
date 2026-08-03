export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "lg:flex-row lg:items-end lg:justify-between"
      }`}
    >
      <div className={align === "center" ? "" : "max-w-2xl"}>
        <p className="eyebrow text-sunrise">{eyebrow}</p>
        <h2 className="display-md mt-4 text-foreground">{title}</h2>
        {intro && (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
      {children}
    </div>
  );
}
