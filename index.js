import wordList from './words';

export const filterList = list =>{
  if(!(list instanceof Map) || list.constructor !== Array)return list;
  const out;
  list.forEach(item=>{
    if(!wordList.has(item.toLowerCase()))out.push(item);
  })
  return out;
}
