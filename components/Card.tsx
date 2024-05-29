type CardProps = {
  title?: string;
  description: string;
  name?: string;
};

const Card = ({ title, description, name }: CardProps) => {
  return (
    <div className="p-6 rounded-lg bg-[#2d2d2d] w-[350px] space-y-3 text-center">
      <p className="font-bold text-xl">{title ? title : ""}</p>
      <p>{description}</p>
      <p className="font-bold">{name ? name : ""}</p>
    </div>
  );
};

export default Card;
