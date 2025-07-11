import React from 'react';
import { motion } from 'framer-motion';
import { BookingForm, BookingSteps } from './BookingFrom';

const BookingPage = () => {
    return (
        <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Book Your Free Ride
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get safe, reliable, and completely free transportation to your coaching center
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <BookingForm></BookingForm>
                    <BookingSteps></BookingSteps>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;