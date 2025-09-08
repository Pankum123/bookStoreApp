import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-md mx-auto mt-20 p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-600">
        Have questions? We'd love to hear from you.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-md"
          rows="4"
        ></textarea>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 duration-300">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
