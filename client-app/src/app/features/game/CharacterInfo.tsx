import Card from "../../common/ui/card/Card";
import CustomTextInput from "../../common/ui/form-elements/CustomTextInput";

const CharacterInfo = () => {
  return (
    <div className="max-w-xl mx-auto text-center">
      <Card className="space-y-2">
        <div className="py-4">
          <p className="font-bold text-2xl">Bir karakter ismi gir</p>
          <form action="" className="flex flex-col mt-4 space-y-4 mx-2 max-w-md mx-auto">
            <CustomTextInput id="karakter" placeholder="..." />
            <input
              type="submit"
              value="Gönder"
              className="bg-primary mt-4 py-2 rounded-xl cursor-pointer hover:bg-secondary uppercase font-semibold"
            />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default CharacterInfo;
