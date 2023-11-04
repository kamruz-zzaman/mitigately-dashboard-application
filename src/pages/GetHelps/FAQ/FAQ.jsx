import React from "react";
import Profile from "../../../components/common/Profile";
import Accordion from "./Accordion";
import Footer from "../../../components/common/Footer";

const FAQ = () => {
  const accordionItems = [
    {
      title:
        "What should I expect now that I've enrolled in Mitigately's debt settlement program?",
      content:
        "Welcome to Mitigately! Now that you're enrolled, here’s what to expect: First, we'll start by creating a detailed plan tailored to your financial situation. You will begin making regular deposits into a dedicated savings account, which will be used to negotiate settlements with your creditors. Throughout this process, our team will keep you updated on our progress and will be available to answer any questions you may have. Remember, the key to success in debt settlement is consistent saving and communication.",
    },
    {
      title: "How long will it take for Mitigately to settle my debts?",
      content:
        "The timeline for settling debts varies based on individual circumstances, including the total amount of debt and your ability to save funds for settlements. Typically, our clients start seeing settlement offers within the first few months of enrollment, and most complete the program within 24 to 48 months. We'll work with you to set realistic expectations and will negotiate aggressively on your behalf to expedite the process as much as possible.",
    },
    {
      title:
        "Can I continue using my credit cards while enrolled in the program?",
      content:
        "Once you are enrolled in Mitigately’s debt settlement program, we generally advise against using your credit cards. Continuing to accrue new debt can undermine the settlement process and your overall financial stability. Our goal is to help you get out of debt, and halting further credit card use is an essential step in that direction.",
    },
    {
      title: "How will enrolling with Mitigately affect my credit score?",
      content:
        "As you are likely aware, participating in a debt settlement program requires us to negotiate with creditors on accounts that are delinquent, which can negatively impact your credit score in the short term. However, settling your debts will ultimately relieve your financial burden, and we'll guide you on how to improve your credit score once your debts are settled.",
    },
    {
      title: "What happens if a creditor won't settle or takes legal action?",
      content:
        "While most creditors are open to settlement, there's a chance that some may not agree to negotiate or may pursue legal action to collect the debt. In such cases, Mitigately has strategies and protocols in place to handle these situations. We work with a network of legal partners to support you in the event of legal action and will continue to negotiate for a settlement that is in your best interest. Remember, our team is here to stand by you every step of the way.",
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
      <Footer />
    </div>
  );
};

export default FAQ;
