function segitiga(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      star += "* ";
    }
    star += "\n";
  }
  return star;
}
const hasil = segitiga(5);
console.log(hasil);
