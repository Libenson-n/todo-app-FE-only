type DeleteButtonProps = {
  action: (id: number) => void;
  id: number;
};

const DeleteButton = ({ action, id }: DeleteButtonProps) => {
  return <button onClick={() => action(id)}>❌</button>;
};

export default DeleteButton;
