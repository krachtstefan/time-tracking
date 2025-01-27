import { Client } from "../../App";

type ClientFormProps = {
  clients: Client[];
  runningTimer?: string;
  onClick: (client: string) => void;
};

function ClientList({ clients, runningTimer, onClick }: ClientFormProps) {
  return (
    <ul>
      {clients.map((client) => {
        const isTimerRunning = client.name === runningTimer;
        return (
          <li key={client.name}>
            {client.name} <span>{client.hourlyRate} / hour</span>
            {!isTimerRunning ? (
              <button type="button" onClick={() => onClick(client.name)}>
                ▶️
              </button>
            ) : (
              <button type="button" onClick={() => onClick(client.name)}>
                ⏹️
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ClientList;
