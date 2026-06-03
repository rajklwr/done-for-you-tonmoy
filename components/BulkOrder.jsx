"use client";

import React from "react";

const BulkOrder = ({ scrollToBookYourCall }) => {
    const benefits = [
        "Depends On Your Budget",
        "100% Flexibility",
        "Faster Monetisation",
    ];

    return (
        <section className="bg-black text-white py-16 md:py-20 overflow-hidden">
            {/* STEP */}

            <div className="flex flex-col items-center mb-10">
                <div className="flex items-center justify-center">
                    <div
                        className="
                            w-16
                            h-16
                            md:w-20
                            md:h-20
                            rounded-full
                            bg-[#D89D00]
                            border-[4px]
                            border-white
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
                    >
                        <span className="text-white text-2xl md:text-3xl font-bold">
                            2
                        </span>
                    </div>

                    <div className="hidden md:flex items-center ml-8">
                        <div className="relative w-24 h-[2px] bg-white">
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-1/2
                                    -translate-y-1/2
                                    w-0
                                    h-0
                                    border-t-[6px]
                                    border-b-[6px]
                                    border-l-[10px]
                                    border-t-transparent
                                    border-b-transparent
                                    border-l-white
                                "
                            />
                        </div>

                        <h2 className="ml-4 text-2xl lg:text-3xl font-black uppercase">
                            CUSTOM ORDER
                        </h2>
                    </div>
                </div>

                <h2 className="md:hidden mt-4 text-xl font-black uppercase">
                    CUSTOM ORDER
                </h2>

                <img
                    src="/images/top-connector.png"
                    alt="Connector"
                    className="
                        mt-6
                        w-full
                        max-w-[900px]
                        object-contain
                    "
                />
            </div>

            {/* Title */}

            <div className="text-center mb-12 px-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    The More You Order, The More Discount You Get
                </h2>
            </div>

            {/* BENEFITS TIMELINE */}

            <div className="max-w-[1100px] mx-auto px-4 md:px-8 mt-12">
                <div className="relative">
                    {/* Horizontal Dashed Line */}
                    <div className="absolute left-0 right-0 top-5 md:top-7 border-t-2 border-dashed border-white/30" />

                    <div className="relative grid grid-cols-3 gap-3 md:gap-8">
                        {benefits.map((text, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Circle */}

                                <div
                                    className="
                                        w-10 h-10
                                        md:w-14 md:h-14
                                        rounded-full
                                        bg-[#D89D00]
                                        border-2 md:border-4
                                        border-white
                                        flex
                                        items-center
                                        justify-center
                                        relative
                                        z-10
                                        shadow-lg
                                    "
                                >
                                    <span className="font-bold text-sm md:text-lg">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Vertical Connector */}

                                <div className="relative h-8 md:h-12 border-l border-white/50">
                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-1/2
                                            -translate-x-1/2
                                            w-0
                                            h-0
                                            border-l-[6px]
                                            border-r-[6px]
                                            border-t-[10px]
                                            border-l-transparent
                                            border-r-transparent
                                            border-t-white
                                        "
                                    />
                                </div>

                                {/* Text */}

                                <div className="mt-4 max-w-[250px]">
                                    <p
                                        className="
                                            text-xs
                                            sm:text-sm
                                            md:text-lg
                                            font-semibold
                                            leading-tight
                                        "
                                    >
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits */}

            <div className="max-w-[1100px] mx-auto text-base md:text-lg mt-16 px-4 md:px-6">
                <ul className="space-y-6">
                    <li className="flex gap-3 md:gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0"
                        />
                        <span className="leading-relaxed">
                            If the YouTube channel gets terminated or
                            demonetized, we fix it within 7 days or provide a
                            replacement channel without delay.
                        </span>
                    </li>

                    <li className="flex gap-3 md:gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0"
                        />
                        <span className="leading-relaxed">
                            We keep working with you until your channel is
                            profitable.
                        </span>
                    </li>

                    <li className="flex gap-3 md:gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0"
                        />
                        <span className="leading-relaxed">
                            Switch niches whenever you want.
                        </span>
                    </li>

                    <li className="flex gap-3 md:gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0"
                        />
                        <span className="leading-relaxed">
                            Guaranteed channel monetization within 60 days.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BulkOrder;