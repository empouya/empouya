import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

export default function Hero() {
    return (
        <FadeIn>
            <section className="min-h-[70vh] flex flex-col justify-center items-start px-8">
                <h1 className="text-5xl font-bold">
                    Full Stack Developer
                </h1>

                <p className="mt-4 text-gray-600 max-w-xl">
                    Building scalable, performant web applications with modern technologies.
                </p>

                <div className="mt-6 flex gap-4">
                    <Link href="/projects" className="border px-4 py-2 rounded">
                        View Projects
                    </Link>
                    <Link href="/contact" className="border px-4 py-2 rounded">
                        Contact
                    </Link>
                </div>
            </section>
        </FadeIn>
    );
}