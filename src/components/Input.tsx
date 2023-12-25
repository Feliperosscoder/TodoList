import React, { KeyboardEvent } from "react";

interface InputProps {
    inputValue: React.RefObject<HTMLInputElement>,
    handleClickEnter: (event: KeyboardEvent<HTMLInputElement>) => void
}

const Input = ({inputValue, handleClickEnter}: InputProps) => {
  return (
    <div className="flex-1">
      <input
        ref={inputValue}
        type="text"
        className="w-full text-[#E4E5F1] text-xl bg-transparent outline-none"
        onKeyDown={handleClickEnter}
      />
    </div>
  );
};

export default Input;
