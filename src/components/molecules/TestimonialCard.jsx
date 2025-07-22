import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ testimonial }) => {
  const { quote, author, role, company, avatar } = testimonial;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-surface rounded-2xl p-8 shadow-lg border border-gray-100 relative"
    >
      <div className="absolute top-6 left-6 text-primary/20">
        <ApperIcon name="Quote" className="w-8 h-8" />
      </div>
      
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 pt-4">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 font-display">
            {author}
          </div>
          <div className="text-gray-600 text-sm">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;