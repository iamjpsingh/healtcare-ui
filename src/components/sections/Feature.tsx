"use client";
import React from "react";

import {
  Clipboard,
  Clock,
  HeartHandshake,
  HeartPulse,
  Stethoscope,
  Syringe,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string; // Added for icon color
  iconBgColor: string; // Added for icon background color
  cardBgColor: string; // Added for card background color
}

interface FeatureProps {
  heading?: string;
  reasons?: Reason[];
}

const Feature = ({
  heading = "Why Choose Us?",
  reasons = [
    {
      title: "Compassionate Care",
      description:
        "We provide personalized, empathetic care that respects the dignity and independence of every patient.",
      icon: <HeartPulse className="size-6" />,
      iconColor: "text-red-600",
      iconBgColor: "bg-red-100",
      cardBgColor: "bg-red-50",
    },
    {
      title: "Skilled Professionals",
      description:
        "Our experienced healthcare team is dedicated to delivering expert medical and personal support at home.",
      icon: <Stethoscope className="size-6" />,
      iconColor: "text-blue-600",
      iconBgColor: "bg-blue-100",
      cardBgColor: "bg-blue-50",
    },
    {
      title: "24/7 Availability",
      description:
        "Around-the-clock support ensures help is always there when you need it, day or night.",
      icon: <Clock className="size-6" />,
      iconColor: "text-yellow-600",
      iconBgColor: "bg-yellow-100",
      cardBgColor: "bg-yellow-50",
    },
    {
      title: "Personalized Plans",
      description:
        "Customized care programs tailored to each individual's unique health needs and preferences.",
      icon: <Clipboard className="size-6" />,
      iconColor: "text-green-600",
      iconBgColor: "bg-green-100",
      cardBgColor: "bg-green-50",
    },
    {
      title: "Advanced Equipment",
      description:
        "Utilizing the latest home care technologies and medical devices to enhance patient outcomes.",
      icon: <Syringe className="size-6" />,
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-100",
      cardBgColor: "bg-purple-50",
    },
    {
      title: "Trusted Partnership",
      description:
        "Building strong relationships with patients and families based on trust, respect, and communication.",
      icon: <HeartHandshake className="size-6" />,
      iconColor: "text-gray-700",
      iconBgColor: "bg-gray-200",
      cardBgColor: "bg-gray-50",
    },
  ],
}: FeatureProps) => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-5">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`${reason.cardBgColor} flex flex-col p-10 rounded-md shadow-md`}
            >
              <div
                className={`${reason.iconBgColor} mb-5 flex h-16 w-16 items-center justify-center rounded-full`}
              >
                {React.cloneElement(reason.icon as React.ReactElement, {
                  className: `${reason.iconColor} h-8 w-8`,
                })}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature };
