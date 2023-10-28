import React from "react";
import Profile from "../../../components/common/Profile";
import Accordion from "./Accordion";

const FAQ = () => {
  const accordionItems = [
    {
      title: "Your question is here ?",
      content:
        "Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is hereYour question is here Your question is here Your question is here Your question is here",
    },
    {
      title: "Your question is here ?",
      content:
        "Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is hereYour question is here Your question is here Your question is here Your question is here",
    },
    {
      title: "Your question is here ?",
      content:
        "Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is hereYour question is here Your question is here Your question is here Your question is here",
    },
    {
      title: "Your question is here ?",
      content:
        "Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is hereYour question is here Your question is here Your question is here Your question is here",
    },
    {
      title: "Your question is here ?",
      content:
        "Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is hereYour question is here Your question is here Your question is here Your question is here",
    },
    {
      title: "Your question is here ?",
      content:
        "Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is here Your question is hereYour question is here Your question is here Your question is here Your question is here",
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
