import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="px-8 py-16 border-t">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>

            <p className="text-gray-600 max-w-2xl">
                I’m a developer focused on building clean, scalable systems and intuitive user experiences.
                I enjoy solving real-world problems with code and continuously improving system design.
            </p>

            <Link href="/about" className="inline-block mt-4 underline">
                Learn more →
            </Link>
        </section>
    );
}