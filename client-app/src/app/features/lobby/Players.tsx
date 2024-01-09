import LobbyPlayer from "./LobbyPlayer";

const Players = () => {
  return (
    <div className="">
      <p className="font-medium text-center mt-1 hidden md:block">
        Oyuncular<span className="font-semibold ml-2">9/10</span>
      </p>
      <hr className="border-dark mt-1" />
      <ul className="overflow-auto md:max-h-[400px] max-w-screen-md flex md:block">
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
        <LobbyPlayer />
      </ul>
    </div>
  );
};

export default Players;
