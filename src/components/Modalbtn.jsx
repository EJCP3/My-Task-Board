import TaskForm from "./TaskForm";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuCheck } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../context/GlobalState";
import { emojis, status, isSamteStatu } from "./InfoRadios";
import { Toaster, toast } from "sonner";

export default function Modalbtn({ task, open, setOpenModal }) {
  const [Ntask, setNTask] = useState({
    id: "",
    title: "",
    descripción: "",
    icon: "",
    status: {
      bg: "",
      bgIcon: "",
      iconStatu: "",
    },
  });

  const { addTask, deleteTask, updateTask } = useContext(GlobalState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "status") {
      const [bg, iconStatu, bgIcon] = value.split(",");
      setNTask({
        ...Ntask,
        status: { bg, iconStatu, bgIcon },
      });
    } else {
      setNTask({
        ...Ntask,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Ntask.id ? updateTask(Ntask) : addTask(Ntask);
    Ntask.id
      ? toast.success("Task has been edited!")
      : toast.success("Task has been created!");

    setOpenModal(false);
    setNTask({
      title: "",
      descripción: "",
      icon: "",
      status: { bg: "", bgIcon: "", iconStatu: "" },
    });
  };

  useEffect(() => {
    if (open && task) {
      setNTask(task);
    }
  }, [task, open]);

  return (
    <section className="App">
      <Toaster richColors position="top-left" />
      {open && (
        <TaskForm open={open} onClose={setOpenModal}>
          <section>
            <div className="flex justify-between mb-2">
              <h1 className="text-xl">Task details</h1>
              <button
                onClick={() => setOpenModal(false)}
                className="bg-white w-9 h-9 flex justify-center items-center border-2 rounded-xl border-gray-neutral"
              >
                <img src="assets/close_ring_duotone-1.svg" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <label className="flex items-center mb-2 text-gray-neutral text-sm font-medium">
                  Task name
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-black bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 "
                  placeholder="Write a Task name"
                  required
                  onChange={handleChange}
                  value={Ntask.title}
                />
              </div>

              <div className="relative mb-6">
                <label className="flex items-center mb-2 text-gray-neutral text-sm font-medium">
                  Description
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <textarea
                      className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none resize-none"
                      placeholder="Enter a short description"
                      name="descripción"
                      onChange={handleChange}
                      value={Ntask.descripción}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 my-4 flex-col">
                <h5 className="text-sm text-gray-neutral font-medium">Icon</h5>
                <div className="flex gap-4">
                  {emojis.map((emoji, index) => (
                    <div key={index}>
                      <input
                        className="hidden"
                        id={`${task}-emoji-${index}`}
                        type="radio"
                        name={`icon`}
                        value={emoji}
                        onChange={handleChange}
                        checked={Ntask.icon === emoji}
                      />

                      <label
                        className="emoji w-12 h-12 flex justify-center items-center rounded-xl cursor-pointer bg-gray-200"
                        htmlFor={`${task}-emoji-${index}`}
                      >
                        <span className="bg-gray">{emoji}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 my-4 flex-col">
                <h5 className="text-sm text-gray-neutral font-medium">
                  Status
                </h5>
                <div className="flex gap-4 flex-wrap">
                  {status.map((statu, index) => (
                    <div key={index}>
                      <input
                        className="hidden "
                        id={`${task}-status-${index}`}
                        type="radio"
                        name={`status`}
                        value={`${statu.bg},${statu.iconStatu},${statu.bgIcon}`}
                        onChange={handleChange}
                        checked={isSamteStatu(Ntask.status, statu)}
                      />

                      <label
                        htmlFor={`${task}-status-${index}`}
                        className="status w-60 h-12 flex gap-2.5 items-center rounded-xl cursor-pointer border-light-gray border-2 bg-none"
                      >
                        <aside
                          className={`${statu.bgIcon} w-11 h-11 flex justify-center items-center rounded-xl ml-[0.5px]`}
                        >
                          <img src={statu.iconStatu} />
                        </aside>
                        <h4>{statu.text}</h4>
                        <img
                          className="statusIcon ml-auto mr-5 w-4 h-4 bg-blue-500 rounded-full"
                          src="src/assets/Done_round.svg"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <footer className="flex justify-end gap-2">
                {task && task.id && (
                  <button
                    onClick={() => {
                      deleteTask(task.id);
                      toast.info("Task has been delete");
                    }}
                    className="flex justify-center gap-1 items-center w-30 h-10 bg-gray-neutral hover:bg-gray-800 transition-all duration-700 rounded-full shadow-xs text-light-gray text-base font-semibold"
                  >
                    Delete
                    <RiDeleteBin5Line className="h-16 w-5" />
                  </button>
                ) }

                <button className="flex justify-center gap-1 items-center w-30 h-10 bg-blue-primary hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-light-gray text-base font-semibold">
                  {Ntask.id ? "Editing" : "Save"}
                  <LuCheck className="h-16 w-5" />
                </button>
              </footer>
            </form>
          </section>
        </TaskForm>
      )}
    </section>
  );
}
