import { useState } from "react";
import { CategoryData } from "./../types/index";
import { getCategory } from "api/api";
import useRequest from "./useRequest";

const useCategoryList = () => {
  const [results, setResults] = useState<CategoryData[]>();

  const { loading, responseOK } = useRequest(async () => {
    const response = await getCategory();
    setResults(response.data.conCategory1s);
  });

  return { results, loading, responseOK };
};

export default useCategoryList;
