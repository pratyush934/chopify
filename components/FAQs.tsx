import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
    
  const faqItems = [
    {
      question: "How does gift recommendation work?",
      answer:
        "Our AI-powered gift recommendation engine analyzes recipient preferences, occasion, relationship, and your budget to suggest perfect gift options. You can also input specific interests or hobbies for more personalized recommendations.",
    },
    {
      question: "Can I schedule gifts for future delivery?",
      answer:
        "Absolutely! Our scheduled gifting feature allows you to plan gifts up to a year in advance. Simply select your items, choose the delivery date, and we'll handle the rest. You'll receive confirmation when your gift is dispatched and delivered.",
    },
    {
      question: "What is your return policy for gifts?",
      answer:
        "We offer a hassle-free 30-day return policy. If the recipient isn't delighted with their gift, they can exchange it or return it for a full refund. We provide a gift receipt that allows returns without revealing the price to the recipient.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide! International shipping rates and delivery times vary by location. You can check estimated delivery times and shipping costs at checkout before completing your purchase.",
    },
    {
      question: "How does gift wrapping work?",
      answer:
        "Choose from our selection of premium wrapping papers, ribbons, and gift boxes during checkout. You can also include a personalized message card. Our professional gift wrapping service ensures your present looks perfect upon arrival.",
    },
    {
      question: "Can I create a gift registry for special occasions?",
      answer:
        "Yes! You can create custom gift registries for weddings, birthdays, baby showers, or any special occasion. Share your registry with friends and family, and they can purchase gifts directly from your wishlist.",
    },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our gift-based e-commerce
            platform. Can't find the answer you're looking for? Contact our
            customer support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index + 1}`}
                className="border-b border-gray-800 last:border-b-0"
              >
                <AccordionTrigger className="text-white text-lg font-medium py-4 hover:text-amber-400 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
