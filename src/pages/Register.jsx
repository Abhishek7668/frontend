import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { registerUser } from "../api/auth";

export default function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await registerUser({
                full_name: data.full_name,
                email: data.email,
                password: data.password,
            });

            if (response.data.success) {
                toast.success("Registration Successful");

                navigate("/");
            } else {
                toast.error(response.data.message || "Registration Failed");
            }
        } catch (error) {
            toast.error(
                error?.response?.data?.detail ||
                error?.response?.data?.message ||
                "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

            <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-8">

                <h1 className="text-3xl font-bold text-center text-white">
                    Create Account
                </h1>

                <p className="text-slate-400 text-center mt-2">
                    Register to use AI Customer Support
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 mt-8"
                >

                    <div>
                        <label className="block text-white mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
                            {...register("full_name", {
                                required: "Full name is required",
                            })}
                        />

                        {errors.full_name && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.full_name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-white mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-white mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters",
                                },
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-white mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
                            {...register("confirmPassword", {
                                required: "Confirm your password",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
                        />

                        {errors.confirmPassword && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 text-white font-semibold"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>

                </form>

                <p className="text-center text-slate-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/"
                        className="text-blue-400 hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}