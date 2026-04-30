import { useEffect } from "react";

export default function useScroll() {
    useEffect(() => {
        const handleScroll = () => {
            // placeholder for future scroll-based effects
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}