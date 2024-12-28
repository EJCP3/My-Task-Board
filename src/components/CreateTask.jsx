import { useState } from "react";
import Modalbtn from "./Modalbtn";

const CreateTask = () => {
  const [open, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="bg-cream-secondary flex items-center gap-4 p-4 w-[600px] mt-2 rounded-xl text-sm font-bold"
        onClick={() => setOpenModal(!open)}
      >
        <span className="bg-orange-accent w-12 h-12 flex justify-center items-center rounded-xl">
          <img src="assets/Add_round_duotone.svg" />
        </span>
        Add new Task
      </button>

      <Modalbtn open={open} setOpenModal={setOpenModal} />
    </>
  );
};

export default CreateTask;
