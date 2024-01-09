import Avatar from "../../common/ui/avatar/Avatar";
import CustomTextInput from "../../common/ui/form-elements/CustomTextInput";

const CurrentPlayer = () => {
  return (
    <div className="text-center">
      <div>
        <Avatar width={150} height={150} />
        <p className="text-2xl truncate my-1">Sen</p>
        <form className="flex flex-col max-w-sm mx-auto">
          <CustomTextInput id="guess" placeholder="Tahminini gir" />
          <input
            type="submit"
            value="Tahmin"
            className="bg-primary mt-4 py-2 rounded-xl cursor-pointer hover:bg-secondary uppercase font-semibold"
          />
        </form>
      </div>
      <div className="mt-10">
        <p className="text-4xl text-black">1:37</p>
      </div>
    </div>
  );
};

export default CurrentPlayer;
