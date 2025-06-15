'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Smartphone } from 'lucide-react';

interface PaymentMethodSelectionProps {
  onMethodSelected: (method: 'stripe' | 'mpesa') => void;
  totalAmount: number;
  onCancel: () => void;
}

const PaymentMethodSelection: React.FC<PaymentMethodSelectionProps> = ({
  onMethodSelected,
  totalAmount,
  onCancel
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'mpesa' | null>(null);

  const handleProceed = () => {
    if (selectedMethod) {
      onMethodSelected(selectedMethod);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Choose Payment Method</CardTitle>
        <p className="text-center text-muted-foreground">
          Select how you'd like to pay for your tickets
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center mb-6">
          <p className="text-2xl font-bold">Total: ${totalAmount}</p>
        </div>

        {/* Stripe Payment Option */}
        <div 
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            selectedMethod === 'stripe' 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50'
          }`}
          onClick={() => setSelectedMethod('stripe')}
        >
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold">Credit/Debit Card</h3>
              <p className="text-sm text-muted-foreground">Pay securely with Stripe</p>
            </div>
            <Badge variant="secondary">Visa, Mastercard</Badge>
          </div>
        </div>

        {/* MPESA Payment Option */}
        <div 
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            selectedMethod === 'mpesa' 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50'
          }`}
          onClick={() => setSelectedMethod('mpesa')}
        >
          <div className="flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-green-600" />
            <div className="flex-1">
              <h3 className="font-semibold">M-PESA</h3>
              <p className="text-sm text-muted-foreground">Pay with your mobile money</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Mobile</Badge>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
          <Button 
            onClick={handleProceed} 
            disabled={!selectedMethod}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            Proceed to Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodSelection;