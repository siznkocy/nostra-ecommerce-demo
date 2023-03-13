"use client";

import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonsIcon } from "./button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Notification({
  open,
  children,
}: {
  open: Boolean;
  children: ReactNode;
}) {
  return (
    <section className={`bg-[#1D242D] text-white ${open ? "" : "hidden"} m-0`}>
      {children}
    </section>
  );
}

export function SignUpNotification() {
  const [isOpen, setIsOpen] = useState<Boolean>(true);

  return (
    <Notification open={isOpen}>
      <article className="p-2 flex justify-between items-center max-w-5xl mx-auto">
        <div className="font-medium text-center w-fit mx-auto flex sm:flex-row sm:gap-2 flex-col gap-0">
          <p className="text-white text-base">
            This is a <span className="font-bold">Demo website</span> by Aubrey
          </p>
          <Link to="/signup" className="underline">
            Contact me
          </Link>
        </div>
        <ButtonsIcon
          icon={<FontAwesomeIcon icon={faClose} />}
          // isClick={isOpen}
          // setIsClick={setIsOpen}
        />
      </article>
    </Notification>
  );
}
