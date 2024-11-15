"use client";
import {
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineSend,
} from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

// Define validation schema matching the API
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactCard = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormValues> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ContactFormValues;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: process.env.NEXT_PUBLIC_EMAIL_TO,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  return (
    <section
      id="contact-me"
      className="relative flex items-center justify-center py-8 sm:py-12 md:py-16 px-4"
    >
      {/* Animated background */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start lg:items-center"
        >
          {/* Left side - Info */}
          <div className="space-y-8 md:space-y-12 p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Let&apos;s Create
                </span>
                <br />
                <span className="text-white">Something Incredible</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                Transform your vision into reality with cutting-edge technology
                and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white/5 p-4 sm:p-6 rounded-2xl backdrop-blur-lg">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                  <AiOutlineMail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Email Me At
                  </h3>
                  <p className="text-blue-400 text-sm sm:text-base break-all">
                    abdulra7manshaban@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white/5 p-4 sm:p-6 rounded-2xl backdrop-blur-lg">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                  <AiOutlineMessage className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Quick Response
                  </h3>
                  <p className="text-purple-400 text-sm sm:text-base">
                    Within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-2">
                <div className="relative">
                  <AiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full h-12 sm:h-14 pl-12 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-purple-500  focus:ring-purple-500/20"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <AiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full h-12 sm:h-14 pl-12 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-purple-500  focus:ring-purple-500/20"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 border border-white/10 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <AiOutlineSend className="text-lg sm:text-xl" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCard;
