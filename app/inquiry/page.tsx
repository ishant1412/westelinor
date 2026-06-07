export default function InquiryPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          Inquiry Form
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Tell us about your requirements and we'll get back to you shortly.
        </p>

        <form className="space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <label className="block mb-2 font-medium">
              Inquiry Type
            </label>

            <select className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500">
              <option>General Inquiry</option>
              <option>Web Development</option>
              <option>AI Solutions</option>
              <option>Consultation</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>

            <input
              type="text"
              placeholder="Brief subject"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Describe your requirements..."
              className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}