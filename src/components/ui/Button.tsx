import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
    return (
        <button className="px-4 py-2 border rounded hover:bg-gray-100">
            {children}
        </button>
    );
}