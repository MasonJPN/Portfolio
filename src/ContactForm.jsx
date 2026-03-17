import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import akihabara from "./assets/alley.png"
import linkedin from "./assets/linkedin.png"
export default function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => setSent(true))
    .catch((err) => console.error(err))
  }

  return (
    <div className="relative">
      <img src={akihabara} alt="Background" className="absolute inset-0 w-full h-full object-cover rounded-xl brightness-25" />

      <section id="contact" className="relative z-10 px-10 py-32 text-white">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-semibold underline decoration-blue-400 underline-offset-6">
            Contact Me
          </h2>
        </div>

        {sent ? (
          <p className="text-center text-blue-400 text-lg">Message sent! I'll get back to you soon.</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-xl mx-auto">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-slate-900 border border-blue-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-slate-900 border border-blue-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-slate-900 border border-blue-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 transition-colors text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
      

    </div>
  )
}