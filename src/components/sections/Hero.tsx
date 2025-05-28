import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-10 px-5">
      <div className="overflow-hidden">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl">
                Home Healthcare Services in Lucknow.
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                Whether it’s a recovering patient, aging parent, or a newborn —
                we provide personalized, professional, and heartfelt care at
                your home, 24x7.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button>
                  Talk to a Care Manager
                  <ChevronRight className="ml-2 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <img
            src="images/healthcare.png"
            alt="placeholder"
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
