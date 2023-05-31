export interface IParent {
  name: string;
  age: string;
}
export interface IChildren extends IParent {
  id: number;
}
