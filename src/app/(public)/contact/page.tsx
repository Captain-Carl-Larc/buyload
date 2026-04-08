export default function ContactPage() {
  return (
    <div className="mx-auto px-6 py-20 max-w-2xl">
      <h1 className="mb-6 font-bold text-4xl">Let's Talk</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="p-4 border rounded-xl w-full" />
        <input type="email" placeholder="Email" className="p-4 border rounded-xl w-full" />
        <textarea placeholder="Tell us about your project" rows={5} className="p-4 border rounded-xl w-full" />
        <button className="bg-black p-4 rounded-xl w-full font-bold text-white">Send Message</button>
      </form>
    </div>
  )
}