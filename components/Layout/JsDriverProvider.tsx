"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "../../styles/js-driver.css";
import { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
const driverObj = driver({
  showProgress: false,
  nextBtnText: "다음",
  prevBtnText: "이전",
  popoverClass: "driverjs-theme",
  steps: [
    {
      element: ".deLvMt",
      popover: { description: "메뉴 버튼을 클릭하면 사이드바가 나타납니다." },
    },
    {
      element: ".dRIXEg",
      popover: {
        description:
          "특정 카테고리 버튼을 클릭하면 해당 카테고리의 상품들을 볼 수 있습니다.",
      },
    },
    {
      element: ".itemListBox",
      popover: {
        description:
          "할인 상품을 클릭하면 해당 상품의 상세 페이지로 이동합니다.",
      },
    },
  ],
});
const JsDriverProvider = ({ children }: IProps) => {
  useEffect(() => {
    driverObj.drive();
  }, []);

  return <div>{children}</div>;
};

export default JsDriverProvider;
