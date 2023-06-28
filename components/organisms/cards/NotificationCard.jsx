import Container from "../../templates/Container";

const NotificationItem = () => {
    return (
      <Container className="flex flex-col gap-4 pb-5 mt-12">
        <div className="flex gap-3 even:border-t even:border-neutral-2">
          <span className="material-icons-round text-primary-4/50">
            circle_notifications
          </span>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-3">Promosi</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-3">20 Maret, 14:04</span>
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </div>
            </div>
            <h2 className="text-base text-black">
              Dapatkan Potongan 50% Tiket!
            </h2>
          </div>
        </div>
        <div className="even:w-full even:h-[1px] even:bg-neutral-2"></div>
        <div className="flex gap-3">
          <span className="material-icons-round text-primary-4/50">
            circle_notifications
          </span>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-3">Notifikasi</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-3">5 Maret, 14:04</span>
                <div className="w-2 h-2 bg-danger rounded-full"></div>
              </div>
            </div>
            <h2 className="text-base text-black">
              Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!
            </h2>
          </div>
        </div>
      </Container>
    )
  }
  
  export default NotificationItem;