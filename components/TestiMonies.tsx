const TestiMonies = () => {
  return (
    <div className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-4">
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            What Our Gift Givers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found the perfect gifts for their loved ones with Chopify.
          </p>
        </div>
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
};

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Chopify helped me find the perfect anniversary gift for my wife. The personalized recommendations were spot-on, and the gift arrived beautifully wrapped. She loved it!",
      name: "David Chen",
      designation: "Loyal Customer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scheduled delivery feature saved my life! I pre-ordered birthday gifts for my entire family for the year, and each one arrived right on time with perfect presentation.",
      name: "Maria Rodriguez",
      designation: "Premium Member",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I was struggling to find a unique gift for my boss, but Chopify's recommendation system suggested something perfect based on his interests. The gift registry feature is also amazing for my wedding!",
      name: "Emily Watson",
      designation: "First-time Gift Giver",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "As someone who's terrible at gift shopping, Chopify has been a game-changer. The AI suggestions are incredibly accurate, and the same-day delivery option has saved me from many last-minute panics!",
      name: "James Kim",
      designation: "Monthly Subscriber",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The premium gift wrapping service is worth every penny. I sent a gift to my mother overseas, and she was delighted by the presentation. The international shipping was fast and the tracking updates were reassuring.",
      name: "Lisa Thompson",
      designation: "International Customer",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default TestiMonies;
