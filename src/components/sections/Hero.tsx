import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-28 px-5 bg-gradient-to-br from-green-100 via-white to-teal-100">
      <div className="overflow-hidden">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-3xl font-semibold text-pretty lg:text-5xl">
                Home Healthcare Services in Lucknow.
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl text-black">
                Whether it’s a recovering patient, aging parent, or a newborn —
                we provide personalized, professional, and heartfelt care at
                your home, 24x7.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button className="bg-blue-600">
                  Talk to a Care Manager
                  <Phone className="ml-2 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <img
            src="images/healthcare.png"
            alt="placeholder"
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg animate-fade-in-up  transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-3 hover:shadow-2xl hover:brightness-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
