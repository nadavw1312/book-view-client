import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const FormPage = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-20 p-2">
        <button className="flex items-center justify-center p-2 bg-slate-400 rounded-xl">
          <ArrowUturnLeftIcon
            className="h-6 w-6"
            onClick={() => navigate(-1)}
          />
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center min-h-[calc(100vh_-_5.5rem)]">
        {children}
      </div>
    </>
  );
};
export default FormPage;
