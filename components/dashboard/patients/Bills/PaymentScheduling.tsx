"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PaymentScheduling: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSchedule = () => {
    // Implement payment scheduling logic here
    console.log(`Scheduled payment of $${amount} for ${date}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Payment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button onClick={handleSchedule} disabled={!amount || !date}>
            Schedule Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentScheduling;