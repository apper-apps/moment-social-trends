import { motion } from "framer-motion";
import PricingCard from "@/components/molecules/PricingCard";
import ApperIcon from "@/components/ApperIcon";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: 0,
      billing: "month",
      features: [
        "5 trend reports per month",
        "Basic content generation",
        "1 brand voice profile", 
        "Manual publishing",
        "Community support"
      ],
      ctaText: "Start Free Trial",
      isPopular: false
    },
    {
      name: "Creator", 
      price: 49,
      billing: "month",
      features: [
        "Unlimited trend monitoring",
        "Advanced content generation",
        "3 brand voice profiles",
        "Auto-publishing to 5 channels", 
        "Performance analytics",
        "Email support"
      ],
      ctaText: "Start Free Trial",
      isPopular: true
    },
    {
      name: "Business",
      price: 149, 
      billing: "month",
      features: [
        "Everything in Creator",
        "Team collaboration features",
        "Unlimited brand profiles",
        "Publishing to all channels",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations"
      ],
      ctaText: "Book a Demo",
      isPopular: false
    }
  ];

  const trustSignals = [
    { icon: "Calendar", text: "14-day free trial" },
    { icon: "CreditCard", text: "No credit card required" },
    { icon: "X", text: "Cancel anytime" }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-display">
            Choose Your{" "}
            <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. Every plan includes our core AI features.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard plan={plan} isPopular={plan.isPopular} />
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 text-gray-600"
        >
          {trustSignals.map((signal, index) => (
            <div key={signal.text} className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                <ApperIcon name={signal.icon} className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium">{signal.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Feature Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-background rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 font-display mb-8">
              Compare Features
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold gradient-text">Creator</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Trend Reports", "5/month", "Unlimited", "Unlimited"],
                    ["Brand Voice Profiles", "1", "3", "Unlimited"], 
                    ["Publishing Channels", "Manual", "5 Channels", "All Channels"],
                    ["Performance Analytics", "Basic", "Advanced", "Advanced + Reporting"],
                    ["Team Collaboration", "✗", "✗", "✓"],
                    ["Priority Support", "✗", "✗", "✓"]
                  ].map((row, index) => (
                    <tr key={row[0]}>
                      <td className="py-4 px-6 font-medium text-gray-900">{row[0]}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row[1]}</td>
                      <td className="py-4 px-6 text-center font-semibold text-primary">{row[2]}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;