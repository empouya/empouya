"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/sections/Section";
import { profile } from "@/content/site";
import { contact, availability } from "@/content/site";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, DownloadIcon } from "@/components/ui/icons";

export default function Hero() {
    return (
        <Section className="relative flex min-h-[85vh] items-center overflow-hidden">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
            </div>

            <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                {/* Left content */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            {availability.status}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        <span className="block">{profile.name.split(" ")[0]} {profile.name.split(" ")[1]}</span>
                        <span className="block text-muted-foreground">{profile.name.split(" ")[2]}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-xl font-medium text-accent"
                    >
                        {profile.role}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 text-lg leading-8 text-muted-foreground text-pretty"
                    >
                        {profile.headline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            View Projects
                            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                        >
                            Contact Me
                        </Link>
                        <a
                            href="/resume/resume.pdf"
                            download
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                        >
                            <DownloadIcon className="h-4 w-4" />
                            Download CV
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="GitHub"
                        >
                            <GithubIcon className="h-6 w-6" />
                        </a>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon className="h-6 w-6" />
                        </a>
                    </motion.div>
                </div>

                {/* Right content - Stats/Bento */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hidden lg:block"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <p className="text-sm font-medium text-muted-foreground">Quick Bio</p>
                            <p className="mt-2 text-sm leading-relaxed text-foreground">
                                {profile.shortIntro}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <p className="text-4xl font-bold text-accent">{profile.stats.yearsExperience}</p>
                            <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
                        </div>
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <p className="text-4xl font-bold text-accent">{profile.stats.projectsCompleted}</p>
                            <p className="mt-1 text-sm text-muted-foreground">Projects Completed</p>
                        </div>
                        <div className="col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <p className="text-sm font-medium text-muted-foreground">Location</p>
                            <p className="mt-1 text-lg font-semibold text-foreground">{contact.location}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section >
    );
}
