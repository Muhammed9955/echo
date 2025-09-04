"use client";

import Image from "next/image";

export default function SpeakingClub({
  images = [
    "/images/english-club.jpg",
    "/images/english-club-2.jpg",
    "/images/english-club-3.jpg",
    "/images/english-club-4.jpg",
  ],
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Speaking Club
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Join our interactive Speaking Club sessions to practice English in a
          fun, social, and supportive environment. Meet new friends, improve
          your fluency, and gain confidence while speaking.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative h-60 w-full rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={img}
                alt={`Speaking Club ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Optional Call-to-Action */}
        <div className="mt-12">
          <a
            href="/speaking-club"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Join Our Club
          </a>
        </div>
      </div>
    </section>
  );
}
