import { motion } from "framer-motion";
import FeatureCard from "@/components/molecules/FeatureCard";
import ApperIcon from "@/components/ApperIcon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Radar",
      title: "AI Discovery Engine That Never Sleeps",
      description: "Get a real-time feed of emerging trends, relevant conversations, and content opportunities tailored specifically to your industry and audience. Our AI continuously monitors TikTok, YouTube, Instagram, X, LinkedIn, and Reddit to identify trending topics, analyze audience sentiment, and track competitor strategies. Never miss a trending topic or viral moment again.",
      badge: "Monitor 6 major platforms in real-time",
      isHighlighted: true
    },
    {
      icon: "Mic",
      title: "Content That Sounds Authentically You",
      description: "Our proprietary Brand Voice AI scans your website and social media to create a unique Brand Voice Profile, ensuring all generated content maintains your authentic voice and brand consistency across all channels. Every piece of content feels like it came from your team, not a robot.",
      features: [
        "Learn your unique voice automatically",
        "Maintain brand consistency at scale", 
        "Adapt tone for different platforms"
      ]
    },
    {
      icon: "Target",
      title: "Strategic Campaign Generation",
      description: "Whether you're launching a product, building brand awareness, or driving conversions, get a complete strategy based on real audience data. Our Strategic Campaign Generator transforms social insights into comprehensive content plans that align with your business goals.",
      cards: [
        "Generate comprehensive 30-day, multi-channel content plans with one click",
        "Content Studio with Multi-AI Assistant - Review, refine, and approve AI-generated content",
        "Create Once, Publish Everywhere - Transform a single idea into platform-optimized posts"
      ]
    },
    {
      icon: "Zap",
      title: "From Insights to Published Content in Minutes",
      description: "Social Trends automates the entire content lifecycle. Our Intelligent Scheduler publishes content at optimal times for each platform, while our Performance Analytics Dashboard tracks key metrics across all channels and provides actionable insights to improve future content.",
      workflow: ["Listen", "Strategize", "Create", "Publish", "Optimize"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-display">
            Everything You Need to{" "}
            <span className="gradient-text">Dominate Content Marketing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The only platform that combines real-time social listening with AI content generation 
            and strategic distribution in one intelligent ecosystem.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {/* Real-time Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-primary/10 via-surface to-secondary/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium">
                    <ApperIcon name="Zap" className="w-4 h-4 mr-2" />
                    {features[0].badge}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 font-display">
                    {features[0].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {features[0].description}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-2xl font-bold gradient-text"
                  >
                    <ApperIcon name="TrendingUp" className="w-6 h-6" />
                    <span>+25M conversations analyzed daily</span>
                  </motion.div>
                </div>
                
                {/* Mini Dashboard */}
                <div className="bg-surface rounded-2xl shadow-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Live Trends</h4>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    {["#AIMarketing", "#ContentStrategy", "#SocialTrends"].map((trend, index) => (
                      <motion.div
                        key={trend}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg"
                      >
                        <span className="font-medium">{trend}</span>
                        <span className="text-secondary font-bold text-sm">
                          +{Math.floor(Math.random() * 100 + 50)}%
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Brand Voice Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Brand Voice Dashboard */}
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                  <h4 className="font-semibold text-gray-900 mb-4">Brand Voice Analysis</h4>
                  
                  {/* Pie Chart Mockup */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20"></div>
                    <div className="absolute inset-2 rounded-full bg-surface"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold gradient-text">95%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Professional</span>
                      <span className="font-medium">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Friendly</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Authoritative</span>
                      <span className="font-medium">20%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900 font-display">
                    {features[1].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {features[1].description}
                  </p>
                  
                  <div className="space-y-4">
                    {features[1].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                          <ApperIcon name="Check" className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strategic Campaign Generation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-secondary/10 via-surface to-primary/10 rounded-3xl p-8 lg:p-12 border border-secondary/20">
              <div className="text-center space-y-6 mb-12">
                <h3 className="text-3xl font-bold text-gray-900 font-display">
                  {features[2].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  {features[2].description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {features[2].cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-surface rounded-xl p-6 shadow-lg border border-gray-200 hover:border-secondary/30 transition-all duration-200"
                  >
                    <p className="text-gray-700 font-medium">{card}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Intelligent Automation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900 font-display">
                    {features[3].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {features[3].description}
                  </p>
                  
                  {/* Workflow Steps */}
                  <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                    {features[3].workflow.map((step, index) => (
                      <div key={step} className="flex items-center space-x-2 flex-shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                        >
                          {step}
                        </motion.div>
                        {index < features[3].workflow.length - 1 && (
                          <ApperIcon name="ArrowRight" className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Analytics Dashboard Mockup */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Performance Analytics</h4>
                    <ApperIcon name="BarChart3" className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold gradient-text">24.5K</div>
                        <div className="text-xs text-gray-600">Engagement</div>
                      </div>
                      <div className="bg-surface rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold gradient-text">+127%</div>
                        <div className="text-xs text-gray-600">Growth</div>
                      </div>
                    </div>
                    
                    <div className="h-20 bg-surface rounded-lg flex items-end justify-center space-x-1 p-2">
                      {[30, 50, 40, 70, 60, 80, 90].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-t from-primary to-secondary rounded-sm w-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;