import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import React from "react";
import FAQItem from "@/components/molecules/FAQItem";
import Button from "@/components/atoms/Button";

const FAQSection = () => {
  const faqs = [
    {
      question: "How is Social Trends different from other content tools?",
      answer: "Social Trends is the only platform that combines real-time social listening with AI content generation and strategic distribution. Instead of using multiple tools that don't talk to each other, you get everything in one intelligent ecosystem."
    },
    {
      question: "Will the AI-generated content sound like my brand?",
      answer: "Yes. Our Brand Voice AI analyzes your existing content to learn your unique voice, tone, and style. Every piece of generated content maintains your brand's authenticity and consistency."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most users see improved engagement within the first week. Our AI identifies trending topics and audience preferences immediately, so your content starts performing better from day one."
    },
    {
      question: "Do I need any technical skills to use Social Trends?",
      answer: "Not at all. Social Trends is designed for marketers, creators, and business owners—not developers. If you can use social media, you can use Social Trends."
    }
  ];

  return (
<section className="py-12 sm:py-16 lg:py-20 bg-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{
                opacity: 0,
                y: 20
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.8
            }}
            viewport={{
                once: true
            }}
            className="text-center space-y-6 mb-16">
            <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-display">Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Everything you need to know about Social Trends
                          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* FAQ Items */}
            <div className="lg:col-span-2 space-y-4">
                {faqs.map((faq, index) => <motion.div
                    key={faq.question}
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1
                    }}
                    viewport={{
                        once: true
                    }}>
                    <FAQItem question={faq.question} answer={faq.answer} />
                </motion.div>)}
            </div>
            {/* CTA Card */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: 20
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.3
                }}
                viewport={{
                    once: true
                }}
                className="lg:sticky lg:top-8 mt-8 lg:mt-0">
                <div
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 border border-primary/20 text-center space-y-6">
                    <div
                        className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                        <MessageCircle className="w-8 h-8 text-white" />
                    </div>
<h3 className="text-xl font-bold text-gray-900 font-display">Still Have Questions?
                                      </h3>
                    <p className="text-gray-600">Book a personalized demo and see how Social Trends can transform your content marketing.</p>
                    <div className="text-gray-600 text-sm sm:text-base">
                        <Button size="lg" className="w-full">Book a Demo</Button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</section>
  );
};

export default FAQSection;