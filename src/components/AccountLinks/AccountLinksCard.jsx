import { Link } from "react-router-dom";

const AccountLinksCard = ({ account }) => {
  const { logo, balance, createdDate } = account;
  return (
    <Link
      style={{ boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)" }}
      className="w-full px-4 sm:px-8 py-6 sm:py-10 flex flex-col items-center justify-around gap-1 text-center rounded-xl"
      to=""
    >
      <figure className="w-11/12">
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
            Creation Date
          </h5>
          <p className="text-[#A5B4CB] text-sm"> {createdDate} </p>
        </div>
      </div>
    </Link>
  );
};

export default AccountLinksCard;
