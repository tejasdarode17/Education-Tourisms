import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, User, Phone, Mail, Calendar, Car, CheckCircle, School2, Loader2, School, ChevronsUpDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';


export const BookingForm = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        phNumber: '',
        email: '',
        school: "",
        coachings: [],
        pickupLocation: '',
        date: '',
    });

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const response = await axios.post("http://localhost:3000/api/v1/student/form", formData, {
                withCredentials: true
            });

            const data = response.data;
            setFormData({
                fullName: '',
                phNumber: '',
                email: '',
                school: '',
                coachings: [],
                pickupLocation: '',
                date: '',
            });
            toast.success(data.message);
        } catch (error) {
            console.log(error);
            setError(error?.response?.data?.message)
        } finally {
            setIsSubmitting(false);
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
                                    value={formData.fullName}
                                    onChange={(e) => { setFormData((prev) => ({ ...prev, fullName: e.target.value })) }}
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
                                    value={formData.phNumber}
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
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                />
                            </div>

                            <div className="relative">
                                <School2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="School Name"
                                    value={formData.school}
                                    onChange={(e) => { setFormData((prev) => ({ ...prev, school: e.target.value })) }}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                                />
                            </div>

                            {/* multi select  */}
                            <MultiSelect formData={formData} setFormData={setFormData} ></MultiSelect>


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
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="rounded bg-destructive/10 px-3 py-2 text-center text-sm text-destructive">
                                {error}
                            </p>
                        )}

                        <Button
                            type="submit"
                            className="w-full py-3 text-lg cursor-pointer"
                            disabled={isSubmitting}
                        >
                            {
                                isSubmitting ? <Loader2>Booking</Loader2> : "Book free Ride"
                            }
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




const MultiSelect = ({ formData, setFormData }) => {

    const [open, setOpen] = useState(false);
    const [customCoaching, setCustomCoaching] = useState("");

    const coachingOptions = [
        "Sri Chaitanya Academy Nagpur",
        "Aakash Institute Nagpur",
        "NARAYANA IIT-JEE/NEET/FOUNDATION - Nagpur",
        "Allen Career Institute Nagpur",
        "Resonance Nagpur",
        "IIT Point Nagpur",
    ];


    return (
        <div className="relative">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full pl-3 pr-4 py-3 flex justify-between items-center border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background"
                    >
                        <div className="flex items-center gap-2">
                            <School className="h-5 w-5 text-muted-foreground" />
                            {formData.coachings.length > 0
                                ? `${formData.coachings.length} selected`
                                : "Select Coachings"}
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput placeholder="Search coaching..." />
                        <CommandList>
                            <CommandEmpty>No coaching found.</CommandEmpty>
                            <CommandGroup>
                                {coachingOptions.map((coaching) => (
                                    <CommandItem
                                        key={coaching}
                                        onSelect={() => {
                                            setFormData(prev => ({
                                                ...prev,
                                                coachings: prev.coachings.includes(coaching)
                                                    ? prev.coachings.filter(c => c !== coaching)
                                                    : [...prev.coachings, coaching]
                                            }));
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                formData.coachings.includes(coaching)
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <Check className="h-4 w-4" />
                                        </div>
                                        {coaching}
                                    </CommandItem>
                                ))}

                                {/* Custom Coaching Input */}
                                <div className="p-2 flex gap-2">
                                    <Input
                                        placeholder="Add any other coaching"
                                        value={customCoaching}
                                        onChange={(e) => setCustomCoaching(e.target.value)}
                                        className="w-full outline-none"
                                    />
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            const trimmed = customCoaching.trim();
                                            if (trimmed && !formData.coachings.includes(trimmed)) {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    coachings: [...prev.coachings, trimmed]
                                                }));
                                            }
                                            setCustomCoaching(""); // clear input
                                        }}
                                    >
                                        Add
                                    </Button>
                                </div>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}


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
                <CardContent className="">
                    <div className="text-center">
                        <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                            Our support team is available 24/7
                        </p>
                        <div className="space-y-1 text-sm">
                            <p className="text-primary font-medium">📞 +91 7776877323</p>
                            <p className="text-primary font-medium">📧 admin@educationtourisms.com</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};