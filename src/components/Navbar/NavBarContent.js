import React from "react";
import DropDown from "./DropDown";
const NavBarContent = (props) => {
  return (
    <div className={"relative"}>
      <ul
        className={
          "flex lg:flex-row flex-col flex-wrap text-left space-y-7 lg:space-y-0 space-x-0 lg:space-x-7 text-sm  font-light text-sub"
        }
      >
        <li
          className={
            "hover:text-red-800 cursor-pointer duration-300 ease-in-out"
          }
        >
          Home
        </li>
        <DropDown
          name={"Colleges"}
          addLinks={[
            {
              name: "Business Informatics",
              path: "https://uoitc.edu.iq/page569874bic.php",
            },
            {
              name: "Engineering",
              path: "https://uoitc.edu.iq/page569874eng.php",
            },
            {
              name: "Medical",
              path: "https://uoitc.edu.iq/page569874bmic.php",
            },
          ]}
        />
        <DropDown
          name={"Centers & Dep"}
          addLinks={[
            {
              name: "Quality Assurence",
              path: "https://uoitc.edu.iq/page569874qa.php",
            },
            {
              name: "Continuing Education Center",
              path: "https://uoitc.edu.iq/page569874cl.php",
            },
          ]}
        />

        <DropDown
          name={"Services"}
          addLinks={[
            { name: "IJCI", path: "https://ijci.uoitc.edu.iq/index.php/ijci" },
            { name: "E-gate", path: "https://www.dirasat-gate.org/" },
            {
              name: "Business Informatics",
              path: "https://moodle.uoitc.edu.iq/",
            },
            {
              name: "Smart Cities",
              path: "https://uoitc.edu.iq/page569874scc.php",
            },
            { name: "Virtual Library", path: "https://moodle.uoitc.edu.iq/" },
            {
              name: "Scientific and Advisory Services Office",
              path: "https://uoitc.edu.iq/page569874saso.php",
            },
            { name: "Digital Contents", path: "https://dc.uoitc.edu.iq/" },
            {
              name: "Open Data",
              path: "https://uoitc.edu.iq/page569874saso.php",
            },
            {
              name: "Citizens Affairs",
              path: "https://www.uoitc.edu.iq/affairs.php",
            },
            {
              name: "iOS App",
              path: "https://apps.apple.com/us/app/uoitc/id1496550016",
            },
            {
              name: "Android App",
              path: "https://play.google.com/store/apps/details?id=iq.edu.uoitc",
            },
          ]}
        />

        <DropDown
          name={"Media"}
          addLinks={[
            {
              name: "Video & Image",
              path: "https://www.uoitc.edu.iq/events_gallery/",
            },
            {
              name: "Documents Post",
              path: "https://uoitc.edu.iq/documents569874.php",
            },
          ]}
        />
        <li
          className={
            "hover:text-red-800 cursor-pointer duration-300 ease-in-out"
          }
        >
          I3CAT
        </li>
        <li
          className={
            "hover:text-red-800 cursor-pointer duration-300 ease-in-out"
          }
        >
          NTICT21
        </li>
      </ul>
    </div>
  );
};

export default NavBarContent;
