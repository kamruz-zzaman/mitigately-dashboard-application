import React, { useState } from "react";
import Profile from "../../components/common/Profile";

const CreateTicket = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <Profile />
      <div
        className="w-full p-5 rounded-2xl py-5 px-8 mt-8 pb-8"
        style={{ boxShadow: "-1px 4px 110px 9px rgba(0, 0, 0, 0.06)" }}
      >
        <div className="flex items-center gap-4">
          <p className="text-[22px] font-medium font-Jost text-[#141736]">
            Create Ticket for Your Problem
          </p>
        </div>

        <div className="max-w-[950px] w-full py-8 px-10 rounded-[10px] mt-10">
          <form className="w-full flex flex-col md:flex-row gap-6 mmd:gap-[74px] justify-between">
            <div className="w-full flex flex-col gap-6">
              <div>
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="email"
                    className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
                  >
                    Subject
                  </label>
                  <input
                    type="email"
                    style={{
                      boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                    }}
                    className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
                  />
                </div>
              </div>

              <div className="w-full flex gap-10">
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
                  >
                    Description
                  </label>
                  <textarea
                    type="number"
                    style={{
                      boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                    }}
                    className="font-Jost min-h-[100px] md:h-[200px] resize-none text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
                  >
                    Attachment
                  </label>
                  <div
                    className="focus:bg-[#00a2a4] overflow-hidden relative w-fullbg-[#00bcbe] flex justify-center py-4 border-[1px] border-[#C4C4C4]"
                    style={{
                      boxShadow: "-1px 4px 110px 9px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <input
                      type="file"
                      style={{
                        boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                      }}
                      onChange={handleFileChange}
                      className="absolute top-0 right-0 w-full h-full opacity-0 font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize cursor-pointer"
                    />
                    <span
                      className="w-full text-center text-[#A7A7A7] font-Jost text-[16px] md:text-[18px]"
                      onClick={() => {
                        document.getElementById("fileInput").click();
                      }}
                    >
                      Drag file here to upload or{" "}
                      <span className="text-[#0070D2]">browse</span>
                    </span>
                  </div>
                </div>
                {selectedFile && (
                  <div className="mt-2 font-Jost text-[14px]">
                    <p>Uploded file: {selectedFile.name}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center gap-7 mt-3">
                  <button className="w-full py-5 px-5 text-center text-[18px] md:text-[20px] font-Jost capitalize font-semibold leading-6 text-black bg-[#C4C4C4] rounded-md">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full py-5 px-5 text-center text-[18px] md:text-[20px] font-Jost capitalize font-semibold leading-6 text-white bg-[#0070D2] rounded-md"
                  >
                    Create Ticket
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
