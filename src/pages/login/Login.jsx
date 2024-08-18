import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [soarch, setSoarch] = useState("");
  const [input, setInput] = useState("");
  const searchHand = (e) => {
    setSoarch(e.target.value);
  };
  const btr = (e) => {
    setInput(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="container mx-auto"> 
      <p className="text-[28px] font-[600] text-center mb-5"> login in!</p>
      <div className="w-[350px] h-[350px] border shadow m-auto p-4 mb-10 ">
        <form className="flex flex-col gap-5" action="">
          <p className="font-medium text-center text-[#198f51] mb-3">
          Shaxsiy Hisob          </p>
          <input
            value={soarch}
            onChange={searchHand}
            navigate={() => {
              setSoarch("");
            }}
            className="w-full border pl-2 py-[7px] rounded-full shadow-sm outline-none"
            type="text"
            required
            placeholder="Email"
          />
          <input
            required
            value={input}
            onChange={btr}
            navigate={() => {
              setInput("");
            }}
            className="w-full border pl-2 py-[7px] rounded-full shadow-sm outline-none"
            type="password"
            placeholder="password"
          />
          <button
            onClick={() => navigate(`/Admin`)}
            className="w-full border-none bg-[#ff8a1e] text-[#fff] cursor-pointr pl-2 py-[7px] rounded-full shadow-sm outline-none"
          >
            {" "}
            Coxraint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
