"use client";

import {
    projectFilterOptions,
    type ProjectFilterValue,
} from "@/components/ui/filters/filter-options";

type Props = {
    selected: ProjectFilterValue;
    setSelected: (value: ProjectFilterValue) => void;
};

export default function ProjectFilter({ selected, setSelected }: Props) {
    return (
        <div className="flex flex-wrap gap-2">
            {projectFilterOptions.map((filter) => {
                const active = selected === filter.value;

                return (
                    <button
                        key={filter.value}
                        type="button"
                        onClick={() => setSelected(filter.value)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${active
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "border border-border bg-card text-foreground hover:border-accent hover:text-accent"
                            }`}
                    >
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
}
