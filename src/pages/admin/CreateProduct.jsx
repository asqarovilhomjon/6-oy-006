import React from "react";
import { useEffect } from "react";
import Rasm from "../../assets/i.webp";
const CreateProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col overflow-hidden">
      <div className=" flex flex-col gap-5">
        <div className="w-[200px] h-[200px] rounded-md flex m-auto">
          <img
            className="w-[200px] h-[200px]  object-contain"
            src={Rasm}
            alt="foto"
          />
        </div>
        <div className="flex justify-between mt-52">
          <div className="">
            <p className="text-[20px] px-2 text-lime-500">Email:</p>
            <div className="border  pl-1 text-[#0009]">
              {" "}
              <p>abduvorisazimov787@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="text-[20px] font-[500]">Parol:</p>
            <input
              value={12345678}
              className="py-[4px] bg-inherit border pl-2 outline-none  "
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
