type Props = {
  width: number;
  height: number;
};

const Avatar = (props: Props) => {
  return (
    <div className="mx-auto">
      <img
        src="/assets/0.svg"
        width={props.width}
        height={props.height}
        alt="Oyuncu Avatarı"
        className="mx-auto"
      />
    </div>
  );
};

export default Avatar;
