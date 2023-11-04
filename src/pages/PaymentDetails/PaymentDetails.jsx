import React, { useState } from "react";
import Profile from "../../components/common/Profile";
import PaymentForm from "./PaymentForm";
import PaymentOverView from "./PaymentOverView";

const PaymentDetails = () => {
  const [paymentTab, setPaymentTab] = useState("paymentOverview");

  let content;
  if (paymentTab === "paymentDetails") {
    content = <PaymentForm />;
  } else if (paymentTab === "paymentOverview") {
    content = <PaymentOverView />;
  }

  return (
    <div>
      <Profile />
      <div
        className="w-full p-5 rounded-2xl py-5 px-8"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        {/* top title */}
        <div className="flex items-center gap-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <g clip-path="url(#clip0_75_329)">
                <path
                  d="M23.8653 25.7032H4.28189C3.2688 25.7032 2.44824 24.878 2.44824 23.8695V11.6253C2.44824 10.6122 3.27338 9.79169 4.28189 9.79169H23.8653C24.8784 9.79169 25.6989 10.6168 25.6989 11.6253V23.865C25.6989 24.878 24.8738 25.6986 23.8653 25.6986V25.7032ZM4.28189 11.0156C3.94267 11.0156 3.6722 11.2907 3.6722 11.6253V23.865C3.6722 24.2042 3.94725 24.4746 4.28189 24.4746H23.8653C24.2045 24.4746 24.475 24.1996 24.475 23.865V11.6253C24.475 11.2861 24.1999 11.0156 23.8653 11.0156H4.28189Z"
                  fill="#A4B4CB"
                />
                <path
                  d="M1.22396 14.0733H0V1.83365C0 0.825142 0.825143 0 1.83365 0H21.417C22.4301 0 23.2507 0.825142 23.2507 1.83365V7.33918H22.0267V1.83365C22.0267 1.49442 21.7517 1.22396 21.417 1.22396H1.83365C1.49442 1.22396 1.22396 1.49901 1.22396 1.83365V14.0733Z"
                  fill="#A4B4CB"
                />
                <path
                  d="M23.2553 7.34377H0V3.67189H23.2553V7.34377ZM1.22396 6.11981H22.0313V4.89585H1.22396V6.11981Z"
                  fill="#A4B4CB"
                />
                <path
                  d="M11.016 13.4636H7.34408C6.6681 13.4636 6.12012 14.0116 6.12012 14.6875V15.9115C6.12012 16.5875 6.6681 17.1355 7.34408 17.1355H11.016C11.6919 17.1355 12.2399 16.5875 12.2399 15.9115V14.6875C12.2399 14.0116 11.6919 13.4636 11.016 13.4636Z"
                  fill="#A4B4CB"
                />
                <path
                  d="M9.792 20.8073H6.12012V22.0313H9.792V20.8073Z"
                  fill="#A4B4CB"
                />
                <path
                  d="M22.0309 20.8073H12.2393V22.0313H22.0309V20.8073Z"
                  fill="#A4B4CB"
                />
              </g>
              <defs>
                <clipPath id="clip0_75_329">
                  <rect width="25.7032" height="25.7032" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <p className="text-[22px] font-medium font-Jost text-[#141736]">
            Payment Details
          </p>
        </div>

        {/* Payment tabs*/}
        <div className="flex items-center gap-7 mt-8 mb-9">
          <span
            className={`font-Jost text-[16px] text-[#191D23] py-2 cursor-pointer font-semibold transition-all duration-300 ${
              paymentTab === "paymentOverview" &&
              "border-[#047857] border-b-2 font-semibold"
            }`}
            onClick={() => setPaymentTab("paymentOverview")}
          >
            Overview
          </span>
          <span
            className={`font-Jost text-[16px] text-[#191D23] py-2 cursor-pointer font-semibold transition-all duration-300 ${
              paymentTab === "paymentDetails" &&
              "border-[#047857] border-b-2 font-semibold"
            }`}
            onClick={() => setPaymentTab("paymentDetails")}
          >
            Payment Details
          </span>
        </div>

        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default PaymentDetails;
