import LandingHeader from "./LandingHeader";

export const BackgroundLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <LandingHeader />
      <div className="w-full bg-[#F8F8F8] rounded-t-[40px] flex items-center flex-col pb-12 mt-[-35px] z-10">
        <div className="min-w-[855px]">
          {children}
        </div>
      </div>
    </>
  );
};
