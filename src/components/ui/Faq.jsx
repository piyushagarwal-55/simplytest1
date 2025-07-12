import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly does SimplyBetter do?",
    answer: "We build psychological brands that convert. Whether you're pre-launch or post-plateau, we give you positioning, design, and messaging that cuts through noise and makes people buy — without relying on gimmicks or guesswork."
  },
  {
    question: "Who is SimplyBetter for?",
    answer: "SimplyBetter is built for founders, creators, and bootstrapped operators who are done playing small. If you're the kind who values depth, speed, and real market impact — not fluff — we’ll probably get along well."
  },
  {
    question: "What makes SimplyBetter different from other branding agencies?",
    answer: "We don’t sell branding. We build conviction. Our work fuses design, strategy, and deep buyer psychology to make your offer feel like the obvious choice. No templates. No theory. Just sharp, strategic execution with skin in the game."
  },
  {
    question: "How fast can we start?",
    answer: "Usually within 7–10 days. We don’t rush—but we move fast with people who are clear on their ambition. If you're ready to commit, we prioritize you. If you're still ‘figuring it out,’ we'll challenge that clarity first."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. We’re not just here to build — we're here to back you. Most clients stay with us for months or years as strategic partners. Because momentum isn’t a one-time event. It’s a system."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-24 font-Poppins">
      <h1 className="text-center text-6xl md:text-7xl font-semibold py-4">
        Common <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">FAQ</span>
      </h1>
      <p className="text-2xl md:text-3xl text-center text-gray-400 py-8 relative">
        <span className="inline-block h-3 w-3 bg-yellow-400 rounded-full mr-3" />
        Frequently asked questions
      </p>

      <dl className="space-y-9 mt-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-[#00000024] pt-9">
            <dt>
              <button
                className="flex items-start justify-between w-full text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-2xl font-medium">{faq.question}</span>
                <span className="ml-9 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-9 h-9 text-yellow-400" />
                  ) : (
                    <Plus className="w-9 h-9 text-yellow-400" />
                  )}
                </span>
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-6 pr-6 text-xl text-gray-300">
                {faq.answer}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}