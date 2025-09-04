import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-gray-50 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <Image
          src="/images/english-club.jpg"
          alt="About EChO"
          className="rounded-xl shadow-lg object-cover w-full h-80"
          width={400}
          height={160}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 ">About Us</h2>
        <p className="text-gray-600">
          EChO Alexandria is a community-driven academy that helps learners
          improve their English through engaging courses, interactive speaking
          clubs, and exciting events. Our mission is to make learning fun,
          practical, and social.
        </p>
      </div>
    </section>
  );
}
