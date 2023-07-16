import React from "react";
import BrandList from "components/Brand/BrandList";
import Header from "components/common/Header";
import { Metadata } from "next";

type Params = { params: { brandId: string } };

const getBrandData = async (brandId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-category1s/${brandId}/nested`
  );
  const data = await res.json();
  return data.conCategory1;
};

export const generateMetadata = async ({
  params: { brandId },
}: Params): Promise<Metadata> => {
  try {
    const data = await getBrandData(Number(brandId));

    return {
      title: `ncnc | ${data.name}`,
      description: ` ${data.conCategory2s[0].name}, ${data[1]?.name}, ${data[2]?.name}, ${data[3]?.name}..`,
      openGraph: {
        url: `https://ncnc.vercel.app/item/${brandId}`,
        title: `ncnc | ${data.name}`,
        siteName: "ncnc",
        description: ` ${data.conCategory2s[0].name}, ${data[1]?.name}, ${data[2]?.name}, ${data[3]?.name}..`,
        images: [
          {
            url: `${data.conCategory2s[0].imageUrl}`,
            width: 80,
            height: 80,
            alt: "brand:",
            type: "image/png",
          },
        ],
      },
    };
  } catch (e) {
    return {
      title: "ncnc | Not found",
      description: "The resource you were looking for does not exist",
    };
  }
};

export default async function Page({ params: { brandId } }: Params) {
  const data = await getBrandData(Number(brandId));
  return (
    <>
      <Header title={data.name} />
      <BrandList brands={data?.conCategory2s} />
    </>
  );
}
