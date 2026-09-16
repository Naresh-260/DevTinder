
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../Utils/constants";
import {
    Code2,
    ArrowRight,
    Sparkles,
    Users,
    GitBranch,
    ShieldCheck,
} from "lucide-react";

const LoginPage = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [toggle, setToggle] = useState(true);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            setError("");
            setLoading(true);

            const UserData = await axios.post(
                BASE_URL + "/login",
                {
                    emailId,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            dispatch(addUser(UserData.data));
            navigate("/feed");
        } catch (err) {
            setError(
                err?.response?.data ||
                    "Unable to sign in. Please try again."
            );
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async () => {
        try {
            setError("");
            setLoading(true);

            const UserData = await axios.post(
                BASE_URL + "/signup",
                {
                    firstName,
                    lastName,
                    emailId,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            dispatch(addUser(UserData.data));
            navigate("/profile");
        } catch (err) {
            setError(
                err?.response?.data ||
                    "Unable to create your account."
            );
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = () => {
        setToggle(!toggle);
        setError("");
    };

    return (
        <main className="min-h-screen bg-base-200 relative overflow-hidden">

            {/* Background */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            {/* Main container */}
            <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-8">

                <div className="w-full max-w-5xl bg-base-100 rounded-[30px] shadow-2xl border border-base-300 overflow-hidden lg:grid lg:grid-cols-2">

                    {/* LEFT PANEL */}
                    <div className="hidden lg:flex relative bg-neutral text-neutral-content p-12 flex-col justify-between min-h-[650px] overflow-hidden">

                        {/* Decorative circles */}
                        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-primary/20" />

                        <div className="absolute top-20 -right-20 w-56 h-56 rounded-full border border-primary/10" />

                        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

                        {/* Brand */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                                    <Code2
                                        size={23}
                                        className="text-primary-content"
                                    />
                                </div>

                                <div>
                                    <h1 className="text-xl font-bold">
                                        Dev<span className="text-primary">
                                            Tinder
                                        </span>
                                    </h1>

                                    <p className="text-xs text-neutral-content/50">
                                        Find your dev tribe.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Main content */}
                        <div className="relative z-10">

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                                <Sparkles
                                    size={14}
                                    className="text-primary"
                                />

                                <span className="text-xs font-semibold">
                                    BUILT FOR DEVELOPERS
                                </span>
                            </div>

                            <h2 className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight max-w-md">
                                Your next{" "}
                                <span className="text-primary">
                                    great connection
                                </span>{" "}
                                starts here.
                            </h2>

                            <p className="mt-6 text-sm leading-relaxed text-neutral-content/60 max-w-md">
                                Discover developers who share your interests,
                                skills and ambition. Build your network,
                                collaborate and grow together.
                            </p>

                            {/* Features */}
                            <div className="mt-8 space-y-4">

                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Users
                                            size={17}
                                            className="text-primary"
                                        />
                                    </div>

                                    <span className="text-sm text-neutral-content/75">
                                        Meet developers with similar interests
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                        <GitBranch
                                            size={17}
                                            className="text-primary"
                                        />
                                    </div>

                                    <span className="text-sm text-neutral-content/75">
                                        Find people to build with
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                        <ShieldCheck
                                            size={17}
                                            className="text-primary"
                                        />
                                    </div>

                                    <span className="text-sm text-neutral-content/75">
                                        Your developer network, your way
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="relative z-10">
                            <div className="h-px bg-white/10 mb-5" />

                            <p className="text-xs text-neutral-content/40">
                                Connect. Collaborate. Build.
                            </p>
                        </div>

                    </div>


                    {/* RIGHT PANEL */}
                    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 min-h-[650px]">

                        <div className="w-full max-w-md">

                            {/* Mobile logo */}
                            <div className="flex lg:hidden items-center gap-3 mb-10">

                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                    <Code2
                                        size={21}
                                        className="text-primary-content"
                                    />
                                </div>

                                <h1 className="text-xl font-bold">
                                    Dev<span className="text-primary">
                                        Tinder
                                    </span>
                                </h1>

                            </div>


                            {/* Heading */}
                            <div className="mb-8">

                                <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">
                                    {toggle
                                        ? "Create account"
                                        : "Welcome back"}
                                </p>

                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                    {toggle
                                        ? "Join the community."
                                        : "Good to see you again."}
                                </h2>

                                <p className="mt-3 text-sm text-base-content/55">
                                    {toggle
                                        ? "Create your developer profile and start connecting."
                                        : "Sign in to continue building your developer network."}
                                </p>

                            </div>


                            {/* FORM */}
                            <div className="space-y-4">

                                {/* First + Last name */}
                                {toggle && (
                                    <div className="grid grid-cols-2 gap-3">

                                        <div>
                                            <label className="label">
                                                <span className="label-text text-xs font-semibold">
                                                    First name
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label className="label">
                                                <span className="label-text text-xs font-semibold">
                                                    Last name
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                    </div>
                                )}


                                {/* Email */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xs font-semibold">
                                            Email address
                                        </span>
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                                        value={emailId}
                                        onChange={(e) =>
                                            setEmailId(e.target.value)
                                        }
                                    />
                                </div>


                                {/* Password */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xs font-semibold">
                                            Password
                                        </span>
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="input input-bordered w-full bg-base-200/50 focus:border-primary focus:outline-none"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>


                                {/* Error */}
                                {error && (
                                    <div className="rounded-xl border border-error/20 bg-error/10 px-4 py-3">
                                        <p className="text-sm text-error">
                                            {error}
                                        </p>
                                    </div>
                                )}


                                {/* Submit */}
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={
                                        toggle
                                            ? handleSignUp
                                            : handleLogin
                                    }
                                    className="btn btn-primary w-full h-12 rounded-xl mt-2 shadow-lg hover:shadow-xl transition-all"
                                >

                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm" />

                                            {toggle
                                                ? "Creating account..."
                                                : "Signing in..."}
                                        </>
                                    ) : (
                                        <>
                                            {toggle
                                                ? "Create account"
                                                : "Sign in"}

                                            <ArrowRight size={18} />
                                        </>
                                    )}

                                </button>

                            </div>


                            {/* Divider */}
                            <div className="flex items-center gap-4 my-7">

                                <div className="h-px bg-base-300 flex-1" />

                                <span className="text-xs text-base-content/40">
                                    OR
                                </span>

                                <div className="h-px bg-base-300 flex-1" />

                            </div>


                            {/* Toggle */}
                            <div className="text-center">

                                <p className="text-sm text-base-content/50">
                                    {toggle
                                        ? "Already have an account?"
                                        : "Don't have an account?"}
                                </p>

                                <button
                                    type="button"
                                    onClick={handleToggle}
                                    className="mt-2 text-sm font-bold text-primary hover:underline underline-offset-4"
                                >
                                    {toggle
                                        ? "Sign in instead"
                                        : "Create an account"}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default LoginPage;

