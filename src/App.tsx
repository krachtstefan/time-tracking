import ClientForm from "./components/client-form";
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

  return (
    <div>
      <ClientForm
        onSubmit={(newClient) => {
          // when the ClientForm sends us a new client via the `onSubmit` callback
          // we will add it to the list of clients
          setClients([...clients, newClient]);
        }}
      />
      <h2>Clients</h2>
      <ul>
        {clients.map((client) => {
          const isTimerRunning = client.name === runningTimer;
          return (
            <li key={client.name}>
              {client.name} <span>{client.hourlyRate} / hour</span>
              {!isTimerRunning ? (
                <button type="button" onClick={() => startTimer(client.name)}>
                  ▶️
                </button>
              ) : (
                <button type="button" onClick={() => stopTimer()}>
                  ⏹️
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
