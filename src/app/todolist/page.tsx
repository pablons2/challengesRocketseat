'use client';

import { useState, FormEvent } from "react";
import Image from "next/image";


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedTasksCount = tasks.filter(t => t.completed).length;

  return (
    <main className="w-screen h-screen bg-gradient-to-b from-black via-gray-700 to-gray-900 flex justify-top gap-5 flex-col pt-10 ">
      <section className="flex justify-center items-center gap-4 flex-col mt-10">
        <Image 
          src="/assets/Logo.png"
          width={126} height={48}
          alt="Logo"
        />
        
        <form onSubmit={handleSubmit} className="flex w-full flex-row justify-center my-4">
          <input 
            type="text" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Digite uma tarefa"
            className="bg-gray-800 px-4 py-2 rounded-lg border-2 border-gray-800 hover:border-cyan-600 focus:border-cyan-600 w-[50%]" 
          /> 
          <button 
            type="submit" 
            className="bg-cyan-600 px-4 py-2 rounded-lg ml-4 flex flex-row items-center gap-2 justify-around">
            <b>Criar</b><span>✙</span>
          </button>
        </form>

        <article className="w-[55%] flex md:flex-row flex-col justify-between gap-10 mt-4">
          <span className="text-cyan-600 font-semibold flex justify-center items-center gap-2">
            Tarefas Criadas 
            <b className="text-white font-semibold rounded-full bg-cyan-600 w-9 h-9 items-center justify-center p-2 flex">{tasks.length}</b>
          </span>
          <span className="text-purple-300 font-semibold flex justify-center items-center gap-2">
            Concluídas 
            <b className="text-white font-semibold rounded-full bg-gray-600 w-[5rem] h-9 items-center justify-center p-2 flex flex-row">{completedTasksCount} de {tasks.length}</b> 
          </span>
        </article>

        <ul className="flex justify-center items-center gap-2 flex-col w-full">
          {/* #caso não existam tarefas: */}
          {tasks.length === 0 ? (
            <li className="border-t-2 border-gray-700 p-4 rounded-lg flex justify-center items-center gap-2 flex-col w-[55%]">
              <Image src="/assets/Clipboard.png" width={56} height={56} alt="Clipboard" />
              <span className="text-gray-500">
                <b>Você ainda não tem tarefas cadastradas</b> 
                <br /> 
                Crie tarefas e organize seus itens a fazer
              </span>
            </li>
          ) : (
            tasks.map((t) => (
              <li key={t.id} className="border border-2 border-gray-600 bg-gray-800 p-4 flex justify-between items-center rounded-lg gap-4 w-[55%]">
                <input 
                  type="checkbox" 
                  checked={t.completed} 
                  onChange={() => toggleTaskCompletion(t.id)} 
                  className="w-5 h-5 rounded-full border-2 border-cyan-600 checked:bg-green-500 appearance-none checked:border-green-500 cursor-pointer transform transition-transform duration-200 checked:scale-110" 
                />
                <label 
                  className={`text-gray-300 flex items-stretch w-full justify-start ${t.completed ? 'line-through' : ''}`}
                >
                  {t.text}
                </label> 
                <Image 
                  src="/assets/trash.png" 
                  width={24} height={24} 
                  alt="Lixeira" 
                  className="hover:bg-red-500 cursor-pointer" 
                  onClick={() => deleteTask(t.id)} 
                />
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}
