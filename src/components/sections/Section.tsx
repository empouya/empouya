import { ReactNode } from "react";
import Container from "@/components/ui/layout/Container";

type SectionProps = {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    id?: string;
};

export default function Section({
    children,
    className = "",
    containerClassName = "",
    id,
}: SectionProps) {
    return (
        <section id={id} className={`py-16 sm:py-20 ${className}`}>
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}
