function Contact() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      {/* Header */}
      <section
        data-aos="fade-up"
        className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-lg shadow-sm"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-700 text-lg text-center">
          Have questions or feedback about SeizureAI? Reach out to us.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div data-aos="fade-right">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Get in Touch
          </h3>

          <p className="text-gray-700 mb-6">
            SeizureAI is an academic project focused on AI-based epileptic seizure
            detection. For collaboration, queries, or suggestions, contact us
            using the form.
          </p>

          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> seizureai.project@gmail.com</p>
            <p><strong>Institution:</strong> B.V. Raju Institute of Technology</p>
            <p><strong>Domain:</strong> AI in Healthcare</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-left"
          className="bg-white p-8 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}

export default Contact;
