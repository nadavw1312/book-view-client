export interface IBook {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

export interface IBookCreate extends Omit<IBook, '_id'> {}
