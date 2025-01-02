import React from "react";
import SaleTitle from "components/Main/SaleTitle";
import ListContainer from "components/itemList/listContainer";

const getSaleData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/con-items/soon`, {
    cache: "force-cache",
    next: { revalidate: 86400, tags: ["main"] },
  });
  const data = await res.json();
  return data;
};

const Sales = async () => {
  const salesData = await getSaleData();

  return (
    <>
      <SaleTitle />
      <ListContainer items={salesData} />
    </>
  );
};

export default Sales;
