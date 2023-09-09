import { useNavigate } from "react-router-dom";
import { TrashIcon, PencilIcon, EyeIcon } from "@heroicons/react/24/outline";
import BookModal from "../BookModal";
import { useState } from "react";
import DeleteModal from "../DeleteModal";

type BookCardProps = {
  id: string;
  title: string;
  author: string;
  publishYear: number;
};

const BookCard = ({ id, title, author, publishYear }: BookCardProps) => {
  const navigate = useNavigate();
  const [showInfoModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 font-bold">
      <div className="flex flex-row">
        <p className="flex-1 text-gray-600  font-semibold">{id}</p>
        <p className="text-gray-600 bg-fuchsia-300 p-1 rounded-md">{`${publishYear}`}</p>
      </div>
      <h2 className="text-gray-600 text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{`Author: ${author}`}</p>
      <div className="flex justify-end gap-4 mt-4">
        <EyeIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        <PencilIcon
          className="h-6 w-6 text-orange-500 cursor-pointer"
          onClick={() => navigate(`/books/edit/${id}`)}
        />

        <TrashIcon
          className="h-6 w-6 text-red-500 cursor-pointer"
          onClick={() => setShowDeleteModal(true)}
        />
      </div>

      {showInfoModal && (
        <BookModal
          book={{ _id: id, title, author, publishYear }}
          onClose={() => setShowModal(false)}
        />
      )}
      {showDeleteModal && (
        <DeleteModal id={id} onClose={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
};
export default BookCard;
