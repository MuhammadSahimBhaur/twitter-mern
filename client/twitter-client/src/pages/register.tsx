// if token exists attempt to load home page using that
// define a context here
import { createContext } from "react";
import Register from "components/Register";
import Card from "components/Card";

export default function register() {
  const isAuthorized = createContext(false);

  return (
    <div style={{}}>
      <Card width={150} height={120}>
        <Register />
      </Card>
    </div>
  );
}
