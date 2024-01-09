type Props = {
  placeholder: string;
  id: string;
};

const CustomTextInput = (props: Props) => {
  return (
    <input
      type="text"
      id={props.id}
      className="outline-none rounded-md border-2 border-dark px-2 py-1 focus:border-alternate"
      placeholder={props.placeholder}
    />
  );
};

export default CustomTextInput;
