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
    <div className="bg-gradient-to-r from-earth-100 to-brand-100 text-earth-800 shadow-md rounded-2xl overflow-hidden">
      <div className="py-3">
        <div className="marquee" aria-label="Site announcement">
          <div className="marquee-content">
            {[...messages, ...messages, ...messages].map((msg, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-8">
                <msg.icon className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide">{msg.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}