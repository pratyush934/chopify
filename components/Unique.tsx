import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Gift,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => (
  <Card
    className={cn(
      "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}
  >
    <CardHeader className="pb-2">
      <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-amber-100">
        <div className="w-7 h-7 text-amber-600">{icon}</div>
      </div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pb-4">
      <CardDescription className="text-sm text-gray-600">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const Unique = () => {
  const features = [
    {
      icon: <Gift />,
      title: "Personalized Gifting",
      description:
        "Custom gift options tailored to your recipient's preferences with smart recommendations.",
      className: "border-amber-200 bg-gradient-to-br from-gray-300 to-gray-500",
    },
    {
      icon: <ShieldCheck />,
      title: "Quality Guarantee",
      description:
        "Every gift undergoes strict quality checks ensuring your presents are perfect every time.",
      className: "border-blue-200 bg-gradient-to-br from-gray-300 to-gray-500",
    },
    {
      icon: <Truck />,
      title: "Same-Day Delivery",
      description:
        "Last-minute gifts? No problem! Get same-day delivery in most major cities.",
      className: "border-green-200 bg-gradient-to-br from-gray-300 to-gray-500",
    },
    {
      icon: <HeartHandshake />,
      title: "Gift Matching",
      description:
        "Our AI helps find the perfect gift based on occasion, relationship, and preferences.",
      className:
        "border-purple-200 bg-gradient-to-br from-gray-300 to-gray-500",
    },
    {
      icon: <Clock />,
      title: "Scheduled Gifts",
      description:
        "Plan ahead! Schedule gifts for birthdays, anniversaries, and special occasions.",
      className: "border-red-200 bg-gradient-to-br from-gray-300 to-gray-500",
    },
    {
      icon: <Sparkles />,
      title: "Premium Wrapping",
      description:
        "Elegant gift wrapping options with personalized messages and premium materials.",
      className: "border-teal-200 bg-gradient-to-br from-gray-300 to-gray-500",
    },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-white">Chopify</span> Gifting?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes our gift-based e-commerce platform the preferred
            choice for thoughtful gift-givers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-1 bg-gray-500 rounded-full text-amber-800 text-sm font-medium mb-4">
            Gift with confidence
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">
            Join thousands of happy customers who've found the perfect gifts.
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            With over 10,000+ five-star reviews, our customers love how easy we
            make gift-giving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unique;
