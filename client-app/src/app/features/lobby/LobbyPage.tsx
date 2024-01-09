import Card from "../../common/ui/card/Card";
import Players from "./Players";
import Settings from "./Settings";

const LobbyPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 max-w-3xl mx-auto md:space-x-4 space-y-4 md:space-y-0">
      <Card className="md:col-span-2">
        <Players />
      </Card>
      <Card className="md:col-span-4 relative">
        <Settings />
      </Card>
    </div>
  );
};

export default LobbyPage;
