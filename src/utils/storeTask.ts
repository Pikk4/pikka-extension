import { IStoreConfig } from "@interface/store-config-interface";
import { ITask } from "@interface/task-interface";
import { StoreTask } from "../enum/store-task-enum";
import {IProduct} from "@interface/product-interface";

export function addProduct(configStore: IStoreConfig, productId: string) {
  return new Promise((resolve) => {
    const message: ITask<string> = {
      type: StoreTask.ADD_PRODUCT,
      store: configStore.id,
      data: productId,
    };
    chrome.runtime.sendMessage(message, (response) => {
      resolve(response);
    });
  });
}

export function getPriceProduct(configStore: IStoreConfig, productId: string): Promise<IProduct> {
  return new Promise(resolve => {
    const message: ITask<string> = {
      type: StoreTask.GET_PRODUCT_DATA,
      store: configStore.id,
      data: productId,
    };
    chrome.runtime.sendMessage(message, (response) => {
      resolve(response);
    });
  })
}
