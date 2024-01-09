import Avatar from "../../common/ui/avatar/Avatar";

const LobbyPlayer = () => {
  return (
    <li className="flex flex-col md:flex-row items-center text-center min-w-20 mx-2">
      <div>
        <Avatar width={60} height={60} />
      </div>
      <span className="font-semibold md:ml-2 md:mt-4 truncate w-full">Coolnickname2411263</span>
    </li>
  );
};

export default LobbyPlayer;
