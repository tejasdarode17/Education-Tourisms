import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully! We will get back to you soon.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9876543210',
      description: 'Available 24/7 for emergencies',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@educationtourisms.com',
      description: 'We respond within 2 hours',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra, India',
      description: 'Headquarters location',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Available',
      description: 'Round the clock assistance',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
    },
  ];

  const faqs = [
    {
      question: 'Is the transportation service really free?',
      answer: 'Yes, our transportation service is 100% free for students. There are no hidden charges or fees.',
    },
    {
      question: 'How do I book a ride?',
      answer: 'You can book a ride through our website by filling out the booking form or by calling our support number.',
    },
    {
      question: 'What safety measures do you have?',
      answer: 'All our drivers are background verified, vehicles are insured, and we provide GPS tracking for all rides.',
    },
    {
      question: 'Which cities do you serve?',
      answer: 'We currently serve 25+ cities across India and are expanding rapidly. Check our coaching centers page for the latest list.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Need help? We're here to support you on your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader>
                    <div className={`${info.bgColor} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full py-3 text-lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground mb-8">
                  Quick answers to common questions about our service
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Emergency Contact
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent matters or emergencies during rides, contact us immediately:
                  </p>
                  <div className="space-y-2">
                    <p className="text-primary font-semibold">📞 Emergency Hotline: +91 9876543210</p>
                    <p className="text-primary font-semibold">📧 Emergency Email: emergency@educationtourisms.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;