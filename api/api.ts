import { CategoryListType } from "./../types/index";
import { instance } from "./axios";

export const getCategory = async () => {
  const response = await instance.get<CategoryListType>(`/con-category1s`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response;
};

export const getList = async () => {
  const response = await instance.get(`/con-items/soon`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response;
};

export const getBrands = async () => {
  const response = await instance.get(`/con-category1s/67/nested`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response;
};

export const getProductDetail = async (id: number) => {
  const response = await instance.get(`con-items/${id}`);
  if (response.status !== 200) {
    throw { status: response.status };
  }
  return response;
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
