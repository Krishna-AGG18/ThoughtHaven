import React, { useEffect, useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from "react-router-dom"
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const status = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()


    useEffect(() => {
        if (status) navigate("/");
    }, [status, navigate]);


    const signup = async (data) => {
        setError("");
        try {
            const newUser = await authService.createAccount(data);
            if (newUser) {
                alert("Account created successfully! Please log in.");
                navigate("/login");
            }
        } catch (error) {
            setError(error.message || "Signup failed");
        }
    };


    return (
        <div className="flex items-center justify-center w-full py-8 bg-[url(https://i.pinimg.com/originals/c6/4a/d7/c64ad796870df5a6c33be02a557677c9.gif)] bg-cover bg-center min-h-screen">
            <div className="mx-auto w-full max-w-lg bg-black/60 backdrop-blur-md sm:px-10 px-6 max-sm:w-11/12 rounded-xl py-10 border border-gray-700 shadow-lg transition-all duration-300">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-xl sm:text-2xl font-bold leading-tight text-white">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-sm sm:text-base text-gray-400">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-blue-400 transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && (
                    <p className="text-red-500 mt-8 text-center">{String(error)}</p>
                )}

                <form onSubmit={handleSubmit(signup)} className="mt-8 py-6">
                    <div className="space-y-5">
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            autoComplete="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="new-password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            Create Account
                        </Button>

                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup
