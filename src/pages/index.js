export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Code4Change</h1>
        <p className="mt-2 text-lg">Empowering communities through coding education</p>
      </header>

      {/* Mission and Goals Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center">Our Mission and Goals</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          At Code4Change, our mission is to provide accessible coding education to everyone. We aim to create a community of learners and innovators who can use technology to make a positive impact.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="py-12 px-4 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Courses Offered</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Course Card */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Intro to Web Development</h3>
            <p className="mt-2">Learn the basics of HTML, CSS, and JavaScript.</p>
          </div>
          {/* Add more courses similarly */}
        </div>
      </section>

      {/* How Others Can Help Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center">How You Can Help</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Support our mission by volunteering, spreading the word, or donating resources to keep our programs running.
        </p>
      </section>

      {/* Feedback & Reviews Section */}
      <section className="py-12 px-4 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Feedback & Reviews</h2>
        <div className="mt-8 max-w-2xl mx-auto">
          {/* Embed Google Forms for feedback */}
          <iframe
            src="https://docs.google.com/forms/d/your-form-id/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-6 bg-blue-600 text-white">
        <p>&copy; {new Date().getFullYear()} Code4Change. All rights reserved.</p>
      </footer>
    </div>
  );
}