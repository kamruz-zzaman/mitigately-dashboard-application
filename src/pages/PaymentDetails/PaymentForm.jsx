import React from "react";

const PaymentForm = () => {
  return (
    <div>
      {/* Payment header cards */}
      <div className="mt-6">
        <div className="w-full flex gap-12 md:gap-3 lg:gap-5 flex-col md:flex-row">
          <div
            className="grow flex flex-col justify-between gap-3 bg-white 2xl:h-60 overflow-hidden w-full md:w-3/6 rounded-2xl p-8 md:px-8 lg:px-12"
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            <div className="flex justify-between items-start w-full">
              <h1 className="text-[14px] sm:text-[18px] md:text-[20px] font-Jost">
                Total Debt
              </h1>

              <div className="flex items-center justify-center bg-[#EDF3FF] rounded-full ">
                <span className="flex items-center justify-center h-[56px] w-[56px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M5.5 15.5H9.5M12.79 7.79L14.5 9.5H18.5C18.7652 9.5 19.0196 9.60536 19.2071 9.79289C19.3946 9.98043 19.5 10.2348 19.5 10.5V18.5C19.5 18.7652 19.3946 19.0196 19.2071 19.2071C19.0196 19.3946 18.7652 19.5 18.5 19.5H2.5C2.23478 19.5 1.98043 19.3946 1.79289 19.2071C1.60536 19.0196 1.5 18.7652 1.5 18.5V8.5C1.5 8.23478 1.60536 7.98043 1.79289 7.79289C1.98043 7.60536 2.23478 7.5 2.5 7.5H12.09C12.3523 7.5011 12.6037 7.60526 12.79 7.79ZM17.5 9.5V2.5C17.5 2.23478 17.3946 1.98043 17.2071 1.79289C17.0196 1.60536 16.7652 1.5 16.5 1.5H4.5C4.23478 1.5 3.98043 1.60536 3.79289 1.79289C3.60536 1.98043 3.5 2.23478 3.5 2.5V7.5H12.09C12.3523 7.5011 12.6037 7.60526 12.79 7.79L14.5 9.5H17.5Z"
                      stroke="#A4C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-Jost text-[28px] leading-10 font-bold">
                $146.80
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <path
                        d="M19 1L12 8L9 5L1 13"
                        stroke="#35BE5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 5V1H15"
                        stroke="#35BE5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-[#34AA69]">17 %</p>
                </div>
                <p>Since last week</p>
              </div>
            </div>
          </div>

          <div
            className="grow flex flex-col justify-between gap-3 bg-white 2xl:h-60 overflow-hidden w-full md:w-3/6 rounded-2xl p-8 md:px-8 lg:px-12"
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            <div className="flex justify-between items-start w-full">
              <h1 className="text-[14px] sm:text-[18px] md:text-[20px] font-Jost">
                Trust Balance
              </h1>
              <div className="flex items-center justify-center bg-[#FFF1ED] rounded-full ">
                <span className="flex items-center justify-center h-[56px] w-[56px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M5.5 15.5H9.5M12.79 7.79L14.5 9.5H18.5C18.7652 9.5 19.0196 9.60536 19.2071 9.79289C19.3946 9.98043 19.5 10.2348 19.5 10.5V18.5C19.5 18.7652 19.3946 19.0196 19.2071 19.2071C19.0196 19.3946 18.7652 19.5 18.5 19.5H2.5C2.23478 19.5 1.98043 19.3946 1.79289 19.2071C1.60536 19.0196 1.5 18.7652 1.5 18.5V8.5C1.5 8.23478 1.60536 7.98043 1.79289 7.79289C1.98043 7.60536 2.23478 7.5 2.5 7.5H12.09C12.3523 7.5011 12.6037 7.60526 12.79 7.79ZM17.5 9.5V2.5C17.5 2.23478 17.3946 1.98043 17.2071 1.79289C17.0196 1.60536 16.7652 1.5 16.5 1.5H4.5C4.23478 1.5 3.98043 1.60536 3.79289 1.79289C3.60536 1.98043 3.5 2.23478 3.5 2.5V7.5H12.09C12.3523 7.5011 12.6037 7.60526 12.79 7.79L14.5 9.5H17.5Z"
                      stroke="#FFAA90"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="font-Jost text-[28px] leading-10 font-bold">
                $146.80
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <path
                        d="M19 1L12 8L9 5L1 13"
                        stroke="#35BE5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 5V1H15"
                        stroke="#35BE5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-[#34AA69]">17 %</p>
                </div>
                <p>Since last week</p>
              </div>
            </div>
          </div>

          <div
            className="grow flex flex-col justify-between gap-3 bg-white 2xl:h-60 overflow-hidden w-full md:w-3/6 rounded-2xl p-8 md:px-8 lg:px-12"
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            <div className="flex justify-between items-start w-full">
              <h1 className="text-2xl md:text-xl lg:text-xl font-medium">
                Payments Remaining
              </h1>
              <div className="flex items-center justify-center bg-[#EBFFF3] rounded-full ">
                <span className="flex items-center justify-center h-[56px] w-[56px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M5.5 15.5H9.5M12.79 7.79L14.5 9.5H18.5C18.7652 9.5 19.0196 9.60536 19.2071 9.79289C19.3946 9.98043 19.5 10.2348 19.5 10.5V18.5C19.5 18.7652 19.3946 19.0196 19.2071 19.2071C19.0196 19.3946 18.7652 19.5 18.5 19.5H2.5C2.23478 19.5 1.98043 19.3946 1.79289 19.2071C1.60536 19.0196 1.5 18.7652 1.5 18.5V8.5C1.5 8.23478 1.60536 7.98043 1.79289 7.79289C1.98043 7.60536 2.23478 7.5 2.5 7.5H12.09C12.3523 7.5011 12.6037 7.60526 12.79 7.79ZM17.5 9.5V2.5C17.5 2.23478 17.3946 1.98043 17.2071 1.79289C17.0196 1.60536 16.7652 1.5 16.5 1.5H4.5C4.23478 1.5 3.98043 1.60536 3.79289 1.79289C3.60536 1.98043 3.5 2.23478 3.5 2.5V7.5H12.09C12.3523 7.5011 12.6037 7.60526 12.79 7.79L14.5 9.5H17.5Z"
                      stroke="#95D5AD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="font-Jost text-[28px] leading-10 font-bold">04</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <path
                        d="M19 1L12 8L9 5L1 13"
                        stroke="#35BE5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 5V1H15"
                        stroke="#35BE5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-[#34AA69]">17 %</p>
                </div>
                <p>Since last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Forms */}
      <div className="w-full mt-14 pb-9">
        <form className="max-w-[930px] w-full flex flex-col md:flex-row gap-6 mmd:gap-[74px] justify-between">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-3">
              <label
                htmlFor=""
                className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
              >
                Account Number
              </label>
              <input
                type="text"
                placeholder="1234567990"
                style={{
                  boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                }}
                className="font-Jost tracking-[6px] text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-5 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <label
                htmlFor=""
                className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
              >
                Routing Number
              </label>
              <input
                type="text"
                placeholder="Routing Number"
                style={{
                  boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                }}
                className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-5 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <label
                htmlFor=""
                className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
              >
                Bank Name
              </label>
              <input
                type="text"
                placeholder="Bank Name"
                style={{
                  boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                }}
                className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-5 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-3">
              <label
                htmlFor=""
                className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
              >
                Name on Account
              </label>
              <input
                type="text"
                placeholder="Name on Account"
                style={{
                  boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                }}
                className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-5 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label
                htmlFor=""
                className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
              >
                Account Type
              </label>
              <input
                type="text"
                placeholder="Checking"
                style={{
                  boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                }}
                readOnly
                className="font-Jost text-[#064E3B] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-5 px-8 bg-[#ECFDF5] text-center placeholder:text-[16px] placeholder:uppercase placeholder:text-[#064E3B]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
