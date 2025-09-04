import Image from "next/image";

const testimonials = [
  {
    name: "Ahmed",
    text: "I improved my English fluency a lot. The speaking club is amazing!",
    img: "/images/testimonials-1.jpg",
  },
  {
    name: "Sara",
    text: "The teachers are so friendly and helpful. I passed my IELTS exam!",
    img: "/images/testimonials-2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">
        What Our Students Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white  rounded-xl shadow-md">
            <div className="w-full">
              <Image
                src={t.img}
                alt={t.name}
                className="w-full h-60 rounded-md mx-auto  object-fit "
                width={300}
                height={300}
              />
            </div>
            {/* <p className="italic text-gray-600 mb-2">{t.text}</p> */}
            {/* <p className="font-semibold text-gray-800 mb-5">{t.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
