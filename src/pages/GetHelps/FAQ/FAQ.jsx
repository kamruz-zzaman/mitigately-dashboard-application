import React from "react";
import Profile from "../../../components/common/Profile";
import Accordion from "./Accordion";

const FAQ = () => {
  const accordionItems = [
    {
      title: "Accordion 1",
      content: "Content for Accordion 1",
    },
    {
      title: "Accordion 2",
      content: "Content for Accordion 2",
    },
    {
      title: "Accordion 3",
      content: "Content for Accordion 3",
    },
  ];

  return (
    <div>
      <Profile />
      <div className="flex justify-center">
        <div className="max-w-[942px] w-full">
          <h1 className="font-Jost text-[22px] md:text-[28px] font-medium mb-7 md:mb-10">
            Frequently Asked Questions
          </h1>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
