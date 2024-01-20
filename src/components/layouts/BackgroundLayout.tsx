import LandingHeader from "./LandingHeader";

export const BackgroundLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <LandingHeader />
      <div className="w-full bg-white rounded-t-[40px] flex items-center flex-col pb-12 mt-[-35px]">
        <div className="min-w-[855px]">
          {children}
        </div>
      </div>
    </>
  );
};
