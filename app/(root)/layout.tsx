import { Metadata } from "next";

export const metadata: Metadata = {
  title: "니콘내콘",
  description:
    "기프티콘 판매 및 구매 1위 플랫폼, 스타벅스 기프티콘부터 모바일상품권까지 일상에서의 할인을 받아보세요.",
  keywords:
    "기프티콘, 기프티콘판매, 기프티콘구매, 기프티콘거래, 기프티콘할인, 모바일상품권, 모바일쿠폰, e쿠폰, 스타벅스상품권, 스타벅스기프티콘, 편의점기프티콘",
  openGraph: {
    url: `https://ncnc.vercel.app`,
    title: "니콘내콘 - 국내 1위 기프티콘 플리마켓",
    description:
      "기프티콘 판매 및 구매 1위 플랫폼, 스타벅스 기프티콘부터 모바일상품권까지 일상에서의 할인을 받아보세요.",
  },
  verification: {
    google: "Ldsw3HdA79_kyMAjRpsoY-3gkz9EEn5jWEjWA-02sww",
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
