import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  CheckCircle, 
  Mail,
  Shield
} from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      title: 'Free Tier',
      users: 'up to 1,000 users',
      price: '€ -',
      description: '(conditions apply)',
      features: [
        'Up to 1,000 registered users',
        'Basic gamification features',
        'Limited number of elements',
        'No financial commitment'
      ],
      popular: false,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      title: 'Growth',
      users: 'up to 25,000 users',
      price: '€ 1000',
      description: 'per calendar month (fixed rate)',
      features: [
        'Up to 25,000 active users',
        'Full gamification features',
        'Unlimited elements',
        'Priority support',
        'Advanced analytics'
      ],
      popular: true,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      title: 'Scale',
      users: 'up to 500,000 users',
      price: '€ 0.02',
      description: 'per active user per calendar month (applicable to 25,001 users and above)',
      features: [
        'Up to 500,000 active users',
        'Enterprise features',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting'
      ],
      popular: false,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Enterprise',
      users: 'above 500,000 users',
      price: '€ 0.01',
      description: 'per active user per calendar month (applicable to 500,001 users and above)',
      features: [
        'Unlimited active users',
        'Custom enterprise solutions',
        'White-label options',
        '24/7 dedicated support',
        'Custom SLA agreements'
      ],
      popular: false,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our pricing is based on the number of <strong>monthly active users</strong>, so you only pay for what you actually use. 
            Plus, we offer a no-obligation free tier, so you can get up and running without any financial strings attached 
            and see if GameLayer is the perfect fit for your project!
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${tier.popular ? 'ring-2 ring-primary-500' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.users}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  tier.popular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {tier.title === 'Free Tier' ? 'Get Started Free' : 'Choose Plan'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Tier Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Tier Details</h2>
            <p className="text-gray-600 leading-relaxed">
              The free tier lets you have up to 1,000 registered users. Once you hit that 1,000-user milestone—no matter 
              how many are active—you'll need to upgrade to a paid account to keep adding new users. There are also some 
              limits on the number of elements you can create under the free tier. For more details, check out the Terms of Service.
            </p>
          </div>
        </motion.div>

        {/* Service Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-16"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">Service Availability</h2>
            </div>
            <div className="text-4xl font-bold mb-2">99.95%</div>
            <p className="text-green-100 mb-4">(per annum)</p>
            <p className="text-green-100 max-w-2xl mx-auto">
              While we can't control every outage or unforeseen event, sometimes the service might need a quick break 
              for scheduled maintenance or upgrades. When that happens, we'll do our best to keep downtime to a minimum 
              and give you a heads-up in advance. Thanks for understanding!
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Get Your Free Account
              </h3>
              <p className="text-primary-100 text-lg mb-6">
                What have you got to lose? Just a heads-up: <strong>we only accept requests from validated company email accounts</strong> (don't worry, most accounts get activated within 12 hours). We can't wait to welcome you aboard!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your company email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send
                </button>
              </div>
              
              <p className="text-primary-200 text-sm mt-4">
                Please check our Terms of Service for any limits placed on free accounts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing; 