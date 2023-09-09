import { XMarkIcon } from "@heroicons/react/24/solid";

type DeleteModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const DeleteModal = ({ onClose, children }: DeleteModalProps) => {
  return (
    <div className="bg-[#00000069] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="p-8 lex flex-col gap-2 relative">
            <XMarkIcon
              className="h-6 w-6 text-red-800 cursor-pointer absolute top-2 right-2"
              onClick={onClose}
            />
            <div className="flex flex-col h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
