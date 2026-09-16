
import React from "react";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative w-full bg-base-100 border-t border-base-300">

            {/* Subtle glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-3">

                        <div className="
                            w-10
                            h-10
                            rounded-xl
                            bg-primary
                            flex
                            items-center
                            justify-center
                            shadow-md
                        ">
                            <Code2
                                size={21}
                                className="text-primary-content"
                                strokeWidth={2.5}
                            />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg tracking-tight">
                                Dev<span className="text-primary">Tinder</span>
                            </h2>

                            <p className="text-xs text-base-content/50">
                                Find your dev tribe.
                            </p>
                        </div>

                    </div>


                    {/* Center */}
                    <div className="flex items-center gap-2 text-sm text-base-content/50">
                        <span>
                            © {new Date().getFullYear()} DevTinder
                        </span>

                        <span className="w-1 h-1 rounded-full bg-base-content/30" />

                        <span className="flex items-center gap-1">
                            Built with
                            <Heart
                                size={13}
                                className="text-error fill-current"
                            />
                            for developers
                        </span>
                    </div>


                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm">

                        <a
                            href="#"
                            className="
                                text-base-content/60
                                hover:text-primary
                                transition-colors
                                duration-200
                            "
                        >
                            Twitter
                        </a>

                        <a
                            href="#"
                            className="
                                text-base-content/60
                                hover:text-primary
                                transition-colors
                                duration-200
                            "
                        >
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="
                                text-base-content/60
                                hover:text-primary
                                transition-colors
                                duration-200
                            "
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

                {/* Bottom line */}
                <div className="mt-7 pt-5 border-t border-base-300/70">

                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">

                        <p className="text-xs text-base-content/40">
                            Connect. Collaborate. Build.
                        </p>

                        <p className="text-xs text-base-content/40">
                            All rights reserved.
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;

