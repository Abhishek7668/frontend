import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { loginUser, getCurrentUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await loginUser(data);

            if (!response.data.success) {
                toast.error("Invalid email or password");
                return;
            }

            const token = response.data.access_token;

            const userResponse = await getCurrentUser(token);

            login(token, userResponse.data.data);

            toast.success("Login Successful");

            navigate("/dashboard");
        } catch (error) {
            toast.error(
                error?.response?.data?.detail ||
                    error?.response?.data?.message ||
                    "Login Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

                <h1 className="text-3xl font-bold text-center text-white">
                    AI Customer Support
                </h1>

                <p className="text-slate-400 text-center mt-2">
                    Login to continue
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 mt-8"
                >

                    <div>
                        <label className="text-white block mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
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
                        <label className="text-white block mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="text-center text-slate-400 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-400 hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}