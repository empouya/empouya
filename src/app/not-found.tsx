import Link from "next/link";
import Section from "@/components/sections/Section";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function NotFound() {
    return (
        <main>
            <FadeIn>
                <Section className="flex min-h-[70vh] items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-[8rem] font-bold leading-none text-accent opacity-20 select-none">
                            404
                        </span>
                        <h1 className="mt-4 text-2xl font-semibold text-foreground">
                            Page not found
                        </h1>
                        <p className="mt-3 max-w-sm text-muted-foreground">
                            The page you are looking for does not exist or has been moved.
                        </p>
                        <Link
                            href="/"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Back to Home
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Section>
            </FadeIn>
        </main>
    );
}