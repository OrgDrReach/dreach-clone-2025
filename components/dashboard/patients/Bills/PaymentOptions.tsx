"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PaymentOptions: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    // Implement payment processing logic here
    console.log(`Processing payment of $${amount} via ${paymentMethod}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Options</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Select onValueChange={setPaymentMethod}>
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="credit">Credit Card</SelectItem>
              <SelectItem value="debit">Debit Card</SelectItem>
              <SelectItem value="bank">Bank Transfer</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={handlePayment} disabled={!paymentMethod || !amount}>
            Process Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentOptions;
