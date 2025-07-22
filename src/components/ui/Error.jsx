import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
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
          className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto"
        >
          <ApperIcon name="AlertTriangle" className="w-8 h-8 text-white" />
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 font-display">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600">
            {message}
          </p>
        </div>

        {onRetry && (
          <Button onClick={onRetry} className="group">
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Error;