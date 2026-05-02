import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
};

export default function Container({
    children,
    className = "",
    as = "div",
}: ContainerProps) {
    const Component = as;

    return (
        <Component className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </Component>
    );
}
