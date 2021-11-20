import { StoreTask } from "../enum/store-task-enum";

export interface ITask<T> {
  type: StoreTask;
  store: string
  data: T
}
