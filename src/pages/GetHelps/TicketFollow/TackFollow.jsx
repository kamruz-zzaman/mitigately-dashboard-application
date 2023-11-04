import { useState } from "react";

import notificationIcons from "../../../assets/AccountLinks/notification.svg";
import profileImg from "../../../assets/AccountLinks/profile-image.png";
import userImg from "../../../assets/user2.jpg";

const TackFollow = () => {
  const [notificationStatus, setNotificationStatus] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  // file uploads
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // calculate Day
  const calculateDay = (data) => {
    const date = new Date(data);
    const day = date.getDate();

    return `${day}`;
  };

  return (
    <section>
      <div className="container mx-auto">
        {/* head part */}

        <div>
          <h1 className="text-[#191D23] font-bold text-3xl">
            Ticket # - Ticket Subject
            <span className="py-1 px-2.5 bg-[#ECFDF5] text-[#064E3B] rounded text-xs ml-4">
              Solved
            </span>
          </h1>

          {/*  */}
          <div className="mt-10">
            <div>
              {/* chating items */}
              <div>
                <div className="flex flex-col gap-[1.625rem]">
                  {/* user profile */}
                  <div className="flex items-center gap-3">
                    <figure className="w-[3.3rem] h-[3.3rem] rounded-full">
                      {/* <img
                        className="w-full h-full rounded-full"
                        src={userImg}
                        alt="user image"
                      /> */}
                      <img
                        className="w-full h-full rounded-full"
                        src="https://img.icons8.com/nolan/64/user-default.png"
                        alt="user-default"
                      />
                    </figure>

                    <div className="flex flex-col">
                      <h1 className="font-semibold"> corey Seamon </h1>
                      <p className="text-[#C4C4C4] font-normal text-xs">
                        {" "}
                        {calculateDay("Tue, 24 Oct 2023 12:57:16 +0000")} days
                        ago{" "}
                      </p>
                    </div>
                  </div>

                  {/* user text */}
                  <div>
                    <p>
                      Hey,I just made some changes to my gig yesterday and saw
                      this message. Can you help me with this? Thank you!!
                    </p>
                  </div>
                </div>

                <hr className="border-[#C4C4C4] my-6" />

                <div className="flex flex-col gap-[1.625rem]">
                  {/* user profile */}
                  <div className="flex items-center gap-3">
                    <figure className="w-[3.3rem] h-[3.3rem] rounded-full">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://img.icons8.com/nolan/64/user-default.png"
                        alt="user-default"
                      />
                    </figure>

                    <div className="flex flex-col">
                      <h1 className="font-semibold"> corey Seamon </h1>
                      <p className="text-[#C4C4C4] font-normal text-xs">
                        {" "}
                        {calculateDay("Tue, 10 Oct 2023 12:57:16 +0000")} days
                        ago{" "}
                      </p>
                    </div>
                  </div>

                  {/* user text */}
                  <div>
                    <p>
                      Hey,I just made some changes to my gig yesterday and saw
                      this message. Can you help me with this? Thank you!!
                    </p>
                  </div>
                </div>
              </div>

              <form className="mt-7">
                {/* text field */}
                <textarea className="w-full min-h-[3rem] h-[6.8125rem] outline-none border border-[#C4C4C4] p-3 resize-none"></textarea>

                {/* Attachment */}
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
                          boxShadow:
                            "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
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

                {/* submit button */}
                <div className="w-full text-center">
                  <button
                    className="py-5 px-5 text-center text-[18px] md:text-[20px] font-Jost capitalize font-semibold leading-6 text-white bg-[#0070D2] rounded-md max-w-2xl w-full mt-7"
                    type="submit"
                  >
                    {" "}
                    Create Follow-up{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TackFollow;
