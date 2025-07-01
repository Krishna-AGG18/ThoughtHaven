import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from "react-hook-form"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(null)

    const login = async (data) => {
        setError(null)
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error?.message || "Something went wrong");
        }
    }
    return (
        <div className='flex items-center justify-center w-full py-8 bg-[url(https://i.pinimg.com/originals/9b/ed/a7/9beda78c6eb197e9e962a50e7f6ff09c.gif)] bg-cover bg-center min-h-screen'>

            <div className="mx-auto w-full max-w-lg bg-black/60 backdrop-blur-md sm:px-10 px-6 max-sm:w-11/12 rounded-xl py-10 border border-gray-700 shadow-lg transition-all duration-300">

                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-xl sm:text-2xl font-bold leading-tight text-white">
                    Sign in to your account
                </h2>

                <p className="mt-2 text-center text-sm sm:text-base text-gray-400">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-blue-400 transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && <p className="text-red-500 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8 py-6'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email..."
                            type="email"
                            autoFocus
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
                            placeholder="Enter your password..."
                            autoComplete="current-password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            Sign in
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
