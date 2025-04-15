import Link from "next/link";
import React from "react";

const Tab = ({ title }: { title: string }) => {
  return (
    <nav className="user-tabs mb-4">
      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
        <li className="nav-item">
          <a href="#" className={`nav-link active `} data-toggle="tab">
            {title}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Tab;
