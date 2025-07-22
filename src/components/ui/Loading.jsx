import { motion } from "framer-motion";
import React from "react";
import { AppIcon } from "@/components/ui/AppIcon";

const Loading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto"
        >
          <AppIcon name="TrendingUp" className="w-8 h-8 text-white" />
        </motion.div>
        {/* Loading Text */}
        <div className="space-y-4">
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl font-bold gradient-text font-display"
          >
            Loading Social Trends
          </motion.h2>
          
          <p className="text-gray-600">
            Preparing your content intelligence dashboard...
          </p>
        </div>

        {/* Loading Bars */}
        <div className="flex items-end justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{
                height: [20, 40, 20]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1
              }}
              className="w-3 bg-gradient-to-t from-primary to-secondary rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;