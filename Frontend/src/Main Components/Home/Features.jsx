import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Shield, Heart, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Serving 25+ cities with routes to all major coaching centers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Clock,
      title: 'Always On Time',
      description: 'Punctual service ensuring you never miss a class',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Background-checked drivers, GPS tracking, and full insurance',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      icon: Heart,
      title: '100% Free',
      description: 'No hidden costs, no fees - completely free for students',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a community of students supporting each other',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/20',
    },
    {
      icon: Star,
      title: 'Highly Rated',
      description: '4.9/5 rating from thousands of satisfied students',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose EducationTourisms?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to making quality education accessible to every student
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardHeader>
                  <div className={`${feature.bgColor} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;