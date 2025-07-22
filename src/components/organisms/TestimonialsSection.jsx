import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Social Trends transformed our content strategy overnight. We went from posting randomly to having a data-driven content calendar that consistently drives engagement and leads.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      avatar: "/avatars/sarah.jpg"
    },
    {
      quote: "As a solopreneur, I was spending 15 hours a week on content creation. Now I spend 2 hours and get better results. Social Trends is a game-changer.",
      author: "Marcus Rodriguez", 
      role: "Business Coach",
      company: "GrowthMindset",
      avatar: "/avatars/marcus.jpg"
    },
    {
      quote: "The Brand Voice AI is incredible. It captures our company's tone perfectly, and our audience can't tell the difference between AI-generated and human-written content.",
      author: "Jennifer Park",
      role: "CMO",
      company: "GrowthLabs",
      avatar: "/avatars/jennifer.jpg"
    }
  ];

  const clientLogos = [
    "TechFlow", "GrowthMindset", "GrowthLabs", "InnovateCorp", 
    "ScaleUp", "DigitalFirst", "ContentPro", "SocialGenius"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <p className="text-gray-600 font-medium">
            Trusted by 10,000+ Content Creators and Marketing Teams
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-lg font-bold text-gray-700 hover:gradient-text transition-all duration-200 cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-display">
              What Our Users Are{" "}
              <span className="gradient-text">Saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands who've transformed their content marketing with Social Trends
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <TestimonialCard testimonial={testimonials[currentTestimonial]} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial(
                  currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
                )}
                className="p-2 rounded-full border border-gray-300 hover:border-primary text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <ApperIcon name="ChevronLeft" className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-200",
                      index === currentTestimonial 
                        ? "bg-gradient-to-r from-primary to-secondary" 
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentTestimonial(
                  currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
                )}
                className="p-2 rounded-full border border-gray-300 hover:border-primary text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <ApperIcon name="ChevronRight" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;