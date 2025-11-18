import React from "react";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🔐",
      title: "Secure Authentication",
      description:
        "Military-grade encryption and secure password hashing to protect your data",
      details: [
        "256-bit encryption",
        "BCrypt password hashing",
        "Secure session management",
      ],
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Optimized performance with instant response times and minimal latency",
      details: [
        "<100ms response time",
        "Optimized database queries",
        "CDN accelerated",
      ],
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Seamless experience across all devices with responsive design",
      details: [
        "Mobile-first design",
        "Cross-browser compatible",
        "Progressive Web App",
      ],
    },
    {
      icon: "🛡️",
      title: "Data Protection",
      description:
        "Advanced security measures to keep your information safe and private",
      details: [
        "GDPR compliant",
        "Data encryption at rest",
        "Regular security audits",
      ],
    },
    {
      icon: "🔧",
      title: "Easy Integration",
      description: "Simple API integration with comprehensive documentation",
      details: ["RESTful APIs", "Detailed documentation", "SDK support"],
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Monitor your application with real-time insights and analytics",
      details: [
        "Live user metrics",
        "Performance monitoring",
        "Custom dashboards",
      ],
    },
  ];

  const techStack = [
    { name: "React.js", description: "Frontend framework for modern UI" },
    { name: "Node.js", description: "Backend runtime environment" },
    {
      name: "MongoDB",
      description: "NoSQL database for flexible data storage",
    },
    { name: "Express.js", description: "Web application framework" },
    { name: "JWT", description: "Secure token-based authentication" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-pink-500">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive set of features that make our
            authentication system secure, reliable, and user-friendly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Modern{" "}
              <span className="text-pink-500">Technology</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our authentication system leverages cutting-edge technologies to
              deliver exceptional performance and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 hover:border-pink-200 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-pink-100 mb-6 leading-relaxed">
              We take security seriously with multiple layers of protection to
              ensure your data remains safe and confidential.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pink-500 text-sm">✓</span>
                </div>
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pink-500 text-sm">✓</span>
                </div>
                <span>Regular security updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pink-500 text-sm">✓</span>
                </div>
                <span>DDoS protection</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience blazing-fast performance with our optimized
              infrastructure and efficient codebase.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Response Time</span>
                <span className="font-semibold text-pink-500">{"<"} 100ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Uptime</span>
                <span className="font-semibold text-pink-500">99.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Users Supported</span>
                <span className="font-semibold text-pink-500">10,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our authentication system. Create
            your account today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white border border-gray-300 text-gray-700 hover:border-pink-400 hover:text-pink-500 px-8 py-3 rounded-lg font-semibold transition duration-300 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
