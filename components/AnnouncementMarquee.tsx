"use client";

export default function AnnouncementMarquee() {
  const message =
    "We are purely vegetarian, also have vegan products, our Products do not contain palm oil, margarine, artificial food colouring or flavouring, compound chocolate";

  return (
    <div className="bg-green-700 text-white">
      <div className="container-gutter py-2">
        <div className="marquee" aria-label="Site announcement">
          <div className="marquee-content">
            {message} • {message} • {message}
          </div>
        </div>
      </div>
    </div>
  );
}