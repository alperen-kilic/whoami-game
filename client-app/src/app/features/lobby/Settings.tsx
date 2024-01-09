import { FaCopy } from "react-icons/fa";
import CustomSelect from "../../common/ui/form-elements/CustomSelect";

const timeOptions = [
  { value: 1, label: "1 dakika" },
  { value: 2, label: "2 dakika" },
  { value: 3, label: "3 dakika" },
  { value: 4, label: "4 dakika" },
  { value: 5, label: "5 dakika" },
];

const randomnessOptions = [
  { value: true, label: "Rastgele" },
  { value: false, label: "Biz Seçelim" },
];

const Settings = () => {
  return (
    <div className="relative">
      <h3 className="text-center text-dark font-semibold text-3xl mt-2">AYARLAR</h3>
      <form className="flex flex-col mt-4 space-y-4 mx-2">
        <div className="flex items-center">
          <span className="mr-2 font-medium w-1/2">Tur başına süre:</span>
          <CustomSelect options={timeOptions} />
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium w-1/2">Karakterler:</span>
          <CustomSelect options={randomnessOptions} />
        </div>
        <input
          type="submit"
          value="Başlat"
          className="bg-primary mt-4 py-2 rounded-xl cursor-pointer hover:bg-secondary uppercase font-semibold"
        />
      </form>
      <hr className="border-dark mt-4" />
      <div>
        <button className="flex items-center uppercase bg-primary rounded-xl py-2 px-4 space-x-2 font-semibold hover:bg-secondary mx-auto mt-4">
          <p>Odayı Paylaş</p>
          <FaCopy />
        </button>
      </div>
    </div>
  );
};

export default Settings;
