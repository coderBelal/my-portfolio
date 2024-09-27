import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon for the button

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63a04ffa-b8be-4a0d-bc8e-c001f2f1a80b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); 
      } else {
        console.log("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setResult("There was an error submitting the form.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center    px-4">
      <div className="max-w-5xl w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-[#10E956] text-center mb-8">
          Get in Touch
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10E956] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10E956] focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="contact">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                required
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10E956] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10E956] focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              required
              className="w-full h-40 px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10E956] focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center bg-[#10E956] text-white px-6 py-2 rounded-lg hover:bg-[#0cc04b] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#10E956] focus:ring-opacity-50"
          >
            <FaPaperPlane className="mr-2" /> SUBMIT
          </button>
        </form>
        <span className="block mt-4 text-center text-gray-400">{result}</span>
      </div>
    </div>
  );
}
