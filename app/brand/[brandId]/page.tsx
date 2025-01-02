import React from "react";
import BrandList from "components/Brand/BrandList";
import Header from "components/common/Header";

type Params = Promise<{ brandId: string }>;

const getBrandData = async (brandId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URI}/con-category1s/${brandId}/nested`,
    { cache: "force-cache" },
  );
  const data = await res.json();
  return data.conCategory1;
};

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { brandId } = await params;

  try {
    const data = await getBrandData(Number(brandId));

    return {
      title: `ncnc | ${data.name}`,
      description: ` ${data.conCategory2s[0].name}, ${data.conCategory2s[1]?.name}, ${data.conCategory2s[2]?.name}, ${data.conCategory2s[3]?.name}..`,
      openGraph: {
        url: `https://ncnc.vercel.app/item/${brandId}`,
        title: `ncnc | ${data.name}`,
        siteName: "ncnc",
        description: ` ${data.conCategory2s[0]?.name}`,
        images: [
          {
            url: `${data.conCategory2s[0].imageUrl}`,
            width: 80,
            height: 80,
            alt: data.conCategory2s[0].name,
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

export default async function Page(props: { params: Params }) {
  const { brandId } = await props.params;

  const data = await getBrandData(Number(brandId));
  return (
    <>
      <Header title={data.name} />
      <BrandList brands={data?.conCategory2s} />
    </>
  );
}
