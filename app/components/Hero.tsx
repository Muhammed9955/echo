"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className=" w-full flex flex-col md:flex-row items-center justify-between text-center bg-rose-400 p-5">
      <div className="">
        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Master English with EChO Alexandria
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
            Join our courses, speaking clubs, and events to improve your English
            fluency in a fun and interactive way.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/speaking-club">Join Club</Link>
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <div className="w-full  h-full md:w-1/2 md:h-full  flex items-center justify-center   ">
        <Image
          src={"/images/idea.png"}
          alt="Hero Image"
          className="object-contain w-full h-[70vh] "
          width={300}
          height={300}
          //   priority
        />
      </div>{" "}
    </section>
  );
}
