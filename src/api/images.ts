import { IImage } from "../types"

export const getImages = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
  return resp.json() as Promise<IImage[]>
}

