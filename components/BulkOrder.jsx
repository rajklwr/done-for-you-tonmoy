"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

const BulkOrder = ({ scrollToBookYourCall }) => {
    const bulkPlans = [
        {
            icon: "images/button-a.png",
            title: "BASIC (30 Videos)",
            pricing: "15 Minutes = $1500 / Month",
            description:
                "Includes 30 videos of 8-10 mins and a set number of shorts",
            color: "#FBBF24",
        },
        {
            icon: "images/button-b.png",
            title: "STANDARD (30 Videos)",
            pricing: "15 Minutes = $2300 / Month",
            description:
                "Includes 30 videos of 15-16 mins and a set number of shorts",
            color: "#EC4899",
        },
    ];

    return (
        <section className="bg-black text-white py-20 overflow-hidden">
            {/* STEP */}

            <div className="flex flex-col items-center mb-10">
                <div className="flex items-center justify-center">
                    {/* Circle */}

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

                    {/* Arrow + Text */}

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
                            BULK ORDER
                        </h2>
                    </div>
                </div>

                {/* Mobile */}

                <h2 className="md:hidden mt-4 text-xl font-black uppercase">
                    BULK ORDER
                </h2>

                {/* SAME CONNECTOR AS STEP 1 */}

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

            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold">
                    The More You Order, The More Discount You Get
                </h2>
            </div>

            {/* Divider */}

            <div className="max-w-[1100px] mx-auto px-4">
                <div className="border-t border-dashed border-white/40 relative">
                    <div className="grid grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="relative flex justify-center"
                            >
                                <div className="h-12 border-l border-white/50"></div>

                                <div
                                    className="
                    absolute
                    top-10
                    w-0
                    h-0
                    border-l-[8px]
                    border-r-[8px]
                    border-t-[12px]
                    border-l-transparent
                    border-r-transparent
                    border-t-white
                  "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Formula */}

            <div className="text-center my-8">
                <p className="text-lg md:text-2xl font-semibold">
                    Onboarding Cost
                    <span className="mx-4 text-3xl">+</span>
                    6 Mo-Management Fee
                    <span className="mx-4 text-3xl">+</span>
                    30 VIDEOS OF 15 MINUTES
                </p>
            </div>

            {/* Cards */}

            <div className="max-w-[900px] mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {bulkPlans.map((plan, index) => (
                        <ServiceCard
                            key={index}
                            icon={plan.icon}
                            title={plan.title}
                            description={plan.description}
                            color={plan.color}
                            pricing={plan.pricing}
                        />
                    ))}
                </div>
            </div>

            {/* Benefits */}

            <div className="max-w-[1100px] mx-auto mt-16 px-4">
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-6 h-6 mt-1"
                        />
                        <span>
                            If the YouTube channel gets terminated or demonetized,
                            we fix it within 7 days or provide a replacement
                            channel without delay.
                        </span>
                    </li>

                    <li className="flex gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-6 h-6 mt-1"
                        />
                        <span>
                            We keep working with you until your channel is
                            profitable.
                        </span>
                    </li>

                    <li className="flex gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-6 h-6 mt-1"
                        />
                        <span>
                            Switch niches whenever you want.
                        </span>
                    </li>

                    <li className="flex gap-4">
                        <img
                            src="/images/icon-checked.png"
                            alt=""
                            className="w-6 h-6 mt-1"
                        />
                        <span>
                            Guaranteed channel monetization within 60 days.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BulkOrder;