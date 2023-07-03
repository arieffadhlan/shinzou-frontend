import dayjs from "dayjs";

const NotificationItem = ({ data }) => {
  const notificationDate = dayjs(data.createdAt).format("DD MMMM");
  const notificationTime = dayjs(data.createdAt).format("HH:mm");
  
  return (
    <div className="flex gap-3 pt-4 border-t border-neutral-2 first:pt-0 first:border-0">
      <span className="material-icons-round text-primary-4/50">
        circle_notifications
      </span>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-3">Notifikasi</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-3">{notificationDate}, {notificationTime}</span>
            <div className={`${data.mark_as_read ? "bg-success" : "bg-danger"} w-2 h-2 rounded-full`}></div>
          </div>
        </div>
        <h2 className="text-base text-black">
          {data.message}
        </h2>
      </div>
    </div>
  );
}
  
export default NotificationItem;