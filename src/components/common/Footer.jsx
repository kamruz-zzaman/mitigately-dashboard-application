import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-900  pt-8 pb-4 px-4 flex items-center gap-2 md:gap-0 flex-col md:flex-row md:justify-between">
      <p>&copy; {currentYear} mitigately. All Rights Reserved.</p>
      <div className="flex gap-3 text-blue-600 underline">
        <Link to="/">Terms and Conditions</Link>
        <Link to="/">Privacy and Policy</Link>
      </div>
    </footer>
  );
}
