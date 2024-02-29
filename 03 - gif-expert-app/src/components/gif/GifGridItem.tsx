import { SimpleGif } from "../../interfaces"

interface IProps{
  gif: SimpleGif
}

export const GifGridItem = ({gif}:IProps) => {

  return (
    <div className="card">
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  )
};
