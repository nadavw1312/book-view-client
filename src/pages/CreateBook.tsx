import { useState } from "react";
import { createBook } from "../api";
import BookForm from "../components/BookForm";
import { IBookCreate } from "../types/book";
import { useNavigate } from "react-router-dom";
import FormPage from "../components/layout/FormPage";


const CreateBook = () => {
  const navigate = useNavigate();
  const [updateError, setUpdateError] = useState("");

  const handleAddBook = async (bookData: IBookCreate) => {
    try {
      await createBook(bookData);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setUpdateError(error.message);
      }
    }
  };

  return (
    <FormPage>
      <div className="light-transparent-container p-4">
        <h1 className="text-2xl font-semibold mb-4">Add Book</h1>
        <BookForm
          onSubmit={handleAddBook}
          error={updateError}
          buttonText="Create Book"
        />
      </div>
    </FormPage>
  );
};

export default CreateBook;
