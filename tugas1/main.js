function generatePattern() {
    let pattern = "";
    let start = 1;  // Awal dari setiap baris
    
    for (let i = 0; i < 5; i++) {  // Ulangi untuk 5 baris
      for (let j = 0; j < 5; j++) {  // Cetak 5 angka per baris
        pattern += (start + j);
      }
      pattern += "\n";  // Tambah baris baru setelah setiap baris angka
      start++;  // Mulai baris berikutnya dengan angka selanjutnya
    }
    
    return pattern;
  }
  
  console.log(generatePattern());
  