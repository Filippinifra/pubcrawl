import React from "react";
import { useWindowSize } from "utils/sizeHook";

import { Circle } from "./styles";

import Pastiglie from "img/pastiglie.png";
import Condom from "img/condom.png";
import Birra from "img/birra.png";
import { TABLET_SIZE } from "constants/size";
import Gaspe from "img/gaspe.png";

export const ProhibitionIcons = () => {
  const { width } = useWindowSize();

  const isMobile = width < TABLET_SIZE;

  return (
    <div
      style={{
        position: isMobile ? "block" : "absolute",
        right: 0,
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <Circle>
          <img alt="Pastiglie" src={Pastiglie} style={{ height: 30, width: 30 }} />
        </Circle>
        <Circle>
          <img alt="condom" src={Condom} style={{ height: 30, width: 30 }} />
        </Circle>
        <Circle>
          <img alt="birra" src={Birra} style={{ height: 28, width: 28 }} />
        </Circle>
      </div>
      {!isMobile && <img alt="" src={Gaspe} style={{ height: 100, width: "fit-content", marginLeft: "auto", marginTop: 30 }} />}
    </div>
  );
};
