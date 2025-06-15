'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Smartphone, Ticket, Plus, Minus } from 'lucide-react';
import { useBuyTicket } from '@/hooks/useEvents';
import { BuyTicketInput } from '@/types/database';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface QuickBuyTicketProps {
  eventId: number;
  regularPrice: number;
  vipPrice: number;
  eventTitle: string;
}

export const QuickBuyTicket: React.FC<QuickBuyTicketProps> = ({
  eventId,
  regularPrice,
  vipPrice,
  eventTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ticketType, setTicketType] = useState<'standard' | 'vip'>('standard');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'mpesa'>('stripe');
  
  const { mutate: buyTicket, isPending } = useBuyTicket();

  const currentPrice = ticketType === 'vip' ? vipPrice : regularPrice;
  const totalPrice = currentPrice * quantity;

  const handleBuyTicket = () => {
    const ticketData: BuyTicketInput = {
      event_id: eventId,
      ticket_type: ticketType,
      payment_method: paymentMethod,
      quantity,
    };

    const promise = new Promise<void>((resolve, reject) => {
      buyTicket(ticketData, {
        onSuccess: () => {
          setIsOpen(false);
          resolve();
        },
        onError: (error: unknown) => {
          reject(error);
        },
      });
    });

    toast.promise(promise, {
      loading: 'Processing your purchase...',
      success: () => {
        return `You've successfully purchased ${quantity} ${ticketType} ticket(s) for ${eventTitle}`;
      },
      error: 'There was an error processing your ticket purchase. Please try again.',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Ticket className="w-4 h-4 mr-2" />
          Quick Buy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Quick Ticket Purchase</DialogTitle>
          <DialogDescription>
            Buy tickets for {eventTitle}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Ticket Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Ticket Type</label>
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  ticketType === 'standard' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setTicketType('standard')}
              >
                <div className="text-center">
                  <div className="font-semibold">Standard</div>
                  <div className="text-2xl font-bold text-primary">${regularPrice}</div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  ticketType === 'vip' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setTicketType('vip')}
              >
                <div className="text-center">
                  <div className="font-semibold">VIP</div>
                  <div className="text-2xl font-bold text-yellow-600">${vipPrice}</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Quantity</label>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-xl font-bold w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                disabled={quantity >= 10}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Payment Method</label>
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  paymentMethod === 'stripe' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setPaymentMethod('stripe')}
              >
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Card</div>
                    <Badge variant="secondary" className="text-xs">Stripe</Badge>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  paymentMethod === 'mpesa' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setPaymentMethod('mpesa')}
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold">M-PESA</div>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Mobile</Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Total and Buy Button */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-primary">${totalPrice}</span>
            </div>
            
            <Button 
              onClick={handleBuyTicket}
              disabled={isPending}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isPending ? 'Processing...' : `Buy ${quantity} Ticket${quantity > 1 ? 's' : ''}`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};