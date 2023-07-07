import Button from "../atoms/Button";

const AboutShinzou = () => {
  return (
    <section className="flex justify-center items-center px-6 py-12 mt-16 sm:px-8 sm:py-15">
      <div className="flex flex-col max-w-2xl lg:max-w-xl text-center">
        <h2 className="font-bold text-xl text-primary-5 sm:text-2xl">
          Shinzou
        </h2>
        <p className="mt-4 mb-6 text-sm text-neutral-4 sm:text-base">
          Shinzou adalah platform pemesanan tiket pesawat terbaik yang menyediakan berbagai tiket pesawat yang dapat Anda cari dan beli untuk memudahkan kebutuhan perjalanan Anda.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button variant="primary" size="md">
            Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutShinzou;