import { ThreeDots } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgba(255, 186, 158, 0.836)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};
export default PageLoader;
