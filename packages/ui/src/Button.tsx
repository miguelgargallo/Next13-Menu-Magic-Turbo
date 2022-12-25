import * as React from "react";

export const Button = () => {
  return (
    <div className="rounded-md ">
      <a href="https://turbo.build/repo/docs">
        <div className="bg-white text-black py-2 px-2 m-2 flex">
          Read the docs
          <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            →
          </span>
        </div>
      </a>
    </div>
  );
};
