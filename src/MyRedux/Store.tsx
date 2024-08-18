export interface Family {
  FatherFullName: string;
  mother: string;
  sister: string;
  sisterIsMarried: boolean;
}

export interface IStore {
  name: string;
  last: string;
  age: number;
  married: boolean;
  family: Family;
  hobbies: string[];
}

export const store: IStore = {
  age: 0,
  family: {
    FatherFullName: "",
    mother: "",
    sister: "",
    sisterIsMarried: true,
  },
  hobbies: [],
  name: "",
  last: "",
  married: false,
};
