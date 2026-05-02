export type ProjectFilterValue = "all" | "featured" | "react" | "next";

export const projectFilterOptions: {
    value: ProjectFilterValue;
    label: string;
}[] = [
        { value: "all", label: "All" },
        { value: "featured", label: "Featured" },
        { value: "react", label: "React" },
        { value: "next", label: "Next.js" },
    ];
