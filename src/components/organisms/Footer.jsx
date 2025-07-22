import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Help Center", "Community", "Documentation", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"]
  };

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Brand */}
<div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <ApperIcon name="TrendingUp" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text font-display">
                Social Trends
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-sm">
              Transform social conversations into content that converts with AI-powered intelligence.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-200"
                >
                  <ApperIcon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
{Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="sm:col-span-1">
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 Social Trends. All rights reserved.
          </p>
          
<div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-gray-400 text-sm text-center">Made with ❤️ for content creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;