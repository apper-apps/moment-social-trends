import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No data available", 
  description = "Get started by adding some content.",
  actionText = "Get Started",
  onAction,
  icon = "Database"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[400px] flex items-center justify-center p-8"
    >
      <div className="text-center space-y-6 max-w-md">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto"
        >
          <ApperIcon name={icon} className="w-8 h-8 text-gray-500" />
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 font-display">
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        {onAction && (
          <Button onClick={onAction}>
            {actionText}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Empty;