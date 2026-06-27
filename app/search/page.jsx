// app/search/page.jsx or pages/search.js (depending on your Next.js version)
"use client";
import dynamic from "next/dynamic";

const SearchList = dynamic(() => import('@/components/common/SearchList'), {
  ssr: false,
});

export default function SearchPage() {
  return <SearchList />;
}
