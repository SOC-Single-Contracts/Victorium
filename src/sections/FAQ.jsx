import FAQ from "../components/FAQ";
import Button from "../components/Button";

function FAQSection() {
  return (
    <>
      <div className="mt-32 px-8 md:px-32">
        <FAQ />;
        <div className="bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA] py-[64px] flex flex-col items-center text-center gap-[24px] rounded-md">
          <h3 className="text-[36px] md:text-[40px] font-bold px-3 leading-tight md:leading-normal">
            Have Any Queries? Get In Touch
          </h3>
          <Button normalcase="true" arrow="true">
            info@victoriamai.com
          </Button>
        </div>
      </div>
    </>
  );
}

export default FAQSection;
