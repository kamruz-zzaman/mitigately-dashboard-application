import bank from "../../assets/AccountLinks/Bank-of-America-Logo.svg";
import chase from "../../assets/AccountLinks/Chase_logo.svg";
import usBancorp from "../../assets/AccountLinks/U.S._Bancorp-Logo.svg";

const AccountLinksData = () => {
  const LinksData = [
    {
      logo: chase,
      balance: "$12273459.4",
      createdDate: "Sep 16, 2023",
    },
    {
      logo: usBancorp,
      balance: "$12273459.4",
      createdDate: "Fab 20, 2023",
    },
    {
      logo: bank,
      balance: "$34828734.4",
      createdDate: "Fab 20, 2023",
    },
    {
      logo: bank,
      balance: "$34828734.4",
      createdDate: "Fab 20, 2023",
    },
    {
      logo: bank,
      balance: "$34828734.4",
      createdDate: "Fab 20, 2023",
    },
  ];

  return LinksData;
};

export default AccountLinksData;
