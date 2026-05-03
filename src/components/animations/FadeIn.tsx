"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
        >
            {children}
        </motion.div>
    );
}
