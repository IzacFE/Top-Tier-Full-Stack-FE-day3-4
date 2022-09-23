var a = 5;
let b = "Top Tier Full Stack";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

const perkenalan = () => {
  let asal = "indonesia";
  return console.log(
    "perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      "berasal dari " +
      asal
  );
};

terdaftar = true;

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan Top Tier Full Stack");
}

a = b;
// nama = b;

// console.log("asal diakses = " + asal);
// console.log("a adalah = " + asal);
// console.log("b adalah = " + asal);

// Jawaban soal a
console.log(lengkap_arr[2]);

// jawaban soal b
terdaftar = true;

console.log(a);
console.log(b);

// jawaban soal c dan d
perkenalan();
