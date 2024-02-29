import { useEffect, useState } from "react";
import { getGif } from "../../helpers";
import { SimpleGif } from "../../interfaces";
import { GifGridItem } from "./GifGridItem";

interface IProps {
  categories: string[];
}

export const GifGrid = ({ categories }: IProps) => {

  const [gifs, setGifs] = useState<SimpleGif[]>([]);

  useEffect(() => {
    getGif(categories)
      .then(res => setGifs(res));
  }, [categories]);


  return (
    <>

      <h3>{categories}</h3>

      <div className="card-grid">
        {
          gifs.map(gif => (
            <GifGridItem
              key={gif.id}
              gif={gif}
            />
          ))
        }
      </div>
    </>

  )
};
