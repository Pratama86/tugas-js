function generatePattern() {
    let pattern = "";
    
    // Baris pertama: 12345
    for (let i = 1; i <= 5; i++) {
      pattern += i;
    }
    pattern += "\n";  // Tambahkan newline untuk berpindah ke baris berikutnya
  
    // Baris kedua: 678910
    for (let i = 6; i <= 10; i++) {
      pattern += i;
    }
    pattern += "\n";  // Tambahkan newline untuk berpindah ke baris berikutnya
  
    // Baris ketiga: 98765
    for (let i = 9; i >= 5; i--) {
      pattern += i;
    }
    pattern += "\n";  // Tambahkan newline untuk berpindah ke baris berikutnya
  
    // Baris keempat: 43210
    for (let i = 4; i >= 0; i--) {
      pattern += i;
    }
  
    return pattern;
  }
  
  console.log(generatePattern());
  