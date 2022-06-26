import data from "./data.json"

export function getAllData() {
  return Promise.resolve(data);
}


export default { getAllData };