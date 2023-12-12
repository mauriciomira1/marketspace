import { Switch } from "native-base";
import { useState } from "react";

const SwitchComponent = () => {
  const [AcceptExchange, setAcceptExchange] = useState(false);

  return (
    <Switch
      size="lg"
      m={0}
      onTrackColor="blue.500"
      onThumbColor="gray.600"
      offThumbColor="gray.600"
      value={AcceptExchange}
      onToggle={() => {
        setAcceptExchange(!AcceptExchange);
      }}
    />
  );
};

export default SwitchComponent;
