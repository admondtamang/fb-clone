import React from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

export default function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Admond Tamang"
        src="https://miro.medium.com/max/3150/2*4An60Vc-r2PGnYJZp78T7g.jpeg"
      />
      <SidebarRow
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" Icon={LocalHospitalIcon} />
    </div>
  );
}
