import { CategoryData } from "types";
import { DetailType } from "./../types/detail";
import {
  CategoryListType,
  BrandListType,
  ProductDetail,
  BrandTitle,
  ItemsList,
} from "./../types/index";
import { instance } from "./axios";

export const getCategory = async () => {
  try {
    const { data } = await instance.get(`/con-category1s`);
    return data.conCategory1s;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`category Error: ${e.message}`);
    }
  }
};

export const getSaleItems = async () => {
  try {
    const response = await instance.get(`/con-items/soon`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`getSaleItems Error: ${e.message}`);
    }
  }
};

export const getBrand = async (id: number) => {
  const response = await instance.get<BrandListType>(
    `/con-category1s/${id}/nested`
  );
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response.data.conCategory1;
};

export const getProductList = async (id: number) => {
  const response = await instance.get<ItemsList>(
    `con-items/?conCategory2Id=${id}`
  );
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response.data;
};

export const getProductDetail = async (id: number) => {
  const response = await instance.get<{ conItem: DetailType }>(
    `con-items/${id}`
  );
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response.data;
};

export const getBrandTitle = async (id: number) => {
  const response = await instance.get<BrandTitle>(`con-category2s/${id}`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response.data;
};

export const getFAQType = async () => {
  const response = await instance.get(`https://api2.ncnc.app/qa-types`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response;
};

export const getFAQContent = async (id: number) => {
  const response = await instance.get(`api2.ncnc.app/qas?qaTypeId=${id}`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response;
};
