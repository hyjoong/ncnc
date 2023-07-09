import React from "react";
import BrandList from "components/Brand/BrandList";
import Header from "components/common/Header";
import SEOHeader from "hooks/SEOHeader";

type Params = { params: { brandId: string } };

const getBrandData = async (brandId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-category1s/${brandId}/nested`
  );
  const data = await res.json();
  return data.conCategory1;
};

export default async function Page({ params: { brandId } }: Params) {
  const data = await getBrandData(Number(brandId));
  const brand = data.conCategory2s;
  return (
    <>
      <SEOHeader
        title={`${data.name}`}
        description={`${brand[0]?.name},${data[1]?.name},${brand[2]?.name},${brand[3]?.name}..`}
        imageUrl={`${brand[0].imageUrl}`}
        siteUrl={`https://ncnc.vercel.app/brand/${data.id}`}
      />
      <Header title={data.name} />
      <BrandList brands={data?.conCategory2s} />
    </>
  );
}
