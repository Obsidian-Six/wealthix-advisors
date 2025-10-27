import Image from "next/image";
import { Testimonial } from "./testimonial";
import TestimonialRatings from "./testimonial-ratings";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article className="testimonial-card">
      <header className="testimonial-header">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={50}
          height={50}
          className="testimonial-avatar"
        />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <TestimonialRatings ratings={testimonial.ratings} />
        </div>
      </header>
      <blockquote className="testimonial-text">
        &ldquo;{testimonial.testimonial}&rdquo;
      </blockquote>
      <footer className="testimonial-footer">
        <span className="testimonial-platform">
          Posted on
          <Image
            src={testimonial.platformUrl}
            width={20}
            height={20}
            alt={`${testimonial.platform} logo`}
            unoptimized
          />
        </span>
        <span className="testimonial-duration">{testimonial.duration}</span>
      </footer>
    </article>
  );
}
