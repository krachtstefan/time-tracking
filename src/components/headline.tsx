import { PropsWithChildren } from "react";

function Headline({ children }: PropsWithChildren) {
  return <span className="text-3xl">{children}</span>;
}

export default Headline;
