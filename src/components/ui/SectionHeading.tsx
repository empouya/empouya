type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="max-w-2xl">
            {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                    {eyebrow}
                </p>
            ) : null}

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>

            {description ? (
                <p className="mt-3 text-base leading-7 text-slate-600">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
