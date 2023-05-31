import { IChildren, IParent } from "@/interfaces/IForm";

export interface IRecord {
  id: number;
  parent: IParent;
  children: IChildren[];
}
