//Set can help you manage unique values

const ids = new Set(['Hi', 'from', 'set']);
ids.add(2);
console.log(ids);

if(ids.has('Hi')) {
  ids.delete('Hi');
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}