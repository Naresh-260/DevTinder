
import React from "react";
import { useNavigate } from "react-router";
import { Code2, ArrowLeft, Home } from "lucide-react";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-[calc(100vh-64px)] bg-base-200 relative overflow-hidden flex items-center justify-center px-6">

            {/* Background decoration */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-lg">

                {/* 404 */}
                <div className="relative mb-6">

                    <h1 className="
                        text-[120px]
                        sm:text-[160px]
                        font-black
                        leading-none
                        tracking-tighter
                        text-base-content/5
                    ">
                        404
                    </h1>

                    {/* Code icon */}
                    <div className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                    ">
                        <div className="
                            w-20
                            h-20
                            sm:w-24
                            sm:h-24
                            rounded-3xl
                            bg-primary
                            flex
                            items-center
                            justify-center
                            shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                            rotate-3
                        ">
                            <Code2
                                size={42}
                                className="text-primary-content"
                                strokeWidth={2}
                            />
                        </div>
                    </div>

                </div>


                {/* Content */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Page not found
                </h2>

                <p className="
                    mt-4
                    text-sm
                    sm:text-base
                    text-base-content/55
                    leading-relaxed
                ">
                    Looks like this route doesn't exist.
                    The page you're looking for may have been moved,
                    deleted, or never existed.
                </p>


                {/* Current URL */}
                <div className="
                    mt-5
                    inline-flex
                    max-w-full
                    px-4
                    py-2
                    rounded-xl
                    bg-base-100
                    border
                    border-base-300
                    shadow-sm
                ">
                    <code className="
                        text-xs
                        text-base-content/50
                        truncate
                    ">
                        {window.location.pathname}
                    </code>
                </div>


                {/* Buttons */}
                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-center
                    gap-3
                    mt-8
                ">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            btn
                            btn-outline
                            rounded-xl
                            px-6
                        "
                    >
                        <ArrowLeft size={17} />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="
                            btn
                            btn-primary
                            rounded-xl
                            px-6
                            shadow-md
                        "
                    >
                        <Home size={17} />
                        Go Home
                    </button>

                </div>


                {/* Branding */}
                <div className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    mt-10
                    text-xs
                    text-base-content/35
                ">
                    <Code2 size={14} />

                    <span>
                        Dev<span className="text-primary">Tinder</span>
                    </span>
                </div>

            </div>

        </main>
    );
};

export default ErrorPage;
