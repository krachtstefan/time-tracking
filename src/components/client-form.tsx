import { Client } from "../App";
import { useState } from "react";

type ClientFormProps = {
  onSubmit: (client: Client) => void;
};

function ClientForm({ onSubmit }: ClientFormProps) {
  const [clientName, setClientName] = useState("");
  const [hourlyRate, setHourlyRate] = useState(0);

  return (
    <form
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
      <label>
        Name:
        <input
          type="text"
          name="name"
          className="border"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </label>
      <label>
        Hourly Rate:
        <input
          type="number"
          name="hourlyRate"
          className="border"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.valueAsNumber)}
        />
      </label>
      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientForm;
