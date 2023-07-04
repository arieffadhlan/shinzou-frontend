"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, markAsRead } from "@/redux/features/notification/notificationAction";

import Container from "@/components/templates/Container";
import ButtonLink from "@/components/atoms/ButtonLink";
import NotificationItem from "@/components/organisms/cards/NotificationCard";

export default function Notification() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { notifications } = useSelector((state) => state.notification);
  const { user } = useSelector((state) => state.auth);

  const userNotifications = notifications.filter((notification) => {
    return notification.user_id === user.data.id;
  });

  useEffect(() => {
    dispatch(getNotifications());
  }, [])

  const handleMarkAsRead = () => {
    dispatch(markAsRead());
    router.refresh();
  }

  return (
    <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
          <h1 className="font-bold text-xl">
            Notifikasi
          </h1>
          <div className="flex flex-col items-center gap-5 w-full sm:flex-row sm:gap-3">
            <ButtonLink 
              href="/" 
              size="lg" 
              variant="primary" 
              className="justify-start gap-3 w-full bg-primary-3 xs:gap-4.5"
            >
              <span className="material-icons-round">arrow_back</span>
              Beranda
            </ButtonLink>
            <button type="button" onClick={handleMarkAsRead} className="flex items-center w-full px-4 py-2 border border-primary-4 rounded-lg whitespace-nowrap font-medium text-sm text-primary-4 hocus:border-primary-3 hocus:bg-primary-3 hocus:text-neutral-1 active:border-primary-5 active:bg-primary-5 active:text-neutral-1 sm:w-auto">
              Tandai Dibaca
            </button>
          </div>
        </Container>
      </section>
      
      {/* Notifications */}
      <Container className="flex flex-col gap-4 pb-5 my-12">
        {userNotifications.length > 0 ? (
          userNotifications.map((notification, index) => (
            <NotificationItem key={index} data={notification} />
          ))
        ) : (
          <div>Notifikasi kosong</div>
        )}
      </Container>
    </>
  )
}
