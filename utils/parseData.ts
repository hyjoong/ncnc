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
