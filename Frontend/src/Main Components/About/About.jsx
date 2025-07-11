import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: 'Our Mission',
            description: 'To eliminate transportation barriers and ensure every student can access quality coaching and educational resources, regardless of their financial situation.',
            color: 'text-red-600',
            bgColor: 'bg-red-100 dark:bg-red-900/20',
        },
        {
            icon: Users,
            title: 'Our Vision',
            description: 'Creating a world where distance and financial constraints never limit a student\'s educational aspirations and dreams.',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100 dark:bg-blue-900/20',
        },
        {
            icon: Shield,
            title: 'Our Values',
            description: 'Safety, reliability, inclusivity, and transparency drive every decision we make in serving our student community.',
            color: 'text-green-600',
            bgColor: 'bg-green-100 dark:bg-green-900/20',
        },
    ];

    const achievements = [
        { number: '500+', label: 'Students Served', icon: Users },
        { number: '50+', label: 'Coaching Centers', icon: Target },
        { number: '25+', label: 'Cities Covered', icon: Globe },
        { number: '4.9/5', label: 'Average Rating', icon: Award },
    ];

    const team = [
        {
            name: 'Mr x',
            role: 'Founder & CEO',
            description: 'Former IIT graduate passionate about making education accessible to all students.',
            // image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
            image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        },
        {
            name: 'Mr y',
            role: 'Head of Operations',
            description: 'Expert in logistics and operations with 10+ years of experience in transportation.',
            // image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
            image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'

        },
        {
            name: 'Mr z',
            role: 'Technology Lead',
            description: 'Tech enthusiast building scalable solutions for student transportation management.',
            // image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
            image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'

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
                            Bridging Education &
                            <span className="text-primary block">Accessibility</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            We believe every student deserves access to quality education, regardless of their location or financial situation.
                            Our mission is to make coaching centers accessible to all through free, safe, and reliable transportation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
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
                            What Drives Us
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Our core principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full">
                                    <CardHeader>
                                        <div className={`${value.bgColor} p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                                            <value.icon className={`h-8 w-8 ${value.color}`} />
                                        </div>
                                        <CardTitle className="text-xl">{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
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
                            Our Impact
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Numbers that reflect our commitment to student success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <achievement.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                                    {achievement.number}
                                </div>
                                <div className="text-muted-foreground font-medium">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
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
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Passionate individuals working to make education accessible
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                    <CardContent className="p-6 text-center">
                                        <div className="relative mb-6">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                                        <p className="text-primary font-medium mb-4">{member.role}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-muted/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                            Our Story
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="text-lg leading-relaxed mb-6">
                                EducationTourisms was born from a simple observation: talented students were missing out on quality coaching
                                simply because they couldn't afford transportation costs. In 2023, our founder Rajesh Kumar, an IIT graduate,
                                witnessed bright students in his hometown struggling to attend coaching classes due to distance and cost barriers.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                What started as a small initiative to help a few local students has now grown into a nationwide movement.
                                We've partnered with coaching centers, recruited verified drivers, and built a technology platform that
                                makes free, safe transportation accessible to students across India.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Today, we're proud to serve over 500 students across 25+ cities, helping them reach their educational goals
                                without financial barriers. Our journey has just begun, and we're committed to expanding our reach to every
                                corner of India where students need our support.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;