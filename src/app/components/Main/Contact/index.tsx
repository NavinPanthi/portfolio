import React from "react";
import MainLayout from "../MainLayout";

const Contact = () => {
  return (
    <MainLayout title="Contact me" className="!h-[700px]">
      <div className="flex flex-col gap-8 items-center mb-4">
        <p>Find me on the following platforms!</p>
        <div className="secondary-btn-md flex justify-center max-w-[700px]">
          panthinabin341@gmail.com
        </div>
        <div className="secondary-btn-md flex justify-center max-w-[700px]">
          Bed Prakash Panthi
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
