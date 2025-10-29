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
      avatar: "https://i.pravatar.cc/150?u=ahmed.al.mansoori",
      name: "Ahmed Al Mansoori",
      ratings: 5,
      testimonial:
        "Wealthix Advisors made my company formation process extremely smooth. Every step was explained clearly and handled with complete professionalism. Special thanks to CA Neetu for her quick responses and expert guidance. Highly recommended for business setup in the UAE!",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "a week ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=fatima.al.suwaidi",
      name: "Fatima Al Suwaidi",
      ratings: 5,
      testimonial:
        "Excellent service! Got my UAE visa processing done without any stress. The team is very supportive and professional.",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "5 days ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=mohammed.al.rasheed",
      name: "Mohammed Al Rasheed",
      ratings: 5,
      testimonial:
        "I was confused about business regulations, but Wealthix Advisors guided me like a true partner. Licensing and documentation were completed faster than promised. Really trustworthy!",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "2 weeks ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=sara.al.balushi",
      name: "Sara Al Balushi",
      ratings: 5,
      testimonial:
        "Business setup with Wealthix Advisors was so easy! No delays, clear pricing, and smooth process. Very reliable consultancy.",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "3 days ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=yousef.al.mutairi",
      name: "Yousef Al Mutairi",
      ratings: 5,
      testimonial:
        "They always kept me updated — WhatsApp, calls — every process step was transparent. Highly appreciate their commitment and support.",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "a day ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=aisha.al.khalifa",
      name: "Aisha Al Khalifa",
      ratings: 5,
      testimonial:
        "Very friendly and supportive staff. All documentation was handled without any hassle. I appreciate how honest they are with their advice.",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "4 days ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=ravi.kumar",
      name: "Ravi Kumar",
      ratings: 5,
      testimonial:
        "As an expat in Dubai, rules were confusing for me. But Wealthix Advisors explained everything in detail and completed the full setup smoothly. Big thanks to the team!",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "just now",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=maria.santos",
      name: "Maria Santos",
      ratings: 5,
      testimonial:
        "Here’s what I loved about their service: Fast processing, Affordable pricing, Clear instructions, Polite and respectful team. Will definitely recommend to my friends!",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "1 week ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=fahad.al.harbi",
      name: "Fahad Al Harbi",
      ratings: 5,
      testimonial:
        "Finding a trustworthy consultancy today is rare. Wealthix Advisors handled my business journey with patience and care. Extremely satisfied.",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "2 weeks ago",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=zahra.al.amiri",
      name: "Zahra Al Amiri",
      ratings: 5,
      testimonial:
        "One word: Reliable. If you want visa or business setup done right — choose Wealthix Advisors.",
      platformUrl: "https://cdn.simpleicons.org/google",
      platform: "Google",
      duration: "3 weeks ago",
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
