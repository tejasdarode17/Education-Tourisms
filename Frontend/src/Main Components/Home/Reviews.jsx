import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Reviews = () => {
    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'JEE Aspirant',
            content: 'EducationTourisms changed my life! I can now attend the best coaching center in the city without worrying about transportation costs.',
            rating: 5,
            avatar: 'PS',
        },
        {
            name: 'Arjun Kumar',
            role: 'NEET Student',
            content: 'Safe, reliable, and completely free. The drivers are professional and the service is always on time. Highly recommended!',
            rating: 5,
            avatar: 'AK',
        },
        {
            name: 'Mrs. Gupta',
            role: 'Parent',
            content: 'As a parent, I feel secure knowing my daughter travels safely to her coaching center. Thank you EducationTourisms!',
            rating: 5,
            avatar: 'MG',
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Students & Parents Say
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Real experiences from our community
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative">
                                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                                <CardHeader>
                                    <div className="flex text-yellow-400 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-current" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews
