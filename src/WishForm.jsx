import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './NehaReplyForm.css';


export default function WishForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Fade cascade damping={0.1} triggerOnce>
      <div className="max-w-xl mx-auto p-6 bg-white bg-opacity-90 rounded-2xl shadow-2xl mt-16 backdrop-blur-lg border border-pink-300">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          💌 Send Your Birthday Wish
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold text-xl">
            💖 Thank you! Your wish has been sent.
          </p>
        ) : (
          <form
            action="https://formspree.io/f/xldnjovn" 
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:ring-pink-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email (optional)"
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:ring-pink-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Write your heartfelt wish 💖"
              required
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:ring-pink-400 focus:outline-none"
              rows="5"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all"
            >
              ✨ Send Wish
            </button>
          </form>
        )}
      </div>
    </Fade>
  );
}
