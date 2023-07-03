"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "@/redux/features/notification/notificationAction";

import Container from "@/components/templates/Container";
import ButtonLink from "@/components/atoms/ButtonLink";
import NotificationItem from "@/components/organisms/cards/NotificationCard";

export default function Notification() {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);
  
  useEffect(() => {
    dispatch(getNotifications());
  }, [])

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
              className="justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5"
            >
              <span className="material-icons-round">arrow_back</span>
              Beranda
            </ButtonLink>
            <div className="flex justify-end items-center gap-3 w-full sm:w-auto">
              <button type="button" className="flex items-center gap-2 px-3 py-1.5 border border-primary-4 rounded-2xl font-medium text-base text-primary-4 hocus:border-primary-3 hocus:bg-primary-3 hocus:text-neutral-1 active:border-primary-5 active:bg-primary-5 active:text-neutral-1">
                <span className="material-icons-round !text-[20px]">
                  filter_alt
                </span>
                Filter
              </button>
              <button className="material-icons-round text-primary-4">
                search
              </button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Notifications */}
      <Container className="flex flex-col gap-4 pb-5 mt-12">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <NotificationItem key={index} data={notification} />
          ))
        ) : (
          <div>Notifikasi kosong</div>
        )}
      </Container>
    </>
  )
}
