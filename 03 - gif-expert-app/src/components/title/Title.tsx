
interface IProps{
  title: string;
}

export const Title = ({title}:IProps) => {
  return (
    <h1 className="text-3xl font-bold">
      {title}
    </h1>
  )
};
