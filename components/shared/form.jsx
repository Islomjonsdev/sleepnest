"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "./loading";

const Form = () => {
  return (
    <div>
      <h1 className="text-[32px] my-[32px] text-[#242825] font-bold">
        Connection
      </h1>
      <form className="flex flex-col gap-[20px]">
        <div>
          <Input
            type="email"
            placeholder="Your email"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <textarea
            className="p-5 bg-[#e4e4e4] outline-none w-full rounded-[8px] h-[133px] resize-none"
            placeholder={"Please write if you have message"}
          />
        </div>
        <button className="bg-[red] max-w-[151px] w-full py-[15px] text-white text-[13px] rounded-[25px]">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
