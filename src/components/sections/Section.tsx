import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            {children}
        </section>
    );
}