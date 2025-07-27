import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, User, Phone, Mail, Calendar, Car, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';


export const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        phNumber: '',
        email: '',
        pickupLocation: '',
        date: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);



    async function handleSubmit(e) {

        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/v1/student/form", formData, {
                withCredentials: true
            })
            const data = response.data
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                        <Car className="h-6 w-6 mr-2 text-primary" />
                        Book Your Ride
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>

                            <div className="relative">
                                <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => { setFormData((prev) => ({ ...prev, fullname: e.target.value })) }}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                />
                            </div>

                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => { setFormData((prev) => ({ ...prev, phNumber: e.target.value })) }}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                />
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value })) }}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                />
                            </div>
                        </div>

                        {/* Trip Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-foreground">Trip Details</h3>

                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    placeholder="Pickup Location"
                                    value={formData.pickupLocation}
                                    onChange={(e) => { setFormData((prev) => ({ ...prev, pickupLocation: e.target.value })) }}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                />
                            </div>

                            {/* <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <select
                                    name="coachingCenter"
                                    value={formData.coachingCenter}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                >
                                    <option value="">Select Coaching Center</option>
                                    <option value="allen-kota">Allen Career Institute, Kota</option>
                                    <option value="fiitjee-delhi">FIITJEE, Delhi</option>
                                    <option value="resonance-kota">Resonance, Kota</option>
                                    <option value="aakash-mumbai">Aakash Institute, Mumbai</option>
                                    <option value="byju-bangalore">BYJU'S Classes, Bangalore</option>
                                </select>
                            </div> */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={(e) => { setFormData((prev) => ({ ...prev, date: e.target.value })) }}
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                    />
                                </div>

                                {/* <div className="relative">
                                    <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                    />
                                </div> */}
                            </div>

                            {/* <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="returnTrip"
                                    name="returnTrip"
                                    checked={formData.returnTrip}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-primary bg-background border-input rounded focus:ring-primary"
                                />
                                <label htmlFor="returnTrip" className="text-sm text-muted-foreground">
                                    Include return trip
                                </label>
                            </div> */}
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
                            ) : null}
                            {isSubmitting ? 'Booking...' : 'Book Free Ride'}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                            By booking, you agree to our terms of service and privacy policy.
                            This service is completely free for students.
                        </p>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export const BookingSteps = () => {
    const steps = [
        {
            icon: CheckCircle,
            title: 'Submit Your Request',
            description: 'Fill out the booking form with your details and preferred timing',
            color: 'text-green-600',
            bgColor: 'bg-green-100 dark:bg-green-900/20',
        },
        {
            icon: Clock,
            title: 'Get Confirmation',
            description: 'We\'ll confirm your booking within 30 minutes via call or SMS',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100 dark:bg-blue-900/20',
        },
        {
            icon: Car,
            title: 'Driver Assignment',
            description: 'A verified driver will be assigned with vehicle details shared',
            color: 'text-purple-600',
            bgColor: 'bg-purple-100 dark:bg-purple-900/20',
        },
        {
            icon: MapPin,
            title: 'Safe Pickup',
            description: 'Driver arrives on time at your location for a comfortable ride',
            color: 'text-orange-600',
            bgColor: 'bg-orange-100 dark:bg-orange-900/20',
        },
    ];

    const benefits = [
        '100% Free Service',
        'Background Verified Drivers',
        'GPS Tracking',
        'Insurance Coverage',
        '24/7 Support',
        'Return Trip Included',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
            {/* How It Works */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-4"
                            >
                                <div className={`${step.bgColor} p-2 rounded-lg flex-shrink-0`}>
                                    <step.icon className={`h-5 w-5 ${step.color}`} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center space-x-2 text-sm"
                            >
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                    <div className="text-center">
                        <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                            Our support team is available 24/7
                        </p>
                        <div className="space-y-1 text-sm">
                            <p className="text-primary font-medium">📞 +91 9876543210</p>
                            <p className="text-primary font-medium">📧 support@educationtourisms.com</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};