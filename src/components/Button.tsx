type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="cursor-pointer bg-rose-400 p-3 rounded-lg">
      {children}
    </button>
  );
};

export default Button;
