import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center font-sans min-h-screen bg-rose-200">
      <main className="w-[972px] h-[636px] bg-white rounded-xl shadow-md grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden mt-10">
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <footer>
        <small>&copy;</small>
      </footer>
    </div>
  );
};

export default App;
