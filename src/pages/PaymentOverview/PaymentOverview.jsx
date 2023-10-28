import { useState } from "react";

const PaymentOverview = () => {
  const [originalData, setOriginalData] = useState([
    {
      departments: "Sales",
      createDate: "Tue, 24 Oct 2023 13:27:05 +0000",
      AgentName: "John Doe",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Marketing",
      createDate: "Tue, 24 Oct 2023 13:27:04 +0000",
      AgentName: "Jane Doe",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Customer Support",
      createDate: "Tue, 24 Oct 2023 12:57:16 +0000",
      AgentName: "Peter Jones",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Engineering",
      createDate: "Tue, 24 Oct 2023 01:16:09 +0000",
      AgentName: "Mary Smith",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Product Management",
      createDate: "Mon, 23 Oct 2023 23:35:38 +0000",
      AgentName: "David Williams",
      _id: "26874ysadhfkajsl",
    },
  ]);
  return (
    <div
      className="mt-6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full"
      style={{
        background: `linear-gradient(to right, #2d2d47, #3048AD) `,
      }}
    >
      <div className="h-full bg-[#1C1C2E] rounded-2xl py-4 px-8 max-w-full">
        {originalData.length ? (
          <div className="relative">
            <div className="relative flex justify-between mb-3 mt-1    w-full flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
              {originalData.length ? (
                <Grid
                  data={originalData.map((x) => [
                    x.departments,
                    x.createDate,
                    x.AgentName || " ",
                    x._id,
                  ])}
                  columns={[
                    {
                      name: `Departments`,
                    },
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
                      name: "Agents Name",
                    },
                    {
                      name: "Actions",
                      formatter: (cell) => {
                        // return cell;
                        return _(
                          <div className="flex justify-center items-center gap-5 ">
                            <button
                              onClick={() => handleDelete(cell)}
                              className="w-6 h-6 flex justify-center items-center"
                            >
                              <img
                                className="w-full h-full rounded-sm"
                                src={deleteIcons}
                              />
                            </button>

                            <button
                              onClick={() => handleEdit(cell)}
                              className="w-6 h-6 flex justify-center items-center"
                            >
                              <img
                                className="w-full h-full rounded-sm"
                                src={editIcons}
                              />
                            </button>

                            <button
                              onClick={() => handleCancel(cell)}
                              className="w-6 h-6 flex justify-center items-center"
                            >
                              <img
                                className="w-full h-full rounded-sm"
                                src={cancelIcons}
                              />
                            </button>
                          </div>
                        );
                      },
                    },
                  ]}
                  search={false}
                  pagination={{
                    limit: 10,
                  }}
                  className={{
                    container: "",
                    table:
                      "items-center bg-transparent min-w-[80vw] lg:min-w-[70vw] border-collapse  font-Ar mt-6 mb-8 table-auto",
                    th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-base  bg-[#3637EA] whitespace-nowrap font-semibold text-center",
                    td: "border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4  text-center text-[#A6A6AD]",
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

export default PaymentOverview;
