import Card from "react-bootstrap/Card";
import { Stack } from "react-bootstrap";
const Asset = ({ asset, effect, amount, production }) => {
  var image;
  var effected;
  if (asset && effect) {
    image = (
      <img
        src={require(`../assets/${asset}.png`)}
        width="30"
        height="30"
        alt=""
      />
    );
    effected = (
      <img
        src={require(`../assets/${effect}.png`)}
        width="30"
        height="30"
        alt=""
      />
    );
  } else {
    image = "No asset";
  }

  return (
    <div>
      <Card style={{ backgroundColor: "#444444" }}>
        <Card.Body>
          <Card.Title style={{ color: "#ffffff" }}>
            {asset.charAt(0).toUpperCase() + asset.slice(1)}
          </Card.Title>
          <Stack direction="horizontal" gap={5}>
            {image}
            {effected}
            <h3 className="text-on-image">{amount}</h3>
            {production ? <h3 className="text-on-image">tuotanto</h3> : ""}
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Asset;
