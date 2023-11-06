import { Link } from "react-router-dom";

const AccountLinksCard = ({ account, idx }) => {
  const { logo, balance, createdDate } = account;
  return (
    <Link
      style={{ boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)" }}
      className={`w-full px-4 sm:px-8 pb-6  flex flex-col items-center justify-around gap-1 text-center rounded-xl ${
        idx === 0 ? "pt-8" : "pt-4"
      }`}
      to=""
    >
      <figure className={`${idx === 0 ? "w-8/12 mb-4" : "w-10/12 mb-0"}`}>
        <img className="w-full" src={logo} />
      </figure>

      <div className="flex flex-col gap-3">
        <div>
          <strong className="font-Jost font-bold text-[18px] md:text-[22px]">
            {balance}
          </strong>
          <p className="text-[#A5B4CB] text-sm"> Current Balance </p>
        </div>

        <div>
          <h5 className="font-Jost font-bold text-[18px] md:text-[22px]">
            Link Date
          </h5>
          <p className="text-[#A5B4CB] text-sm"> {createdDate} </p>
        </div>
      </div>
    </Link>
  );
};

export default AccountLinksCard;
