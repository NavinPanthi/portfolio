import React from "react";
import Line from "../Line";

const About = () => {
  return (
    <section className="min-h-[100vh] flex gap-24 flex-col  justify-center  w-full">
      <div className="flex">
        <p className="section-title">About</p>
        <Line />
      </div>
      <div className="flex gap-24 w-full flex-col ">
        <div className=" flex  md:flex-row flex-col justify-center gap-20">
          <div className="border rounded-xl w-80 h-44 md:w-96 md:h-48 2xl:w-[500px] 2xl:h-[250px]  border-base-dark">
            <p>Experience</p>
            <div>
              <p>1+ year</p>
              <p>Frontend developer</p>
            </div>
          </div>
          <div className="border w-80 h-44 md:w-96 md:h-48 2xl:w-[500px] 2xl:h-[250px]   border-base-dark">
            de
          </div>
        </div>
        <div>
          Description Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Temporibus culpa libero quia, nostrum deserunt distinctio autem
          reprehenderit dignissimos porro ut numquam natus aspernatur similique,
          sed minus, vitae delectus facilis in? cription Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Temporibus culpa libero quia, or
          sit
        </div>
      </div>
    </section>
  );
};

export default About;
