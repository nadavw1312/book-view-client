import Modal from "./Modal";

const TooManyItemsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose}>
      <p className="text-black">
        Too many items created, delete item in order to add
      </p>
    </Modal>
  );
};
export default TooManyItemsModal;
