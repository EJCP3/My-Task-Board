import Modalbtn from "./Modalbtn";
import { useState } from "react";

export const CardTask = ({ task: { task } }) => {
  const [open, setOpenModal] = useState(false);

  return (
    <>
      <article
        onClick={() => setOpenModal(!open)}
        className={`${task.status.bg} flex justify-between mt-6 mb-6 p-4  rounded-xl w-[600px] mx-auto gap-6`}
      >
        <div className="bg-white w-12 h-12 flex justify-center items-center rounded-xl ">
          <span className="text-xl">{task.icon}</span>
        </div>
        <div className="mr-auto">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p className="w-100 text-balance">{task.descripción}</p>
        </div>

        <aside
          className={`${task.status.bgIcon} w-12 h-12 flex justify-center items-center rounded-xl`}
        >
          <img src={task.status.iconStatu} />
        </aside>
      </article>

      <Modalbtn task={task} open={open} setOpenModal={setOpenModal} />
    </>
  );
};
