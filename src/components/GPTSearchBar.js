import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.changeLanguage.lang);

  return (
    <div className="flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-black">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-2 m-4 bg-red-700 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
