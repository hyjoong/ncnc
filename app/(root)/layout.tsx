import { Metadata } from "next";

export const metadata: Metadata = {
  title: "니콘내콘",
  description: "니콘내콘에서 물건을 사고 파세요",
  openGraph: {
    url: `https://ncnc.vercel.app`,
    title: "니콘내콘",
    description: "니콘내콘에서 물건을 사고 파세요",
  },
};

export default function RootLayout({
  children,
  category,
  sales,
}: {
  children: React.ReactNode;
  category: React.ReactNode;
  sales: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {category}
      {sales}
    </div>
  );
}
