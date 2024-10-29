function generatePattern() {
    let pattern = "";
    
    // Baris pertama: 1234
    for (let i = 1; i <= 4; i++) {
      pattern += i;
    }
    pattern += "\n";  // Tambahkan newline untuk berpindah ke baris berikutnya
  
    // Baris kedua: 234 (dengan spasi di depan)
    pattern += " ";  // Tambahkan 1 spasi di awal
    for (let i = 2; i <= 4; i++) {
      pattern += i;
    }
    pattern += "\n";  // Tambahkan newline untuk berpindah ke baris berikutnya
  
    // Baris ketiga: 34 (dengan 2 spasi di depan)
    pattern += "  ";  // Tambahkan 2 spasi di awal
    for (let i = 3; i <= 4; i++) {
      pattern += i;
    }
    pattern += "\n";  // Tambahkan newline untuk berpindah ke baris berikutnya
  
    // Baris keempat: 4 (dengan 3 spasi di depan)
    pattern += "   ";  // Tambahkan 3 spasi di awal
    pattern += 4;  // Tambahkan angka 4 saja
  
    return pattern;
  }
  
  console.log(generatePattern());
  