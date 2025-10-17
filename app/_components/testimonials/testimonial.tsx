import TestimonialCard from "./testimonial-card";
import TestimonialCarousel from "./testimonial-carousel";

export interface Testimonial {
  avatar: string;
  name: string;
  ratings: number;
  testimonial: string;
  platformUrl: string;
  platform: string;
  duration: string;
}

export function getTestimonials(): Testimonial[] {
  return [
    {
      avatar: "https://i.pravatar.cc/150?u=alice.johnson",
      name: "Alice Johnson",
      ratings: 5,
      testimonial:
        "The team handled my company’s tax filings flawlessly. Their attention to detail and prompt communication made the entire process stress-free. Highly recommended for anyone seeking reliable financial guidance",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "a week ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=marcus.lee",
      name: "Marcus Lee",
      ratings: 4,
      testimonial:
        "The team handled my company’s tax filings flawlessly. Their attention to detail and prompt communication made the entire process stress-free. Highly recommended for anyone seeking reliable financial guidance",
      platformUrl: "https://cdn.simpleicons.org/trustpilot",
      platform: "Trustpilot",
      duration: "2 days ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=priya.patel",
      name: "Priya Patel",
      ratings: 5,
      testimonial:
        "The team handled my company’s tax filings flawlessly. Their attention to detail and prompt communication made the entire process stress-free. Highly recommended for anyone seeking reliable financial guidance",
      platformUrl: "https://cdn.simpleicons.org/facebook",
      platform: "Facebook",
      duration: "a day ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=omar.haddad",
      name: "Omar Haddad",
      ratings: 5,
      testimonial:
        "The team handled my company’s tax filings flawlessly. Their attention to detail and prompt communication made the entire process stress-free. Highly recommended for anyone seeking reliable financial guidance",
      platformUrl: "https://cdn.simpleicons.org/linkedin",
      platform: "LinkedIn",
      duration: "3 weeks ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=sophia.muller",
      name: "Sophia Muller",
      ratings: 4,
      testimonial:
        "The team handled my company’s tax filings flawlessly. Their attention to detail and prompt communication made the entire process stress-free. Highly recommended for anyone seeking reliable financial guidance",
      platformUrl: "https://cdn.simpleicons.org/yelp",
      platform: "Yelp",
      duration: "a month ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=ethan.brown",
      name: "Ethan Brown",
      ratings: 5,
      testimonial:
        "The team handled my company’s tax filings flawlessly. Their attention to detail and prompt communication made the entire process stress-free. Highly recommended for anyone seeking reliable financial guidance",
      platformUrl: "https://cdn.simpleicons.org/instagram",
      platform: "Instagram",
      duration: "just now",
    },
  ];
}

export default async function Testimonial() {
  return (
    <section className="testimonials">
      <h2>
        Proven Results, <span>Happy Clients</span>
      </h2>
      <ul id="testimonial-carousel" className="testimonials-container">
        {getTestimonials().map((testimonial, index) => (
          <li key={index}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
      <TestimonialCarousel />
    </section>
  );
}
