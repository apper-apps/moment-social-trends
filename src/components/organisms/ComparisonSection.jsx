import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import React from "react";
import { cn } from "@/utils/cn";
const ComparisonSection = () => {
  const comparisons = [
    {
      category: "Traditional Social Listening",
      subtitle: "BuzzSumo, Brand24",
      tagline: "They give you data. We give you action.",
      limitation: "Shows what's trending but no content creation",
      color: "red"
    },
    {
      category: "AI Content Generators", 
      subtitle: "Jasper, Copy.ai",
      tagline: "They create content. We create strategy.",
      limitation: "Generic content without audience insights",
      color: "yellow"
    },
    {
      category: "Social Media Schedulers",
      subtitle: "Hootsuite, Buffer", 
      tagline: "They distribute content. We create intelligence.",
      limitation: "Scheduling without strategic direction",
      color: "orange"
    }
  ];

  return (
<section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-display">
            Why Social Trends Beats{" "}
            <span className="gradient-text">Every Alternative</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The only platform that combines all three: Listen, Create, and Distribute.
          </p>
        </motion.div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {comparisons.map((comp, index) => (
            <motion.div
              key={comp.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-6 rounded-2xl border-2 bg-surface",
                comp.color === "red" && "border-red-200 bg-red-50/50",
                comp.color === "yellow" && "border-yellow-200 bg-yellow-50/50", 
                comp.color === "orange" && "border-orange-200 bg-orange-50/50"
              )}
            >
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 font-display mb-2">
                    {comp.category}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {comp.subtitle}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className={cn(
                    "p-3 rounded-lg text-center font-semibold text-sm",
                    comp.color === "red" && "bg-red-100 text-red-800",
                    comp.color === "yellow" && "bg-yellow-100 text-yellow-800",
                    comp.color === "orange" && "bg-orange-100 text-orange-800"
                  )}>
                    {comp.tagline}
                  </div>
                  
                  <div className="flex items-start space-x-2 p-3 bg-gray-100 rounded-lg">
                    <ApperIcon name="AlertCircle" className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      {comp.limitation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Trends Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 lg:p-12 border-2 border-primary/20">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold gradient-text font-display">
                  Social Trends: The Complete Solution
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The only platform that combines all three capabilities in one intelligent ecosystem
                </p>
              </div>
              
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-surface rounded-xl p-6 shadow-lg border border-primary/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Ear" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Listen</h4>
                  <p className="text-sm text-gray-600">Real-time social intelligence across all platforms</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-surface rounded-xl p-6 shadow-lg border border-accent/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Brain" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Create</h4>
                  <p className="text-sm text-gray-600">AI-powered strategic content generation</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-surface rounded-xl p-6 shadow-lg border border-secondary/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Send" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Distribute</h4>
                  <p className="text-sm text-gray-600">Intelligent scheduling and optimization</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;