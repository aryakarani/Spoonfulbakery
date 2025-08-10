"use client";
import { Leaf, Heart, Award } from "lucide-react";

export default function AnnouncementMarquee() {
  const messages = [
    { icon: Leaf, text: "100% Vegetarian & Vegan Options" },
    { icon: Heart, text: "No Palm Oil or Margarine" },
    { icon: Award, text: "No Artificial Colors or Flavors" },
    { icon: Heart, text: "Made with Real Belgian Chocolate" },
  ];

  return (
    <div className="sticky top-16 md:top-16 z-30 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md">
      <div className="py-2.5">
        <div className="marquee" aria-label="Site announcement">
          <div className="marquee-content">
            {[...messages, ...messages, ...messages].map((msg, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6">
                <msg.icon className="h-3.5 w-3.5" />
                <span className="text-xs font-medium tracking-wide">{msg.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}