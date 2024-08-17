import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const Sidebar = () => {
  return (
    <section className="col-[2/3] row-[2/3] bg-rose-100 border-l border-black/[0.08] p-5 flex flex-col">
      <AddTodoForm />
      <div className="mt-auto flex flex-col gap-3">
        <Button>Log in</Button>
        <Button>Register</Button>
      </div>
    </section>
  );
};

export default Sidebar;
