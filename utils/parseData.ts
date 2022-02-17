import { Option } from "./../types/index";

export const parseOptionData = (option: Option) => {
  const optionItem = {
    id: option.count,
    count: option.count,
    sellingPrice: option.sellingPrice,
    expireAt: new Date(option.expireAt).toISOString().split("T")[0],
  };
  return optionItem;
};

export const parseOptionDataList = (options: Option[]) => {
  return options.map(parseOptionData);
};

export const parseDate = (date: string) =>
  new Date(date).getFullYear() +
  "." +
  new Date(date).getMonth().toString().padStart(2, "0") +
  "." +
  new Date(date).getDate().toString().padStart(2, "0");
