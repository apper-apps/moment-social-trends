import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-display">
              The Content Marketing Disconnect That's{" "}
              <span className="gradient-text">Costing You Growth</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                You know content marketing drives results, but you're stuck in a cycle of guesswork. 
                You create content hoping it will resonate, but without real-time audience insights, 
                you're shooting in the dark. Meanwhile, your competitors are capturing attention with 
                content that seems to hit every time.
              </p>
              
              <p>
                The problem isn't your creativity—it's the disconnect between understanding your audience 
                and creating content they actually want. Traditional social listening tools give you data 
                but no action plan. AI content generators create content but lack strategic direction. 
                Social schedulers distribute content but provide no intelligence.
              </p>
              
              <p className="text-xl font-semibold gradient-text-purple">
                What if you could eliminate the guesswork entirely?
              </p>
            </div>
          </div>

          {/* Workflow Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mt-16"
          >
            {/* Fragmented Workflow */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 font-display">
                Current Fragmented Workflow
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: "Search", label: "Social Listening Tools", color: "text-red-500" },
                  { icon: "ArrowDown", label: "Manual Analysis", color: "text-red-500" },
                  { icon: "Edit", label: "Content Creation", color: "text-red-500" },
                  { icon: "Calendar", label: "Scheduling Tools", color: "text-red-500" },
                  { icon: "BarChart3", label: "Analytics", color: "text-red-500" }
                ].map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl border border-red-200"
                  >
                    <ApperIcon name={step.icon} className={`w-6 h-6 ${step.color}`} />
                    <span className="font-medium text-gray-900">{step.label}</span>
                    <span className="text-sm text-red-600 ml-auto">Disconnected</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Unified Approach */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold gradient-text font-display">
                Social Trends Unified Approach
              </h3>
              
              <div className="relative">
                <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                
                <div className="space-y-6">
                  {[
                    { icon: "Zap", label: "Real-time Intelligence", desc: "Instant trend detection" },
                    { icon: "Brain", label: "AI Strategy Generation", desc: "Automated content plans" },
                    { icon: "Wand2", label: "Smart Content Creation", desc: "Brand-aligned content" },
                    { icon: "Rocket", label: "Intelligent Publishing", desc: "Optimal timing & distribution" },
                    { icon: "TrendingUp", label: "Performance Optimization", desc: "Continuous improvement" }
                  ].map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <ApperIcon name={step.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{step.label}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;