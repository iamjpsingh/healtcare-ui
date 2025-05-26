import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const services = [
  "Home Nursing",
  "Elder Care",
  "Physiotherapy",
  "Emergency Services",
  "24/7 Medical Support",
];

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 pt-32">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Compassionate <span className="text-blue-600">Healthcare</span> You
          Can Trust
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We deliver expert medical care, home support, and personalized
          wellness services right to your doorstep — with empathy and
          excellence.
        </p>

        {/* Service Types */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-blue-700 font-medium"
            >
              <CheckCircle className="w-5 h-5 text-blue-500" />
              {service}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
            Book Appointment
          </Button>
        </div>

        {/* Image Strip */}
        <div className="mt-10 flex justify-center overflow-x-auto gap-4">
          {/* Replace with real healthcare team images */}
          {["doc1.png", "nurse1.png", "caregiver1.png", "physio1.png"].map(
            (img, index) => (
              <Image
                key={index}
                src={`/${img}`}
                alt={`Healthcare Worker ${index + 1}`}
                width={160}
                height={220}
                className="object-contain rounded-lg"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
