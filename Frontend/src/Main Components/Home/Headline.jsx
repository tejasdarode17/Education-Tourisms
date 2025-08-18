import { motion } from 'framer-motion'
import { Car, School, Building2, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const Headline = () => {
    return (
        <section className="bg-white dark:bg-background py-14 px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">

                {/* Main Heading (Hindi) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-16"
                >
                    पढाई की राह, अब मुफ़्त की सवारी के साथ
                </motion.h1>

                {/* Subheading (English) */}
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Free Travelling for student & parents to explore and find the best coaching institutes <br className="hidden sm:block" />
                    for JEE/NEET Across Nagpur 🎓
                </p>

                {/* CTA Button */}
                <Button size="lg" asChild className="text-base sm:text-lg mb-12 w-full sm:w-auto">
                    <Link to="/book-ride">Book Your Free Ride 🚗</Link>
                </Button>
            </div>

            {/* How It Works Heading */}
            <div className="text-center mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">How It Works</h2>
            </div>

            {/* How It Works Steps */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center mt-6 px-2">
                {/* Step 1 */}
                <Card className="hover:shadow-xl transition">
                    <CardContent className="py-8 sm:py-10">
                        <User className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-primary mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Register as Student</h3>
                        <p className="text-muted-foreground text-sm">
                            Sign up and verify your student details
                        </p>
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="hover:shadow-xl transition">
                    <CardContent className="py-8 sm:py-10">
                        <Building2 className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-primary mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Choose Coaching</h3>
                        <p className="text-muted-foreground text-sm">
                            Select the institute you want to visit
                        </p>
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="hover:shadow-xl transition">
                    <CardContent className="py-8 sm:py-10">
                        <Car className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-primary mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Get Free Cab</h3>
                        <p className="text-muted-foreground text-sm">
                            We send a cab to your location, no payment needed
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-12 text-xs sm:text-sm text-muted-foreground">
                © 2024 EducationTourisms. All rights reserved.
            </div>
        </section>

    )
}

export default Headline
