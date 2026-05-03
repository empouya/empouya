type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    centered?: boolean;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {eyebrow}
                </p>
            )}

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-muted-foreground text-pretty">
                    {description}
                </p>
            )}
        </div>
    );
}
