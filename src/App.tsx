import ClientForm from "./components/client-form";
import ClientList from "./components/client-list";
import Headline from "./components/headline";
import { useState } from "react";

export type Client = {
  name: string;
  hourlyRate: number;
};

// This is the default client state, it is empty by default, in a future version this could read its date from a database
const defaultClients: Client[] = [];

function App() {
  const [clients, setClients] = useState(defaultClients);
  const [runningTimer, setRunningTimer] = useState<string | undefined>();

  const startTimer = (clientName: string): void => {
    setRunningTimer(clientName);
  };

  const stopTimer = (): void => {
    setRunningTimer(undefined);
  };

  const onClientClick = (client: string) => {
    const isTimerRunning = client === runningTimer;
    if (isTimerRunning) {
      stopTimer();
    } else {
      startTimer(client);
    }
  };

  return (
    <div className="p-1">
      <div className="w-[300px]">
        <ClientForm
          onSubmit={(newClient) => {
            // when the ClientForm sends us a new client via the `onSubmit` callback
            // we will add it to the list of clients
            setClients([...clients, newClient]);
          }}
        />
      </div>
      <Headline>Client</Headline>
      <ClientList
        clients={clients}
        runningTimer={runningTimer}
        onClick={onClientClick}
      />
    </div>
  );
}

export default App;
