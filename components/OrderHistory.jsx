import ButtonLink from "./ButtonLink";
import Container from "./layouts/Container";

const OrderHistory = () => {
  return (
    <>
      <section className="shadow-xs">
        <Container
          htmlTag="div"
          className="flex flex-col gap-6 pt-[132px] pb-5"
        >
          <h1 className="font-bolt text-xl">Riwayat pemesanan</h1>

          <div className="flex flex-col items-center gap-3 w-full lg:flex-row ">
            <ButtonLink
              href="/"
              size="md"
              variant="primary"
              className="flex-[65%] justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5 lg:w-auto xl:flex-[75%]"
            >
              <span className="material-icons-round">arrow_back</span>
              Beranda
            </ButtonLink>
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 border border-primary-4 rounded-2xl font-medium text-xs text-black active:bg-primary-5 active:text-neutral-1"
            >
            <span className="material-icons-round !text-[20px]">filter_alt</span>
              Filter
            </button>
            <span className="material-icons-round text-primary-5 !text-[24px]">
              search
            </span>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OrderHistory;
