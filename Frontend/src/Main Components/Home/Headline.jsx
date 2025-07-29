import { motion } from 'framer-motion'
import { Car, School, Building2, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const Headline = () => {
    return (
        <section className="bg-white dark:bg-background py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
                {/* Logo & Tagline */}
                <div className="flex justify-center items-center mb-4">
                    <img src="/logo.jpg" alt="EducationTourisms" className="h-8 mr-2" />
                    <span className="font-semibold text-lg">EducationTourisms</span>
                </div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 mt-5"
                >
                    Free Admission Guidance & <br />
                    Travel Support for JEE/NEET Aspirants 🎓
                </motion.h1>

                {/* Subheading */}
                <p className="text-muted-foreground mb-6 text-lg">
                    We help students reach coaching centers with free cab rides.
                </p>

                {/* CTA Button */}
                <Button size="lg" asChild className="text-lg mb-12">
                    <Link to="/book-ride">Book Your Free Ride 🚗 </Link>
                </Button>
            </div>

            {/* How It Works Heading */}
            <div className="text-center mt-8 mb-4">
                <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
            </div>

            {/* How It Works Steps */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-6 px-4">
                {/* Step 1 */}
                <Card className="hover:shadow-xl transition">
                    <CardContent className="py-10">
                        <User className="mx-auto h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">1. Register as Student</h3>
                        <p className="text-muted-foreground text-sm">
                            Sign up and verify your student details
                        </p>
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="hover:shadow-xl transition">
                    <CardContent className="py-10">
                        <Building2 className="mx-auto h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">2. Choose Coaching</h3>
                        <p className="text-muted-foreground text-sm">
                            Select the institute you want to visit
                        </p>
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="hover:shadow-xl transition">
                    <CardContent className="py-10">
                        <Car className="mx-auto h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">3. Get Free Cab</h3>
                        <p className="text-muted-foreground text-sm">
                            We send a cab to your location, no payment needed
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-12 text-sm text-muted-foreground">
                © 2024 EducationTourisms. All rights reserved.
            </div>
        </section>
    )
}

export default Headline
