import { Link } from "react-router-dom";

// local files or image
import { useState } from "react";
import notificationIcons from "../../assets/AccountLinks/notification.svg";
import profileImg from "../../assets/AccountLinks/profile-image.png";

import AccountLinksCard from "../../components/AccountLinks/AccountLinksCard";
import data from "./AccountLinksData";

const AccountLinks = () => {
  const [notificationStatus, setNotificationStatus] = useState(true);
  const [originalData, setOriginalData] = useState(data);

  return (
    <section>
      <div className="">
        {/* head part */}
        <div className="flex items-center justify-end mb-10">
          <div className="flex items-center gap-5">
            {/* notification bel */}
            <div className="relative">
              <figure className="w-6 h-6">
                <img className="w-full h-full" src={notificationIcons} />{" "}
              </figure>
              {notificationStatus && (
                <span className="w-2 h-2 bg-[#7267CB] rounded-full absolute top-[3px] right-[3px]"></span>
              )}
            </div>

            {/* profile icons */}
            <div>
              <figure className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src={profileImg}
                  alt="profile image"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Body part */}
        <div
          style={{ boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)" }}
          className="m-1 p-8 rounded-xl"
        >
          {/* top links */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 text-center">
            <Link
              className="flex items-center gap-3 text-xl md:text-xl mb-4 sm:mb-0"
              to=""
            >
              <span>
                <svg
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.83511C0 0.821605 0.821605 0 1.83511 0H3.67021C4.68371 0 5.50532 0.821605 5.50532 1.83511V3.67021C5.50532 4.68371 4.68371 5.50532 3.67021 5.50532H1.83511C0.821605 5.50532 0 4.68371 0 3.67021V1.83511Z"
                    fill="#A5B4CB"
                  />
                  <path
                    d="M0 11.0106C0 9.99714 0.821605 9.17553 1.83511 9.17553H3.67021C4.68371 9.17553 5.50532 9.99714 5.50532 11.0106V12.8457C5.50532 13.8592 4.68371 14.6809 3.67021 14.6809H1.83511C0.821605 14.6809 0 13.8592 0 12.8457V11.0106Z"
                    fill="#A5B4CB"
                  />
                  <path
                    d="M18.3511 4.58777C17.3376 4.58777 16.516 5.40937 16.516 6.42287V8.25798C16.516 9.27148 17.3376 10.0931 18.3511 10.0931H20.1862C21.1997 10.0931 22.0213 9.27148 22.0213 8.25798V6.42287C22.0213 5.40937 21.1997 4.58777 20.1862 4.58777H18.3511Z"
                    fill="#A5B4CB"
                  />
                  <path
                    d="M8.25789 1.83511C7.75113 1.83511 7.34033 2.24592 7.34033 2.75267C7.34033 3.25942 7.75113 3.67022 8.25789 3.67022H9.17544C9.68219 3.67022 10.093 4.08102 10.093 4.58777V10.0931C10.093 10.5998 9.68219 11.0106 9.17544 11.0106H8.25789C7.75113 11.0106 7.34033 11.4214 7.34033 11.9282C7.34033 12.4349 7.75113 12.8458 8.25789 12.8458H9.17544C10.6957 12.8458 11.9281 11.6133 11.9281 10.0931V8.25799H13.7632C14.27 8.25799 14.6808 7.84718 14.6808 7.34043C14.6808 6.83368 14.27 6.42288 13.7632 6.42288H11.9281V4.58777C11.9281 3.06752 10.6957 1.83511 9.17544 1.83511H8.25789Z"
                    fill="#A5B4CB"
                  />
                </svg>
              </span>
              <span> Linked Accounts </span>
            </Link>

            <Link
              className="flex items-center gap-3 text-[#5E636A]  font-medium text-base"
              to=""
            >
              View all
              <span>
                <svg
                  width="5"
                  height="7"
                  viewBox="0 0 5 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.562919 0.245839C0.267645 0.541114 0.267645 1.01985 0.562919 1.31512L2.67462 3.42682L0.562919 5.53852C0.267645 5.8338 0.267645 6.31253 0.562919 6.60781C0.858194 6.90308 1.33693 6.90308 1.6322 6.60781L4.27854 3.96146C4.57382 3.66619 4.57382 3.18746 4.27854 2.89218L1.6322 0.245839C1.33693 -0.0494351 0.858194 -0.0494351 0.562919 0.245839Z"
                    fill="#777E91"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* body items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
            {originalData &&
              originalData.map((account, idx) => (
                <AccountLinksCard key={idx} account={account} />
              ))}

            <button className="bg-[#0070D280] py-[101px] px-16 w-full h-full flex flex-col items-center justify-around gap-1 text-center rounded-xl">
              <div className="text-white">
                <span className="mx-auto text-center ">
                  <svg
                    className="mx-auto"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6824 0C11.9804 0 0 11.9804 0 26.6824C0 41.3845 11.9804 53.3649 26.6824 53.3649C41.3845 53.3649 53.3649 41.3845 53.3649 26.6824C53.3649 11.9804 41.3845 0 26.6824 0ZM37.3554 28.6836H28.6836V37.3554C28.6836 38.4494 27.7764 39.3566 26.6824 39.3566C25.5885 39.3566 24.6813 38.4494 24.6813 37.3554V28.6836H16.0095C14.9155 28.6836 14.0083 27.7764 14.0083 26.6824C14.0083 25.5885 14.9155 24.6813 16.0095 24.6813H24.6813V16.0095C24.6813 14.9155 25.5885 14.0083 26.6824 14.0083C27.7764 14.0083 28.6836 14.9155 28.6836 16.0095V24.6813H37.3554C38.4494 24.6813 39.3566 25.5885 39.3566 26.6824C39.3566 27.7764 38.4494 28.6836 37.3554 28.6836Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </span>

                <p className="mt-4"> Add Account </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountLinks;
