import { useState } from "react";
import { useTranslation } from "react-i18next";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
    const {i18n} = useTranslation()
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center  rounded-md  shadow-sm  bg-transparent text-sm font-medium hover:scale-125 duration-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
            <img src="https://cdn-icons-png.flaticon.com/512/1542/1542976.png" alt="logo-language" className="w-8" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className=" flex flex-col justify-around" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button className="text-black hover:bg-gray-400 hover:font-bold w-full rounded-md  py-2" onClick={()=>i18n.changeLanguage("es")}>ES</button>
                <button className="text-black hover:bg-gray-400 hover:font-bold w-full rounded-md py-2" onClick={()=>i18n.changeLanguage("en")}>EN</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;