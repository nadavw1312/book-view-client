import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import { IBookCreate } from "../types/book";
import { getBook, updateBook } from "../api";
import { useEffect, useState } from "react";
import FormPage from "../components/layout/FormPage";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const res = await getBook(id as string);
        setBook(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleEditBook = async (bookData: IBookCreate) => {
    // Handle editing the book data (e.g., sending it to an API or updating state)
    try {
      await updateBook(id as string, bookData);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setUpdateError(error.message);
      }
    }
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    !isLoading &&
    book && (
      <FormPage>
        <div className="light-transparent-container p-4">
          <h1 className="text-2xl font-semibold mb-4">Edit Book</h1>
          <BookForm
            initialValues={book as IBookCreate}
            onSubmit={handleEditBook}
            error={updateError}
            buttonText="Edit Book"
          />
        </div>
      </FormPage>
    )
  );
};

export default EditBook;
