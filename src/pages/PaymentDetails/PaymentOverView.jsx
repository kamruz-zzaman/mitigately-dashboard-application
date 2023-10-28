import { Grid, _ } from "gridjs-react";
import { useState } from "react";

const PaymentOverView = () => {
  const [originalData, setOriginalData] = useState([
    {
      createDate: "Tue, 24 Oct 2023 12:57:16 +0000",
      trustAmount: "$650",
      status: "Returned",
      paymentAmount: "$650",
      _id: "26874ysatdhfkajsl",
    },
    {
      createDate: "Tue, 24 Oct 2023 01:16:09 +0000",
      trustAmount: "$450",
      status: "Pending",
      paymentAmount: "$450",
      _id: "26874ysasdhfkajsl",
    },
    {
      createDate: "Mon, 23 Oct 2023 23:35:38 +0000",
      trustAmount: "$500",
      status: "paid",
      paymentAmount: "$500",
      _id: "26874ysadhfdkajsl",
    },
    {
      createDate: "Tue, 24 Oct 2023 12:57:16 +0000",
      trustAmount: "$650",
      status: "Returned",
      paymentAmount: "$650",
      _id: "26874ysatdhfkajsl",
    },
    {
      createDate: "Tue, 24 Oct 2023 01:16:09 +0000",
      trustAmount: "$450",
      status: "Pending",
      paymentAmount: "$450",
      _id: "26874ysasdhfkajsl",
    },
    {
      createDate: "Mon, 23 Oct 2023 23:35:38 +0000",
      trustAmount: "$500",
      status: "paid",
      paymentAmount: "$500",
      _id: "26874ysadhfdkajsl",
    },
  ]);

  return (
    <div className="mt-6 border-[#3048AD] p-[1px] rounded-2xl w-full">
      <div className="h-full rounded-2xl py-4 px-8 max-w-full">
        {originalData.length ? (
          <div className="relative">
            <div className="relative flex justify-between mb-3 mt-1    w-full flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
              {originalData.length ? (
                <Grid
                  data={originalData.map((x) => [
                    x.createDate,
                    x.trustAmount,
                    x.status,
                    x.paymentAmount,
                    x._id,
                  ])}
                  columns={[
                    {
                      name: "Created Date",
                      formatter: (cell) => {
                        const date = new Date(cell);
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();

                        return `${month}/${day}/${year}`;
                      },
                    },
                    {
                      name: "Trust Amount",
                    },
                    {
                      name: "Status",
                      formatter: (cell) => {
                        return _(
                          <div className="inline-flex justify-center items-center">
                            <span
                              className={`py-1 px-2.5 rounded-[0.5rem] ${
                                cell == "paid"
                                  ? "bg-[#064E3B] text-[#ECFDF5]"
                                  : cell == "Pending"
                                  ? "bg-[#D7D7FF] text-[#090858]"
                                  : cell == "Returned"
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
                      name: "Trust Amount",
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
                    th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-base whitespace-nowrap font-semibold text-center border-b border-[#E7EAEE]",
                    td: "border-t-0 px-1 md:px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-2 md:p-4  text-center text-[#64748B] border-b border-[#E7EAEE]",
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

export default PaymentOverView;
