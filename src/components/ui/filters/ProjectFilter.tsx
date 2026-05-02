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
        <div className="mb-6 flex flex-wrap gap-2">
            {projectFilterOptions.map((filter) => {
                const active = selected === filter.value;

                return (
                    <button
                        key={filter.value}
                        type="button"
                        onClick={() => setSelected(filter.value)}
                        className={[
                            "rounded-full border px-3 py-1.5 text-sm transition",
                            active
                                ? "border-amber-600 bg-amber-600 text-white"
                                : "bg-[var(--surface)] hover:border-amber-500 hover:text-amber-700",
                        ].join(" ")}
                    >
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
}
