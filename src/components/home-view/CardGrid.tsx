import { IBook } from "../../types/book";
import BookCard from "./BookCard";

type CardGridProps = {
  books: IBook[];
};

const CardGrid = ({ books }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard
          key={book._id}
          title={book.title}
          id={book._id}
          author={book.author}
          publishYear={book.publishYear}
        />
      ))}
    </div>
  );
};
export default CardGrid;
