import { useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import './NehaReplyForm.css';


export default function NehaResponseForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Zoom triggerOnce>
      <div className="max-w-xl mx-auto p-6 mt-16 bg-white bg-opacity-90 rounded-2xl shadow-xl border border-pink-300 backdrop-blur-lg">
        <h2 className="text-3xl text-pink-600 font-bold text-center mb-4">
          🥰 Your Turn, Neha!
        </h2>
        <p className="text-center text-gray-600 mb-6">Answer these cute questions just for fun!</p>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold text-xl">
            🥺 Thank you, Neha! Your answers made someone very happy 💕
          </p>
        ) : (
          <form
            action="https://formspree.io/f/xldnjovn" // 🔁 Replace with a second Formspree endpoint
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              type="text"
              name="neha_name"
              placeholder="Your Name (Neha 💕)"
              required
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:ring-pink-400 focus:outline-none"
            />
            <textarea
              name="q1"
              placeholder="🌸 What was your favorite moment with me?"
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:outline-none"
            />
            <textarea
              name="q2"
              placeholder="🌈 One wish you'd make if I could grant it?"
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:outline-none"
            />
            <textarea
              name="q3"
              placeholder="💖 How did you feel reading all these wishes?"
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg border-pink-300 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all"
            >
              🌟 Submit Answers
            </button>
          </form>
        )}
      </div>
    </Zoom>
  );
}
