"use client";

type Props = {
    selected: string;
    setSelected: (value: string) => void;
};

export default function ProjectFilter({ selected, setSelected }: Props) {
    const filters = ["all", "featured", "react", "next"];

    return (
        <div className="flex gap-2 flex-wrap mb-4">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setSelected(filter)}
                    className={`px-3 py-1 border rounded text-sm ${selected === filter ? "bg-black text-white" : ""
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}