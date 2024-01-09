import Card from "../../common/ui/card/Card";
import Players from "../lobby/Players";
import CurrentOther from "./CurrentOther";
// import CurrentPlayer from "./CurrentPlayer";

const GameScreen = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 max-w-5xl mx-auto space-y-4 md:space-y-0">
      <Card className="md:col-span-2 order-last md:order-first rounded-none drop-shadow-none md:border-r-2 border-dark">
        <Players />
      </Card>
      <Card className="md:col-span-5 relative rounded-none drop-shadow-none">
        <CurrentOther />
      </Card>
    </div>
  );
};

export default GameScreen;
