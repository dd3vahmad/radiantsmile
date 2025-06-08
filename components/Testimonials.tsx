"use client";

import { Star, Quote, Stars, Clock, CheckCircle } from "lucide-react";

interface ITestimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
  company: string;
  avatar: string;
  date: string;
}

const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Solutions Inc.",
    rating: 5,
    review:
      "Absolutely outstanding service! The team went above and beyond to ensure our project was completed on time and exceeded all expectations. Their attention to detail is remarkable.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovation Labs",
    rating: 5,
    review:
      "Working with this team has been a game-changer for our business. Their expertise and professionalism are unmatched. Highly recommend to anyone looking for quality service.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Creative Studio",
    rating: 4,
    review:
      "Great experience overall! The communication was clear throughout the project, and the final results were impressive. Would definitely work with them again.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "StartupX",
    rating: 5,
    review:
      "Exceptional quality and lightning-fast delivery. The team understood our vision perfectly and brought it to life better than we imagined. Truly professional work!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Design Lead",
    company: "Digital Agency",
    rating: 5,
    review:
      "The collaboration was seamless from start to finish. Their innovative approach and technical expertise helped us achieve results we didn't think were possible.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager",
    company: "Global Corp",
    rating: 4,
    review:
      "Professional, reliable, and innovative. The team delivered exactly what we needed on schedule. Their support throughout the process was excellent.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    date: "5 days ago",
  },
  {
    id: 7,
    name: "Rachel Green",
    role: "Brand Manager",
    company: "Fashion Forward",
    rating: 5,
    review:
      "Outstanding creativity and execution! They transformed our brand identity in ways we never expected. The results speak for themselves - highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    date: "3 days ago",
  },
  {
    id: 8,
    name: "Alex Kumar",
    role: "Tech Lead",
    company: "AI Innovations",
    rating: 5,
    review:
      "Brilliant technical implementation and smooth project management. The team's expertise in cutting-edge technologies is impressive. Exceeded all expectations!",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    date: "1 week ago",
  },
];

const StarRating = ({
  rating,
  size = "w-4 h-4",
}: {
  rating: number;
  size: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`${size} ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          } transition-colors duration-200`}
        />
      ))}
      <span className="ml-2 text-sm font-semibold text-gray-700">
        {rating}/5
      </span>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
  return (
    <div className="flex-shrink-0 w-96 bg-white rounded shadow-lg hover:shadow-2xl transition-all duration-300 mx-4 border border-gray-100">
      <div className="p-8">
        {/* Quote Icon */}
        <div className="flex justify-between items-start mb-6">
          <Quote className="w-8 h-8 text-blue-500 opacity-60" />
          <div className="text-right">
            <StarRating rating={testimonial.rating} size="" />
            <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
          "{testimonial.review}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              {testimonial.name}
            </h4>
            <p className="text-xs text-gray-600">{testimonial.role}</p>
            <p className="text-xs text-blue-600 font-medium">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center text-blue-600 justify-center gap-2 mb-4">
            <Stars />
            <span className="text-sm font-semibold uppercase tracking-wider">
              TESTIMONIALS
            </span>
            <Stars />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-x-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Scroll Animation */}
          <div className="flex">
            <div className="flex animate-scroll">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg px-6 py-10 border border-dashed border-blue-500">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">5-Star Rated</h4>
            <p className="text-gray-600 text-sm">Trusted by 500+ patients</p>
          </div>
          <div className="bg-white rounded-lg px-6 py-10 border border-dashed border-blue-500">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
            <p className="text-gray-600 text-sm">
              Confirmation within 24 hours
            </p>
          </div>
          <div className="bg-white rounded-lg px-6 py-10 border border-dashed border-blue-500">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Licensed Professionals
            </h4>
            <p className="text-gray-600 text-sm">Certified dental experts</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
