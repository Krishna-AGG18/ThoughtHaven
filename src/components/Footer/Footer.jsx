import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative overflow-hidden py-8 sm:py-12 bg-raisinBlack text-contrastColor">
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 sm:mb-0 sm:w-1/2 lg:w-5/12">
                <div className="flex h-full flex-col justify-between">
                    <div className="mb-6 sm:mb-8">
                        <div className="text-coral font-bold text-lg sm:text-2xl xs:text-xl" id="logo">
                            ThoughtHaven
                        </div>
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm text-contrastColor">
                            © Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-8 sm:mb-0">
                <div className="h-full">
                    <h3 className="tracking-wider mb-6 text-xs sm:text-sm font-semibold uppercase text-contrastColor">
                        Company
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-8 sm:mb-0">
                <div className="h-full">
                    <h3 className="tracking-wider mb-6 text-xs sm:text-sm font-semibold uppercase text-contrastColor">
                        Support
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-wider mb-6 text-xs sm:text-sm font-semibold uppercase text-contrastColor">
                        Legals
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm sm:text-base font-medium text-contrastColor hover:text-coral transition-colors duration-200"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Footer