import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Download, Share, QrCode } from 'lucide-react';

const MyTickets = () => {
  const tickets = [
    {
      id: 1,
      eventTitle: "Summer Music Festival 2024",
      date: "July 15, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Central Park, New York",
      ticketType: "VIP",
      ticketNumber: "VIP-001234",
      price: 150,
      status: "confirmed",
      qrCode: "QR123456789"
    },
    {
      id: 2,
      eventTitle: "AI & Machine Learning Bootcamp",
      date: "August 10, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Hub, San Francisco",
      ticketType: "Standard",
      ticketNumber: "STD-005678",
      price: 299,
      status: "confirmed",
      qrCode: "QR987654321"
    },
    {
      id: 3,
      eventTitle: "Startup Founders Networking",
      date: "June 28, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Center, Austin",
      ticketType: "Standard",
      ticketNumber: "STD-009876",
      price: 45,
      status: "pending",
      qrCode: "QR567890123"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Tickets</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage all your event tickets in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <Card key={ticket.id} className="overflow-hidden relative">
              <div className={`absolute top-0 right-0 w-3 h-full ${getStatusColor(ticket.status)}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">
                      {ticket.eventTitle}
                    </CardTitle>
                    <Badge variant={ticket.status === 'confirmed' ? 'default' : 'secondary'}>
                      {ticket.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{ticket.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{ticket.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{ticket.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-sm font-medium">Ticket Type</p>
                      <p className="text-sm text-muted-foreground">{ticket.ticketType}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Price</p>
                      <p className="text-sm text-muted-foreground">${ticket.price}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground">Ticket Number</p>
                    <p className="text-sm font-mono">{ticket.ticketNumber}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <QrCode className="w-3 h-3 mr-1" />
                      QR
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Share className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {tickets.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground">
                <QrCode className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No tickets yet</h3>
                <p>Your purchased tickets will appear here</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyTickets;