function Dashboard() {
  return (
    <div>
      {/* Dashboard header cards */}
      <div className="mt-6 px-5">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 5V1H15"
                        stroke="#35BE5E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 5V1H15"
                        stroke="#35BE5E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 5V1H15"
                        stroke="#35BE5E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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

      <div className="w-full flex gap-8 mt-8 py-8 px-8">
        <div className="max-w-[540px] w-full flex flex-col gap-6">
          <div
            className="w-full p-5 rounded-2xl py-5 px-8"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_11_950)">
                      <path
                        d="M24.1405 22H1.85482C0.830034 22 0 21.1623 0 20.1384V7.71187C0 6.68331 0.834671 5.85022 1.85482 5.85022H18.5714V7.09287H1.85482C1.51168 7.09287 1.2381 7.37212 1.2381 7.71187V20.1384C1.2381 20.4828 1.51632 20.7573 1.85482 20.7573H24.1405C24.4837 20.7573 24.7573 20.4781 24.7573 20.1384V5.85022H25.9954V20.1384C25.9954 21.1669 25.1607 22 24.1405 22Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M12.9979 16.7967C12.5991 16.7967 12.205 16.6431 11.9036 16.3406L10.5913 15.0235C9.98846 14.4184 9.98846 13.4318 10.5913 12.8267L11.9036 11.5096C12.5064 10.9046 13.4894 10.9046 14.0923 11.5096L15.4045 12.8267C16.0074 13.4318 16.0074 14.4184 15.4045 15.0235L14.0923 16.3406C13.7908 16.6431 13.3967 16.7967 12.9979 16.7967ZM12.9979 12.2962C12.9191 12.2962 12.8402 12.3287 12.78 12.3893L11.4677 13.7064C11.3471 13.8274 11.3471 14.0228 11.4677 14.1439L12.78 15.461C12.9005 15.582 13.0953 15.582 13.2158 15.461L14.5281 14.1439C14.6487 14.0228 14.6487 13.8274 14.5281 13.7064L13.2158 12.3893C13.1556 12.3287 13.0767 12.2962 12.9979 12.2962Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M7.42864 9.57816H3.71436V10.8208H7.42864V9.57816Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M22.2856 17.0294H18.5713V18.2721H22.2856V17.0294Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M22.2859 0.879639H21.0479V10.8208H22.2859V0.879639Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M23.7048 3.80241L21.6645 1.75926L19.6288 3.80241L18.7524 2.92278L21.6645 0L24.5766 2.92278L23.7048 3.80241Z"
                        fill="#A4B4CB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_950">
                        <rect width="26" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p className="text-[22px] font-medium font-Jost text-[#141736]">
                  Debts
                </p>
              </div>
              <div className="flex items-center gap-[7px]">
                <p className="text-[10px] font-medium font-Jost text-[#141736]">
                  View all
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="7"
                    viewBox="0 0 5 7"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.562919 0.245839C0.267645 0.541114 0.267645 1.01985 0.562919 1.31512L2.67462 3.42682L0.562919 5.53852C0.267645 5.8338 0.267645 6.31253 0.562919 6.60781C0.858194 6.90308 1.33693 6.90308 1.6322 6.60781L4.27854 3.96146C4.57382 3.66619 4.57382 3.18746 4.27854 2.89218L1.6322 0.245839C1.33693 -0.0494351 0.858194 -0.0494351 0.562919 0.245839Z"
                      fill="#777E91"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-7 mt-6">
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src={companyImage} alt="" />
                  <p className="text-[12px] font-medium font-Jost">
                    J.P. Morgan Chase
                  </p>
                </div>
                <h4 className="text-[12px]">-$853.00</h4>
                <button className="bg-[#EBFFF3] text-[#61BB84] text-[10px] py-2 px-5 rounded-lg font-Jost">
                  Settled
                </button>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src={companyImage} alt="" />
                  <p className="text-[12px] font-medium font-Jost">
                    J.P. Morgan Chase
                  </p>
                </div>
                <h4 className="text-[12px]">-$853.00</h4>
                <button className="bg-[#FFF1ED] text-[#FFAA90] text-[10px] py-2 px-5 rounded-lg font-Jost">
                  Negotiating
                </button>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src={companyImage} alt="" />
                  <p className="text-[12px] font-medium font-Jost">
                    J.P. Morgan Chase
                  </p>
                </div>
                <h4 className="text-[12px]">-$853.00</h4>
                <button className="bg-[#EDF3FF] text-[#8CB2FF] text-[10px] py-2 px-5 rounded-lg font-Jost ">
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full p-5 rounded-2xl py-5 px-8"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_11_874)">
                      <path
                        d="M23.212 25H4.16434C3.17897 25 2.38086 24.1974 2.38086 23.2165V11.3073C2.38086 10.3219 3.18343 9.5238 4.16434 9.5238H23.212C24.1973 9.5238 24.9954 10.3264 24.9954 11.3073V23.2121C24.9954 24.1974 24.1929 24.9955 23.212 24.9955V25ZM4.16434 10.7143C3.8344 10.7143 3.57134 10.9818 3.57134 11.3073V23.2121C3.57134 23.542 3.83886 23.8051 4.16434 23.8051H23.212C23.5419 23.8051 23.805 23.5375 23.805 23.2121V11.3073C23.805 10.9773 23.5375 10.7143 23.212 10.7143H4.16434Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M1.19048 13.6882H0V1.78348C0 0.802568 0.802568 0 1.78348 0H20.8311C21.8165 0 22.6146 0.802568 22.6146 1.78348V7.1384H21.4241V1.78348C21.4241 1.45354 21.1566 1.19048 20.8311 1.19048H1.78348C1.45354 1.19048 1.19048 1.458 1.19048 1.78348V13.6882Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M22.619 7.14284H0V3.57141H22.619V7.14284ZM1.19048 5.95236H21.4286V4.76189H1.19048V5.95236Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M10.7141 13.0952H7.14262C6.48514 13.0952 5.95215 13.6282 5.95215 14.2857V15.4762C5.95215 16.1336 6.48514 16.6666 7.14262 16.6666H10.7141C11.3715 16.6666 11.9045 16.1336 11.9045 15.4762V14.2857C11.9045 13.6282 11.3715 13.0952 10.7141 13.0952Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M9.52358 20.2381H5.95215V21.4286H9.52358V20.2381Z"
                        fill="#A4B4CB"
                      />
                      <path
                        d="M21.4286 20.2381H11.9048V21.4286H21.4286V20.2381Z"
                        fill="#A4B4CB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_874">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p className="text-[22px] font-medium font-Jost text-[#141736]">
                  Peyments
                </p>
              </div>
              <div className="flex items-center gap-[7px]">
                <p className="text-[10px] font-medium font-Jost text-[#141736]">
                  View all
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="7"
                    viewBox="0 0 5 7"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.562919 0.245839C0.267645 0.541114 0.267645 1.01985 0.562919 1.31512L2.67462 3.42682L0.562919 5.53852C0.267645 5.8338 0.267645 6.31253 0.562919 6.60781C0.858194 6.90308 1.33693 6.90308 1.6322 6.60781L4.27854 3.96146C4.57382 3.66619 4.57382 3.18746 4.27854 2.89218L1.6322 0.245839C1.33693 -0.0494351 0.858194 -0.0494351 0.562919 0.245839Z"
                      fill="#777E91"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-7 mt-6">
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src={cp1} alt="" />
                </div>
                <h4 className="text-[10px]">Sep 16, 2023</h4>
                <h4 className="text-[10px]">-$853.00</h4>
                <button className="bg-[#EBFFF3] text-[#61BB84] text-[10px] py-2 px-5 rounded-lg font-Jost">
                  Success
                </button>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src={cp2} alt="" />
                </div>
                <h4 className="text-[10px]">Sep 16, 2023</h4>
                <h4 className="text-[10px]">-$853.00</h4>
                <button className="bg-[#FFF1ED] text-[#FFAA90] text-[10px] py-2 px-5 rounded-lg font-Jost">
                  Pending
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
