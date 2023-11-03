import React, { useState } from "react";
import Profile from "../../components/common/Profile";
import CreateTicket from "../GetHelps/CreateTicket";
import TackFollow from "../GetHelps/TicketFollow/TackFollow";
import SettingOverview from "../Settings/SettingOverview";

const ContactUs = () => {
  const [ticketPage, setTicketPage] = useState("ticketOverview");

  let content;
  if (ticketPage === "ticketOverview") {
    content = <SettingOverview />;
  } else if (ticketPage === "createTicket") {
    content = <CreateTicket />;
  }

  return (
    <div>
      <Profile />
      <div
        className="w-full p-5 rounded-2xl py-5 px-8"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        {/* Payment tabs*/}
        <div className="flex items-center gap-7 mt-8 mb-9">
          <span
            className={`font-Jost text-[16px] text-[#191D23] py-2 cursor-pointer font-semibold transition-all duration-300 ${
              ticketPage === "ticketOverview" &&
              "border-[#047857] border-b-2 font-semibold"
            }`}
            onClick={() => setTicketPage("ticketOverview")}
          >
            Overview
          </span>
          {/* <span
            className={`font-Jost text-[16px] text-[#191D23] py-2 cursor-pointer font-semibold transition-all duration-300 ${
              ticketPage === "myActivities" &&
              "border-[#047857] border-b-2 font-semibold"
            }`}
            onClick={() => setTicketPage("myActivities")}
          >
            My Activities
          </span> */}
          <span
            className={`font-Jost text-[16px] text-[#191D23] py-2 cursor-pointer font-semibold transition-all duration-300 ${
              ticketPage === "createTicket" &&
              "border-[#047857] border-b-2 font-semibold"
            }`}
            onClick={() => setTicketPage("createTicket")}
          >
            Create ticket
          </span>
        </div>

        <div>{content}</div>
      </div>
    </div>
  );
};

export default ContactUs;
