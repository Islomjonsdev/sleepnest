"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "./loading";

const Form = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sentMessage = (e) => {
    setLoading(true);
    e.preventDefault();

    const token = "8092034696:AAHic_VclgFG_pQxaglPBczGHhpeoaHI5X8";
    const chat_id = 766849030;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const email = userEmail;
    const password = userPassword;
    const message = userMessage;
    const messageContent = `Ismi: ${email} \n Telefon raqami: ${password} \n Xabari: ${message}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        console.log(res?.data);
        setUserEmail("");
        setUserPassword("");
        setUserMessage("");
        toast.success("Successfully send");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to sent");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h1 className="text-[32px] my-[32px] text-[#242825] font-bold">
        Connection
      </h1>
      <form className="flex flex-col gap-[20px]" onSubmit={sentMessage}>
        <div>
          <Input
            type="email"
            placeholder="Your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Your phone number"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="p-5 bg-[#e4e4e4] outline-none w-full rounded-[8px] h-[133px] resize-none"
            placeholder={"Please write if you have message"}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
        </div>
        <button className="bg-[red] max-w-[151px] w-full py-[15px] text-white text-[13px] rounded-[25px]">
          {loading ? <Loading /> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Form;
