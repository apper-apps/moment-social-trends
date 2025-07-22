import { motion } from "framer-motion";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const FeatureCard = ({ icon, title, description, isHighlighted = false }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative p-8 rounded-2xl bg-surface shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-200",
        isHighlighted && "border-primary/30 bg-gradient-to-br from-surface to-primary/5"
      )}
    >
      <div className={cn(
        "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-200",
        isHighlighted 
          ? "bg-gradient-to-r from-primary to-secondary" 
          : "bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
      )}>
        <ApperIcon 
          name={icon} 
          className={cn(
            "w-8 h-8 transition-colors duration-200",
            isHighlighted ? "text-white" : "text-gray-600"
          )} 
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {isHighlighted && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"></div>
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;