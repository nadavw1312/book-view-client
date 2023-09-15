import { XMarkIcon } from "@heroicons/react/24/solid";
import { deleteBook } from "../api";
import { useContext, useState } from "react";
import { homeContext } from "../context/homeContext";

type DeleteModalProps = {
  id: string;
  onClose: () => void;
};

const DeleteModal = ({ onClose, id }: DeleteModalProps) => {
  const [error, setError] = useState("");
  const { setRefresher } = useContext(homeContext);

  const removeBook = async () => {
    try {
      await deleteBook(id as string);
      setRefresher((prev: number) => prev + 1);
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return (
    <div className="bg-[#00000069] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto m-10  max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="p-8 lex flex-col gap-2 relative">
            <XMarkIcon
              className="h-6 w-6 text-red-800 cursor-pointer absolute top-2 right-2"
              onClick={onClose}
            />
            <div className="flex flex-col h-full">
              <p className="text-red-500 h-8 flex-1">{error ? error : ""}</p>
              <p className="text-black">
                Click the button if you sure you want to delete the book
              </p>
              <button
                className="p-2 bg-red-500 w-min self-center m-2"
                onClick={() => removeBook()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
