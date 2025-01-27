import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Client } from "../App";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

type ClientFormProps = {
  onSubmit: (client: Client) => void;
};

function ClientForm({ onSubmit }: ClientFormProps) {
  const [clientName, setClientName] = useState("");
  const [hourlyRate, setHourlyRate] = useState(0);

  return (
    <Card className="p-5">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          /**
           * when the form wil be submited (via enter key or clicking submit button)
           * we will report the state to the parent component via the `onSubmit` callback
           */
          onSubmit({ name: clientName, hourlyRate });
          setClientName("");
          setHourlyRate(0);
        }}
      >
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            className="border"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </Label>
        <Label>
          Hourly Rate:
          <Input
            type="number"
            name="hourlyRate"
            className="border"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.valueAsNumber)}
          />
        </Label>

        <Button type="submit" variant="default">
          Add Client
        </Button>
      </form>
    </Card>
  );
}

export default ClientForm;
