import { GIFResponse, SimpleGif } from "../interfaces";

export const getGif = async(categories:string[]):Promise<SimpleGif[]>=>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=D73fX8X81lAlAdNtSOkJoIdEQeEYMEmp&q=${ categories }&limit=20`;
  const result:GIFResponse = await fetch(url)
    .then(res=>res.json());

  const gifs = result.data.map(gif=>({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  })) 

  return gifs;
};