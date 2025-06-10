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
    name: "Menewoua Mervine",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "I just had my teeth whitened by an amazing dentist, at the “Radiant Smile Dental Services”, and I have to say, it was a fantastic experience. The dentist was so gentle and careful, making sure I was comfortable the entire time.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLiiQmHKy4qH5YFrzwpx7QgaGOXWq1eWamIbcnNfUSFhdT2Aw=w36-h36-p-rp-mo-br100",
    date: "10 months ago",
  },
  {
    id: 2,
    name: "Adebanke Adebanji",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "I had an excellent experience at Radiant smile dental services. The staff was welcoming, the clinic was spotless, creating a calm and comfortable environment.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLXMhAZVSXE-pxHvI3ugqffbw3aR4To_23tpPyiwcAxls0-eA=w36-h36-p-rp-mo-br100",
    date: "10 months ago",
  },
  {
    id: 3,
    name: "Oluwaseun Janet",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "Radiant smile dental services is a top notch dental clinic that renders top notch services. A visit to Radiant smile dental services will definitely leave you with a beautiful, big and radiant smile.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKH9ohMil_rduIm8rlwhBRIxsvzmpq0Y4zVRywRFVJa7YMmtQ=w36-h36-p-rp-mo-br100",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Oriyomi Olabode Samuel",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "I recently visited this dental service and was thoroughly impressed by their well-equipped facilities and experienced staffs. I highly recommend this dental service for anyone seeking top-notch care.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIlkJb3pgkPUh_ZAhybYlhStPvVfgjq9lxYz6gElbYXSYGs8w=w36-h36-p-rp-mo-br100",
    date: "1 year ago",
  },
  {
    id: 5,
    name: "Juss Dha Vhi",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "He is a very considerate and professional dentist, his expertise is of no match",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLBO5uB6NB3L24AfTy684p1WRrtH412vIRnUskL7kJlSKxRew=w36-h36-p-rp-mo-br100",
    date: "10 months ago",
  },
  {
    id: 6,
    name: "Aderonke Adelanke",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "I did a tooth extraction, was done perfectly without complications.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJEkoInOu7PNWoaKqeuc8Hn5qpi_NpNcRZNPMrS7yBRTIxsPQ=w36-h36-p-rp-mo-br100",
    date: "5 days ago",
  },
  {
    id: 7,
    name: "Wewe Adeola",
    role: "Client",
    company: "N/A",
    rating: 5,
    review: "A good place to be for your dental care",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKoMLpLcj2bSo8ztgOIzH1fMViZv4KnEu6gMSK4j8-gXP-BJg=w36-h36-p-rp-mo-br100",
    date: "10 months ago",
  },
  {
    id: 8,
    name: "Kehinde Joy",
    role: "Client",
    company: "N/A",
    rating: 5,
    review: "Awesome dental services and the environment is conducive",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjW6AWuR6cS-6X3CVErWwT8kHC8rjI3IQZ1azS4OVClnTgUmpWOX=w36-h36-p-rp-mo-br100",
    date: "1 year ago",
  },
  {
    id: 9,
    name: "Menewoua Mervine",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "The clinic had such a warm and welcoming vibe, and the staff were really friendly. I'm thrilled with the results and would highly recommend this dentist to anyone thinking about getting their teeth whitened or any other dental work done.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLiiQmHKy4qH5YFrzwpx7QgaGOXWq1eWamIbcnNfUSFhdT2Aw=w36-h36-p-rp-mo-br100",
    date: "10 months ago",
  },
  {
    id: 10,
    name: "Adebanke Adebanji",
    role: "Client",
    company: "N/A",
    rating: 5,
    review:
      "The procedure was smooth and virtually painless. I highly recommend Radiant smile dental services for top-notch dental care.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLXMhAZVSXE-pxHvI3ugqffbw3aR4To_23tpPyiwcAxls0-eA=w36-h36-p-rp-mo-br100",
    date: "10 months ago",
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
      className="py-20 bg-gradient-to-bl from-blue-50 via-white to-blue-50 overflow-hidden"
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
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Clients Say
            </span>
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
