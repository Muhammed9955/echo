import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const courses = [
  {
    title: "General English",
    desc: "Improve grammar, vocabulary & skills.",
    img: "/images/general.jpg",
  },
  {
    title: "Conversation Course",
    desc: "Talk like a native speaker.",
    img: "/images/conversation-course.jpg",
  },
  {
    title: "Exam Prep",
    desc: "IELTS, TOEFL and more.",
    img: "/images/lvl2.jpg",
  },
];

export default function Courses() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <Card
            key={i}
            className="hover:shadow-lg transition py-0 pb-5 cursor-pointer"
          >
            <Image
              src={course.img}
              alt={course.title}
              className="rounded-t-xl h-80 w-full object-fit"
              width={400}
              height={160}
            />
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{course.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
