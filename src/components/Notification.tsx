"use client";

import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonsIcon } from "./button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../hook/useApp";
import {
  notification,
  currentNotificationState,
} from "../features/menu/popupSlice";

function Notification({ children }: { children: ReactNode }) {
  const notif = useAppSelector(currentNotificationState);

  return (
    <section className={`bg-[#1D242D] text-white ${notif ? "" : "hidden"} m-0`}>
      {children}
    </section>
  );
}

export function SignUpNotification() {
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(notification());
  };

  return (
    <Notification>
      <article className="p-2 flex justify-between items-center max-w-5xl mx-auto z-20">
        <div className="font-medium text-center w-fit mx-auto flex sm:flex-row sm:gap-2 flex-col gap-0">
          <p className="text-white text-base">
            Demo website based on UI designed by{" "}
            <Link to="/signup" className="underline font-bold">
              Pixelz
            </Link>
          </p>
        </div>
        <ButtonsIcon
          icon={<FontAwesomeIcon icon={faClose} />}
          onClick={close}
        />
      </article>
    </Notification>
  );
}
