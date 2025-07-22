import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  const socialIcons = [
    { name: "Twitter", delay: 0 },
    { name: "Instagram", delay: 0.5 },
    { name: "Linkedin", delay: 1 },
    { name: "Youtube", delay: 1.5 },
    { name: "MessageCircle", delay: 2 }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-primary/5 min-h-screen flex items-center">
      {/* Floating Social Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {socialIcons.map((icon, index) => (
          <motion.div
            key={icon.name}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 0.1, 
              y: 0,
              x: [0, 20, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              delay: icon.delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
          >
            <ApperIcon 
              name={icon.name} 
              className="w-16 h-16 text-primary" 
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Turn Social Conversations Into{" "}
                <span className="gradient-text">Content That Converts</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                The AI-powered content intelligence platform that transforms real-time social trends 
                into strategic, brand-aligned content campaigns that drive growth, engagement, and revenue.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Stop guessing what your audience wants. Social Trends bridges the gap between social 
                listening and content creation, automatically generating data-driven content strategies 
                that resonate with your audience and deliver measurable results.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="xl" className="group">
                Start Your Free Strategy Session
                <ApperIcon name="ArrowRight" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="secondary" size="xl" className="group">
                <ApperIcon name="Play" className="mr-2 w-5 h-5" />
                Watch 2-Minute Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-surface rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Social Trends Dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Trending Topics */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Trending Topics</h3>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-surface rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm font-medium">#AIMarketing</span>
                      <span className="text-xs text-secondary font-bold">+124%</span>
                    </div>
                    <div className="bg-surface rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm font-medium">#ContentStrategy</span>
                      <span className="text-xs text-secondary font-bold">+89%</span>
                    </div>
                  </div>
                </div>

                {/* Analytics Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Engagement Analytics</h3>
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-end justify-center space-x-2 p-4">
                    {[40, 65, 80, 45, 90, 70, 85].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-gradient-to-t from-primary to-secondary rounded-sm w-8"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary to-primary text-white p-3 rounded-xl shadow-lg"
            >
              <ApperIcon name="TrendingUp" className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;