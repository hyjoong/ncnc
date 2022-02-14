import { useState } from "react";
import { getBrands } from "./../api/api";
import useRequest from "./useRequest";

const useBrandList = () => {
  const [results, setResults] = useState<any[]>();

  const { loading, responseOK } = useRequest(async () => {
    const response = await getBrands();
    setResults(response.data.conCategory1.conCategory2s);
  });

  return { results, loading, responseOK };
};

export default useBrandList;
