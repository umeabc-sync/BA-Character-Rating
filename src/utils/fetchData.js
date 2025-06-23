import { getAssetsFile } from "./getAssetsFile";

export async function fetchData(language) {
  const response = await fetch(getAssetsFile(`data/${language}.json`));
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
