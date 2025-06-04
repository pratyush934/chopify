"use client";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

const Demo = () => {
  return (
    <div className="w-full bg-black py-10">
      <div className="container mx-auto">
        <AppleCardsCarouselDemo />
      </div>
    </div>
  );
};

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Gift Collections
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const GiftContent = ({ category }: { category: string }) => {
  const contentMap: Record<
    string,
    { title: string; description: string; imageSrc: string }
  > = {
    "Personalized Gifts": {
      title: "Gifts Tailored to Your Loved Ones",
      description:
        "Our AI-powered recommendation system helps you find the perfect personalized gift for every occasion. From custom engraved jewelry to monogrammed accessories, make your gift truly special.",
      imageSrc:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop",
    },
    "Occasion Gifts": {
      title: "Perfect Gifts for Every Celebration",
      description:
        "Whether it's birthdays, anniversaries, weddings, or graduations, we have curated collections for every special moment. Browse themed gift sets that capture the essence of any celebration.",
      imageSrc:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2370&auto=format&fit=crop",
    },
    "Premium Collections": {
      title: "Luxury Gift Experiences",
      description:
        "Our premium collection features high-end gifts for those truly special people in your life. Each item is carefully selected for quality and presentation, creating an unforgettable gifting experience.",
      imageSrc:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop",
    },
    "Corporate Gifting": {
      title: "Impress Your Business Partners",
      description:
        "Make a lasting impression with our corporate gifting solutions. From branded gift boxes to executive presents, strengthen your professional relationships with thoughtfully selected items.",
      imageSrc:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop",
    },
    "International Gifts": {
      title: "Send Love Across Borders",
      description:
        "Distance is no barrier to thoughtful gifting. Our international shipping ensures your presents reach loved ones worldwide, complete with tracking and delivery confirmation.",
      imageSrc:
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=2370&auto=format&fit=crop",
    },
    "Gift Subscriptions": {
      title: "Gifts That Keep on Giving",
      description:
        "Surprise them month after month with our curated subscription boxes. Choose from themed collections that deliver joy regularly, making every month a celebration.",
      imageSrc:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop",
    },
  };

  const content = contentMap[category] || contentMap["Personalized Gifts"];

  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"gift-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {content.title}
              </span>{" "}
              {content.description}
            </p>
            <div className="mt-8 relative w-full h-[300px] md:h-[400px]">
              <Image
                src={content.imageSrc}
                alt={content.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Personalized Gifts",
    title: "Find the Perfect Personal Touch",
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop",
    content: <GiftContent category="Personalized Gifts" />,
  },
  {
    category: "Occasion Gifts",
    title: "Celebrate Every Special Moment",
    src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2370&auto=format&fit=crop",
    content: <GiftContent category="Occasion Gifts" />,
  },
  {
    category: "Premium Collections",
    title: "Luxury Gifts for VIP Recipients",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GiftContent category="Premium Collections" />,
  },
  {
    category: "Corporate Gifting",
    title: "Professional Gifting Solutions",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GiftContent category="Corporate Gifting" />,
  },
  {
    category: "International Gifts",
    title: "Global Gifting Made Simple",
    src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=2370&auto=format&fit=crop",
    content: <GiftContent category="International Gifts" />,
  },
  {
    category: "Gift Subscriptions",
    title: "The Joy of Recurring Surprises",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GiftContent category="Gift Subscriptions" />,
  },
];

export default Demo;
