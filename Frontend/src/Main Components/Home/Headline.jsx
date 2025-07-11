import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Car, Star, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Headline = () => {
    return (
        <div>
            <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                <Car className="h-4 w-4 mr-2" />
                                100% Free Transportation Service
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                                Your Dream
                                <span className="text-primary block">Coaching Center</span>
                                is Just a Ride Away
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Free, safe, and reliable transportation to coaching centers across India.
                                Because your education journey shouldn't be limited by distance or cost.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button asChild size="lg" className="text-lg group">
                                    <Link to="/book-ride">
                                        Book Your Free Ride
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg group">
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch How It Works
                                </Button>
                            </div>

                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <div className="flex -space-x-2 mr-3">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-background"></div>
                                        <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-background"></div>
                                        <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-background"></div>
                                    </div>
                                    <span>500+ Happy Students</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                    <span>4.9/5 Rating</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                                <CardContent className="p-8">
                                    <div className="aspect-square bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center mb-6">
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Car className="h-24 w-24 text-primary" />
                                        </motion.div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Safe & Reliable</h3>
                                        <p className="text-muted-foreground">Professional drivers, GPS tracking, and full insurance coverage</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                            >
                                100% Free
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                            >
                                24/7 Available
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Headline
