const NotificationItem = ({ data }) => {
  return (
    <div className="flex gap-3 even:pt-4 even:border-t even:border-neutral-2">
      <span className="material-icons-round text-primary-4/50">
        circle_notifications
      </span>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-3">Notifikasi</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-3">20 Maret, 14:04</span>
            <div className="w-2 h-2 bg-success rounded-full"></div>
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