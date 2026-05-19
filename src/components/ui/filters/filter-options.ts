export type ProjectFilterValue = "all" | "featured" | "react" | "next" | "python" | "java";

export const projectFilterOptions: {
    value: ProjectFilterValue;
    label: string;
}[] = [
        { value: "all", label: "All" },
        { value: "featured", label: "Featured" },
        { value: "react", label: "React" },
        { value: "next", label: "Next.js" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" }
    ];
