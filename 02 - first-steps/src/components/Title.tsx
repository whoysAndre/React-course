

interface IProps{
  title: string;
}
export default function Title({title}:IProps) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}
