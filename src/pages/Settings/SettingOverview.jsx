import { Grid, _ } from "gridjs-react";
import { useState } from "react";

const SettingOverview = () => {
  const [originalData, setOriginalData] = useState([
    {
      ticketID: "123456789",
      createDate: "Tue, 24 Oct 2023 12:57:16 +0000",
      subject: "Your Subject here Your Subject here",
      status: "Solved",
      _id: "26874ysatdshfkajsl",
    },
    {
      ticketID: "12345624",
      createDate: "Sat, 16 Oct 2023 12:57:16 +0000",
      subject: "Your Subject here Your Subject here",
      status: "Open",
      _id: "26874yfsatdhfkajsl",
    },
    {
      ticketID: "12345643",
      createDate: "Sat, 04 Oct 2023 12:57:16 +0000",
      subject: "Your Subject here Your Subject here",
      status: "In Progress",
      _id: "26874ysatsdhfkajsl",
    },
    {
      ticketID: "1234564876",
      createDate: "Sat, 07 Oct 2023 12:57:16 +0000",
      subject: "Your Subject here Your Subject here",
      status: "Solved",
      _id: "26874ysatdhfkfajsl",
    },
  ]);

  // handle action
  const handleActions = (data) => {
    console.log("handle Actions ", data);
  };

  return (
    <div className="mt-6 border-[#3048AD] p-[1px] rounded-2xl w-full">
      <div className="h-full rounded-2xl py-4 px-8 max-w-full">
        {originalData.length ? (
          <div className="relative">
            <div className="relative flex justify-between mb-3 mt-1    w-full flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
              {originalData.length ? (
                <Grid
                  data={originalData.map((x) => [
                    x.ticketID,
                    x.createDate,
                    x.subject,
                    x.status,
                    x._id,
                  ])}
                  columns={[
                    {
                      name: "Ticket Id",
                    },
                    {
                      name: "Created",
                      formatter: (cell) => {
                        const date = new Date(cell);
                        const day = date.getDate();
                        // const month = date.getMonth() + 1;
                        // const year = date.getFullYear();

                        // return `${month}/${day}/${year}`;
                        return `${day} Days ago`;
                      },
                    },
                    {
                      name: "Subject",
                    },
                    {
                      name: "Status",
                      formatter: (cell) => {
                        return _(
                          <div className="inline-flex justify-center items-center">
                            <span
                              className={`py-1 px-2.5 rounded-[0.5rem] ${
                                cell == "Solved"
                                  ? "bg-[#064E3B] text-[#ECFDF5]"
                                  : cell == "In Progress"
                                  ? "bg-[#D7D7FF] text-[#090858]"
                                  : cell == "Open"
                                  ? "text-[#991B1B] bg-[#FEF2F2]"
                                  : ""
                              }`}
                            >
                              {cell}
                            </span>
                          </div>
                        );
                      },
                    },
                    {
                      name: "Action",
                      formatter: (cell) => {
                        return _(
                          <button
                            onClick={() => handleActions(cell)}
                            className="w-[1.1rem] h-[1.1rem] "
                          >
                            <span>
                              <svg
                                width="17"
                                height="18"
                                viewBox="0 0 17 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_147_74)">
                                  <path
                                    d="M13.3875 0.499534H3.6125C2.66406 0.491034 1.751 0.859188 1.07372 1.52319C0.396441 2.18719 0.0102816 3.09278 0 4.0412L0 6.1662C0 6.35406 0.0746278 6.53423 0.207466 6.66707C0.340304 6.79991 0.520472 6.87453 0.708333 6.87453C0.896195 6.87453 1.07636 6.79991 1.2092 6.66707C1.34204 6.53423 1.41667 6.35406 1.41667 6.1662V4.0412C1.42673 3.46844 1.66356 2.92305 2.07521 2.52468C2.48686 2.12631 3.03972 1.90748 3.6125 1.9162H13.3875C13.9603 1.90748 14.5131 2.12631 14.9248 2.52468C15.3364 2.92305 15.5733 3.46844 15.5833 4.0412V13.9579C15.5733 14.5306 15.3364 15.076 14.9248 15.4744C14.5131 15.8728 13.9603 16.0916 13.3875 16.0829H3.6125C3.03972 16.0916 2.48686 15.8728 2.07521 15.4744C1.66356 15.076 1.42673 14.5306 1.41667 13.9579V11.8329C1.41667 11.645 1.34204 11.4648 1.2092 11.332C1.07636 11.1992 0.896195 11.1245 0.708333 11.1245C0.520472 11.1245 0.340304 11.1992 0.207466 11.332C0.0746278 11.4648 0 11.645 0 11.8329L0 13.9579C0.0102816 14.9063 0.396441 15.8119 1.07372 16.4759C1.751 17.1399 2.66406 17.508 3.6125 17.4995H13.3875C14.3359 17.508 15.249 17.1399 15.9263 16.4759C16.6036 15.8119 16.9897 14.9063 17 13.9579V4.0412C16.9897 3.09278 16.6036 2.18719 15.9263 1.52319C15.249 0.859188 14.3359 0.491034 13.3875 0.499534Z"
                                    fill="#0070D2"
                                  />
                                  <path
                                    d="M2.125 8.9994C2.125 9.18726 2.19963 9.36743 2.33247 9.50027C2.4653 9.63311 2.64547 9.70774 2.83333 9.70774L12.1748 9.68649L9.11271 12.7486C9.04505 12.814 8.99109 12.8921 8.95397 12.9785C8.91685 13.065 8.89731 13.1579 8.89649 13.252C8.89567 13.346 8.91359 13.4393 8.94921 13.5263C8.98483 13.6134 9.03742 13.6925 9.10393 13.759C9.17044 13.8255 9.24952 13.8781 9.33657 13.9137C9.42363 13.9493 9.5169 13.9672 9.61095 13.9664C9.705 13.9656 9.79795 13.9461 9.88437 13.9089C9.97079 13.8718 10.049 13.8178 10.1143 13.7502L13.3627 10.5018C13.7611 10.1033 13.9849 9.56288 13.9849 8.9994C13.9849 8.43593 13.7611 7.89552 13.3627 7.49703L10.1157 4.24861C9.98211 4.11958 9.80319 4.04819 9.61747 4.0498C9.43174 4.05141 9.25408 4.12591 9.12275 4.25724C8.99142 4.38857 8.91693 4.56623 8.91531 4.75195C8.9137 4.93768 8.9851 5.1166 9.11412 5.2502L12.133 8.26982L2.83333 8.29107C2.64547 8.29107 2.4653 8.3657 2.33247 8.49854C2.19963 8.63137 2.125 8.81154 2.125 8.9994Z"
                                    fill="#0070D2"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_147_74">
                                    <rect
                                      width="17"
                                      height="17"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </button>
                        );
                      },
                    },
                  ]}
                  // search={false}
                  // pagination={{
                  //   limit: 10,
                  // }}
                  className={{
                    container: "",
                    table:
                      "items-center bg-transparent min-w-[80vw] lg:min-w-[70vw] border-collapse  font-Ar mt-6 mb-8 table-auto",
                    th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-base whitespace-nowrap font-semibold border-b border-[#E7EAEE] text-left uppercase text-[#64748B]",
                    td: "border-t-0 px-1 md:px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-2 md:p-4  text-left border-b border-[#E7EAEE]",
                    paginationSummary: "hidden md:block",
                    paginationButton: "border px-3 py-1 me-3 ",
                    paginationButtonCurrent:
                      "bg-[#3637EA] px-3 py-1 border-[#3637EA] ",
                    paginationButtonNext: "border-none",
                    paginationButtonPrev: "border-none",
                  }}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SettingOverview;
