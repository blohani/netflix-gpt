import React from "react";
import GPTMovieSuggessions from "./GPTMovieSuggessions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-30">
        <img
          alt="Netflix"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggessions />
    </>
  );
};

export default GPTSearch;
