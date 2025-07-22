import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const FinalCTASection = () => {
  const trustSignals = [
    { icon: "Calendar", text: "14-day free trial" },
    { icon: "DollarSign", text: "No setup fees" },
    { icon: "X", text: "Cancel anytime" },
    { icon: "HeadphonesIcon", text: "24/7 support" },
    { icon: "Shield", text: "99.9% uptime guarantee" }
  ];

  return (
<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-surface to-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h2 
className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 leading-tight font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your{" "}
              <span className="gradient-text">Content Marketing?</span>
            </motion.h2>
            
            <motion.p 
className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of creators and marketers who've eliminated content guesswork and 
              started driving real results. Get your first data-driven content strategy in minutes, not months.
            </motion.p>
          </div>

          <motion.div 
className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
<Button size="xl" className="group text-base lg:text-lg px-8 sm:px-12 py-4 lg:py-5 w-full sm:w-auto min-h-[48px]">
              Start Your Free 14-Day Trial
              <ApperIcon name="ArrowRight" className="ml-2 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="secondary" size="xl" className="group text-base lg:text-lg px-8 sm:px-12 py-4 lg:py-5 w-full sm:w-auto min-h-[48px]">
              <ApperIcon name="Play" className="mr-2 w-5 h-5 lg:w-6 lg:h-6" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-3xl mx-auto pt-8"
          >
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                  <ApperIcon name={signal.icon} className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 leading-tight">
                  {signal.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8"
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-600 font-medium">10,000+ happy users</span>
            </div>
            
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <ApperIcon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 font-medium ml-2">4.9/5 rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;