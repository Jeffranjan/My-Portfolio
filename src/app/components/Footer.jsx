import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <img
            className="h-12 w-12 rounded-full"
            src="/images/rg-logo.png"
            alt="logo"
          />
        </span>
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
