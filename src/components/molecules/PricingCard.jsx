import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";
import React from "react";
const PricingCard = ({ plan, isPopular = false }) => {
  const { name, price, billing, features, ctaText } = plan;
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: isPopular 
          ? "0 25px 50px rgba(0, 212, 255, 0.3)" 
          : "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative p-8 rounded-3xl bg-surface shadow-xl border-2 transition-all duration-200",
        isPopular 
          ? "border-primary bg-gradient-to-br from-surface via-surface to-primary/5 scale-105" 
          : "border-gray-200 hover:border-primary/30"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="primary" className="px-4 py-2 text-sm font-bold">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
          {name}
        </h3>
        
        <div className="mb-4">
          {price === 0 ? (
            <span className="text-4xl font-bold gradient-text">Free</span>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold gradient-text">${price}</span>
              <span className="text-gray-500 ml-2">/{billing}</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mt-0.5">
              <ApperIcon name="Check" className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      <Button 
        variant={isPopular ? "primary" : "secondary"} 
        size="lg" 
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
};

export default PricingCard;