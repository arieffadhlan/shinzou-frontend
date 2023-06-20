const NotifModal = () => {
    return(
        <>
            <div className="mt-4">
                <div className="w-[25rem] bg-white shadow-xl mx-auto rounded-2xl ">
                    <span className="material-icons-round cursor-pointer p-2 !text-[32px] text-neutral-5">close</span>
                    <div className="border-y-2 p-4">
                        <span className="material-icons-round cursor-pointer text-neutral-5">notifications</span>
                        <span>Status Pembayaran (Unpaid)</span>
                        <span>20 Maret, 14:04</span>
                        <h3>Selesaikan pembayaran Anda sebelum tanggal 10 Maret 2023!</h3>
                    </div>
                    <div className="pt-10"></div>
                </div>
            </div>
        </>
    )
}

export default NotifModal;