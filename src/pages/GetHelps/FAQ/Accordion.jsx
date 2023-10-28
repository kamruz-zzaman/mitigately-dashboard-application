import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="bg-white py-5 px-14 cursor-pointer rounded-2xl my-5"
            onClick={() => toggleAccordion(index)}
            style={{ boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)" }}
          >
            <div className="flex justify-between items-center font-Jost text-[18px] md:text-[22px]">
              <span>{item.title}</span>
              <span>
                {openAccordion === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.6839 0.68321C16.1054 1.09952 16.1054 1.7745 15.6839 2.19081L9.98651 7.81835C9.98651 7.81835 9.9865 7.81835 9.98651 7.81835C8.89218 8.89926 7.1078 8.89927 6.01348 7.81835L0.316111 2.19081C-0.105368 1.7745 -0.10537 1.09952 0.316107 0.683208C0.737584 0.266893 1.42093 0.266892 1.84241 0.683205L7.53978 6.31074C7.79115 6.55903 8.20883 6.55904 8.4602 6.31074L14.1576 0.683204C14.5791 0.266892 15.2624 0.266895 15.6839 0.68321Z"
                        fill="#292D32"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.18333 0.816105C1.59965 0.394629 2.27462 0.394632 2.69094 0.816111L8.31847 6.51349C8.31847 6.51349 8.31847 6.51349 8.31847 6.51349C9.39939 7.60782 9.39939 9.3922 8.31847 10.4865L2.69094 16.1839C2.27462 16.6054 1.59965 16.6054 1.18333 16.1839C0.767016 15.7624 0.767015 15.0791 1.18333 14.6576L6.81087 8.96022C7.05916 8.70885 7.05916 8.29117 6.81087 8.0398L1.18333 2.34241C0.767014 1.92093 0.767017 1.23758 1.18333 0.816105Z"
                        fill="#292D32"
                      />
                    </svg>
                  </span>
                )}
              </span>
            </div>
          </div>
          {openAccordion === index && (
            <div className="px-14 font-Jost text-[19px]">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
