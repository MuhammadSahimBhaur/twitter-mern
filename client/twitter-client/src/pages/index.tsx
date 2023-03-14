import Register from "components/Register";
import Card from "components/Card";

export default function Home() {
  return (
    <div>
      <Card width={150} height={120}>
        <Register />
      </Card>
    </div>
  );
}
