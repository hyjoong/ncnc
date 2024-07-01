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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
