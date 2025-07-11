import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Clock, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CoachingCentersList = () => {
  const coachingCenters = [
    {
      id: 1,
      name: 'Allen Career Institute',
      city: 'Kota',
      address: 'Road No. 1, IPIA, Kota, Rajasthan',
      rating: 4.8,
      students: 15000,
      timings: '6:00 AM - 10:00 PM',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'FIITJEE',
      city: 'Delhi',
      address: 'Punjabi Bagh, New Delhi',
      rating: 4.7,
      students: 12000,
      timings: '7:00 AM - 9:00 PM',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Resonance',
      city: 'Kota',
      address: 'Commerce College Road, Kota, Rajasthan',
      rating: 4.9,
      students: 18000,
      timings: '6:30 AM - 9:30 PM',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      name: 'Aakash Institute',
      city: 'Mumbai',
      address: 'Andheri West, Mumbai, Maharashtra',
      rating: 4.6,
      students: 10000,
      timings: '7:30 AM - 8:30 PM',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      name: 'BYJU\'S Classes',
      city: 'Bangalore',
      address: 'Koramangala, Bangalore, Karnataka',
      rating: 4.5,
      students: 8000,
      timings: '8:00 AM - 8:00 PM',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      name: 'Narayana IIT Academy',
      city: 'Hyderabad',
      address: 'Ameerpet, Hyderabad, Telangana',
      rating: 4.4,
      students: 9000,
      timings: '6:00 AM - 9:00 PM',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Top Coaching Centers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your dream coaching and book a free cab ride to visit them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coachingCenters.map((center, index) => (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{center.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {center.name}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {center.address}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {center.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {center.timings}
                    </div>
                  </div>

                  <Link to="/book-ride">
                    <Button className="w-full mt-4">
                      <Car className="h-4 w-4 mr-2" />
                      Book Your Ride
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingCentersList;
