import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { number: '500+', label: 'Students Served', color: 'text-blue-600' },
        { number: '50+', label: 'Coaching Centers', color: 'text-green-600' },
        { number: '25+', label: 'Cities Covered', color: 'text-purple-600' },
        { number: '100%', label: 'Free Service', color: 'text-orange-600' },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <motion.div
                                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}
                                whileHover={{ scale: 1.1 }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-muted-foreground font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;