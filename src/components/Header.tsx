import Counter from "./Counter";

const Header = () => {
  return (
    <header className="flex justify-between items-center col-[1/3] row-[1/2] bg-rose-300 border-b border-black/[0.08] px-8">
      Todos
      <Counter />
    </header>
  );
};

export default Header;
