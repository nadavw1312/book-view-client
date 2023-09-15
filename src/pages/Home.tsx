import { useContext, useEffect, useState } from "react";
import BooksTable from "../components/home-view/BooksTable";
import CardGrid from "../components/home-view/CardGrid";
import { getBooks } from "../api";
import { BreakPointContext } from "../context/breakPointContext";
import { homeContext } from "../context/homeContext";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { IBook } from "../types/book";
import Pagination from "../components/Pagination";
import TooManyItemsModal from "../components/TooManyItemsModal";
import PageLoader from "../components/PageLoader";

const Home = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("table");
  const breakPoint = useContext(BreakPointContext);
  const { refresher } = useContext(homeContext);
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTooManyChildrenModal, setShowTooManyChildrenModal] =
    useState(false);
  const [error, setError] = useState("");
  const [itemsToShow, setItemsToShow] = useState<IBook[]>([]);

  const loadBooks = () => {
    getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    loadBooks();
  }, []);

  useEffect(() => {
    setView("table");
    console.log(window.location.hash);
    if (window.location.hash === "#cardGrid") {
      setView("cardGrid");
    }
  }, []);

  useEffect(() => {
    if (breakPoint.sm && !isLoading) {
      setView("cardGrid");
    }
  }, [breakPoint.sm, isLoading]);
  useEffect(() => {
    loadBooks();
  }, [refresher]);

  useEffect(() => {
    window.location.assign(`#${view}`);
  }, [view]);

  const handlePageChange = (currPageItems: IBook[]) => {
    console.log(currPageItems);
    setItemsToShow([...currPageItems]);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    !isLoading && (
      <div className="min-h-screen w-full">
        <div className=" text-white  p-4 mx-4 rounded-md shadow-md shadow-black">
          <div className="flex flex-row gap-2 items-center justify-center mb-6 text-4xl">
            <button
              className="bg-slate-800 text-white px-4 py-2 rounded-sm"
              onClick={() => setView("table")}
            >
              table
            </button>
            <button
              className="bg-slate-800 text-white px-4 py-2 rounded-sm"
              onClick={() => setView("cardGrid")}
            >
              card
            </button>
          </div>

          <div className="flex flex-row mb-2">
            <p className=" text-white flex-1 text-lg font-bold">Books:</p>
            <PlusCircleIcon
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => {
                books.length >= 50
                  ? setShowTooManyChildrenModal(true)
                  : navigate("/books/create");
              }}
            />
            {showTooManyChildrenModal && (
              <TooManyItemsModal
                onClose={() => setShowTooManyChildrenModal(false)}
              />
            )}
          </div>
          <div>
            <div className=" min-h-[650px] overflow-auto">
              {view === "table" ? (
                <BooksTable books={itemsToShow} />
              ) : (
                <CardGrid books={itemsToShow} />
              )}
            </div>
            <Pagination items={books} handlePageChange={handlePageChange} />
          </div>
        </div>
      </div>
    )
  );
};
export default Home;
