import { useState } from "react";
import { IBookCreate } from "../types/book";

interface BookFormProps {
  initialValues?: IBookCreate;
  onSubmit: (values: IBookCreate) => void;
  error?: string;
  buttonText: string;
}

const BookForm = ({
  initialValues,
  onSubmit,
  error,
  buttonText,
}: BookFormProps) => {
  const [values, setValues] = useState(
    initialValues || { title: "", author: "", publishYear: "" }
  );

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(values as IBookCreate);
  };

  return (
    <form onSubmit={handleSubmit} className="w-72 sm:w-96">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-600 font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-600 font-medium">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="publishYear"
          className="block text-gray-600 font-medium"
        >
          Publish Year
        </label>
        <input
          type="number"
          id="publishYear"
          name="publishYear"
          value={values.publishYear}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {buttonText}
      </button>
      <p className=" text-red-600">{error && error}</p>
    </form>
  );
};

export default BookForm;
