import Image from "next/image";

const events = [
  {
    title: "English Movie Night",
    date: "Sep 15, 2025",
    img: "/images/english-conversation-club.jpg",
  },
  {
    title: "Public Workshop for kids",
    date: "Oct 5, 2025",
    img: "/images/kids-event.jpg",
  },
];

export default function Events() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Upcoming Events
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <Image
              src={event.img}
              alt={event.title}
              className="h-80 w-full object-cover"
              width={400}
              height={160}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-500">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
