import { IBook } from "../../types/book";
import { TrashIcon, PencilIcon, EyeIcon } from "@heroicons/react/24/solid";

import "./BooksTable.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookModal from "../BookModal";
import DeleteModal from "../DeleteModal";

type BooksTableProps = {
  books: IBook[];
};

const BooksTable = ({ books }: BooksTableProps) => {
  const navigate = useNavigate();
  const [showInfoModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Title</th>
            <th className="text-left">Author</th>
            <th className="text-left">Publish Year</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td className="flex flex-row gap-2 items-center">
                <EyeIcon
                  className="h-6 w-6 text-white cursor-pointer"
                  onClick={() => {
                    setSelectedBook({ ...book });
                    setShowModal(true);
                  }}
                />

                <PencilIcon
                  className="h-6 w-6 text-orange-500 cursor-pointer"
                  onClick={() => navigate(`/books/edit/${book._id}`)}
                />

                <TrashIcon
                  className="h-6 w-6 text-red-500 cursor-pointer"
                  onClick={() => {
                    setSelectedBook({ ...book });
                    setShowDeleteModal(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showInfoModal && selectedBook && (
        <BookModal book={selectedBook} onClose={() => setShowModal(false)} />
      )}
      {showDeleteModal && selectedBook && (
        <DeleteModal
          id={selectedBook?._id}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};
export default BooksTable;
