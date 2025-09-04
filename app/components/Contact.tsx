import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h2>

      {/* Contact Form */}
      <form className="max-w-xl mx-auto space-y-4 mb-10">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" rows={4} required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>

      {/* Quick Contact */}
      <div className="flex gap-6 justify-center mb-10">
        <a
          href="https://wa.me/201234567890" // Replace with academy WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} /> WhatsApp
        </a>
        <a
          href="https://m.me/echo.alexandria" // Replace with academy Messenger link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <FaFacebookMessenger size={20} /> Messenger
        </a>
      </div>

      {/* Google Map */}
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110542.637!2d29.87!3d31.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4b3b8c7f1b3%3A0x9a9a99b8c7f!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="mt-6 text-gray-600">
        📍 Alexandria, Egypt <br />
        📞 +20 123 456 789 <br />
        ✉️ info@echoalexandria.com
      </div>
    </section>
  );
}
