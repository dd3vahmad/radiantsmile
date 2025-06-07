"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  User,
  Stethoscope,
  Send,
  CheckCircle,
  Star,
  Stars,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    service: "",
    urgency: "routine",
    message: "",
    preferredContact: "phone",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "General Checkup & Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Root Canal Treatment",
    "Orthodontics (Braces)",
    "Cosmetic Dentistry",
    "Oral Surgery",
    "Emergency Dental Care",
    "Pediatric Dentistry",
    "Periodontal Treatment",
  ];

  const timeSlots = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.appointmentDate ||
      !formData.appointmentTime ||
      !formData.service
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        appointmentDate: "",
        appointmentTime: "",
        service: "",
        urgency: "routine",
        message: "",
        preferredContact: "phone",
      });
    }, 3000);
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'd like to book a dental appointment.
    
Name: ${formData.firstName} ${formData.lastName}
Service: ${formData.service || "General Consultation"}
Preferred Date: ${formData.appointmentDate || "To be discussed"}
Preferred Time: ${formData.appointmentTime || "To be discussed"}
Phone: ${formData.phone}
${formData.message ? `Additional Info: ${formData.message}` : ""}`;

    const whatsappUrl = `https://wa.me/2348067891723?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Appointment Request Submitted!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for choosing our dental practice. We'll contact you
              within 24 hours to confirm your appointment details.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Expected response time: 2-4 hours</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-blue-500 flex items-center justify-center gap-2 mb-4">
            <Stars />
            <span className="text-sm font-semibold uppercase tracking-wider">
              BOOK APPOINTMENT
            </span>
            <Stars />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your <span className="text-blue-500">Dental Visit</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to achieve your perfect smile? Book an appointment with our
            experienced dental team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white h-fit sticky top-8">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-100">(+234) 806-789-1723</p>
                    <p className="text-blue-100 text-sm">Mon-Fri: 8AM-6:30PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">appointments@dentalcare.com</p>
                    <p className="text-blue-100 text-sm">
                      24/7 Support Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-blue-100">123 Dental Street, Akure</p>
                    <p className="text-blue-100">Ondo State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Emergency Care</h4>
                    <p className="text-blue-100">24/7 Emergency Services</p>
                    <p className="text-blue-100 text-sm">
                      Call for urgent care
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="mt-8 pt-6 border-t border-blue-500">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quick WhatsApp Contact
                </button>
                <p className="text-blue-100 text-xs text-center mt-2">
                  Get instant response via WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-500" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full address"
                  />
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Appointment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        min={getTodayDate()}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-blue-500" />
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Urgency Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        value: "routine",
                        label: "Routine",
                        color: "bg-green-100 text-green-700 border-green-200",
                      },
                      {
                        value: "urgent",
                        label: "Urgent",
                        color:
                          "bg-yellow-100 text-yellow-700 border-yellow-200",
                      },
                      {
                        value: "emergency",
                        label: "Emergency",
                        color: "bg-red-100 text-red-700 border-red-200",
                      },
                    ].map((urgency) => (
                      <label key={urgency.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={urgency.value}
                          checked={formData.urgency === urgency.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-3 border-2 rounded-lg text-center font-medium transition-all duration-200 ${
                            formData.urgency === urgency.value
                              ? urgency.color
                              : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          {urgency.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: "phone", label: "Phone Call" },
                      { value: "email", label: "Email" },
                      { value: "whatsapp", label: "WhatsApp" },
                    ].map((method) => (
                      <label
                        key={method.value}
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method.value}
                          checked={formData.preferredContact === method.value}
                          onChange={handleInputChange}
                          className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          {method.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your dental concerns, symptoms, or any special requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="bg-green-500 cursor-pointer hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
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
    </section>
  );
};

export default ContactUs;
