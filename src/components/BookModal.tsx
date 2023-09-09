import { XMarkIcon } from "@heroicons/react/24/solid";
import { IBook } from "../types/book";

type BookModalProps = {
  book: IBook;
  onClose: () => void;
};

const BookModal = ({ onClose, book }: BookModalProps) => {
  return (
    <div className="bg-[#00000069] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-600 bg-fuchsia-300 p-1 rounded-md">{`${book.publishYear}`}</p>
              <XMarkIcon
                className="h-6 w-6 text-red-800 cursor-pointer"
                onClick={onClose}
              />
            </div>
            <p className="flex-1 text-gray-600  font-semibold">{book._id}</p>
            <h2 className="text-gray-600 text-xl font-semibold">
              {book.title}
            </h2>
            <p className="text-gray-600">{`Author: ${book.author}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
