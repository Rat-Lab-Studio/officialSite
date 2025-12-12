// api.js
const folders = {
  bess: "json/bess/",
  bp: "json/bp/",
  cell: "json/cell/"
};

export async function loadJSONForID(id) {
  for (const [type, folder] of Object.entries(folders)) {
    try {
      const res = await fetch(`${folder}${id}.json`);
      if (!res.ok) continue; 
      const data = await res.json();
      return { type, data };
    } catch(e) {
      continue;
    }
  }
  return null;
}
