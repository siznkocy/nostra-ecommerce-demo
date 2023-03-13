import React from "react";
import { Link } from "react-router-dom";
import { InputIcons } from "./input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { Button } from "./button/Buttons";

export const Subscribe = () => {
  return (
    <section className="py-16 flex flex-col gap-0 space-y-4">
      <h2 className="max-w-xl mx-auto text-center">
        Subscribe to our newsletter to get updates about our latest collections
      </h2>
      <p className="text-center text-base">
        Get 20% off on your first order just y subscribing to our newsletter
      </p>
      <div className="flex sm:flex-row flex-col gap-1 mx-auto w-fit">
        <InputIcons icon={<HiOutlineMail />} placeholder="Enter your email" />
        <Button text="Subscribe" />
      </div>
      <div className="text-center">
        <p>You be able to unsubscribe at any time.</p>
        <p>
          read our privacy policy{" "}
          <Link to="/" className="underline text-[#1D242D]">
            here
          </Link>
        </p>
      </div>
    </section>
  );
};
