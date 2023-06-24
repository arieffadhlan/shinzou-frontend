import ButtonLink from "./ButtonLink";

const EditDataProfil = () => {
	return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-xl font-bold text-neutral-5">Ubah Data Profil</h1>
        <div class="rounded-t-lg bg-[#A06ECE] h-[40px] ">
          <span className="font-medium text-base text-neutral-5 text-white flex text-center">Data Diri</span>
        </div>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="font-bold text-base text-neutral-5 text-primary-5"
            >
              Nama Lengkap
            </label>
            <div className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <span className="font-medium text-base text-neutral-5">Harry</span>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="font-bold text-base text-neutral-5 text-primary-5"
            >
              Nomor Telepon
            </label>
            <div className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <span className="font-medium text-base text-neutral-5">+62 897823232</span>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="font-bold text-base text-neutral-5 text-primary-5"
            >
              Email
            </label>
            <div className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <span className="font-medium text-base text-neutral-5">Johndoe@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center px-4 pb-4">
          <ButtonLink
              href="/"
              size="md"
              variant="primary"
              className="!w-[150px] px-11 bg-primary-5"
            >
              Simpan
          </ButtonLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDataProfil;