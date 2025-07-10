/*
! Referans
? Object, Array ve Function bellekte Refarans olarak tutulur.
*/

// örn:

/*var data1,data2

data1 = {
    name: "Yusuf",
    surname: "Kapkiner"
}


data2 = data1
// ikiside aynı referansa bağlı oldu için biri değişince diğeride değişiyor.
data2.name = "Arda"
data2.surname = "Ayhan"

console.log(data1)
console.log(data2)*/



/* 
! Foreach ve Map kullanımı
*/

/*var numbers = [3, 4, 5, 6];
numbers.forEach((x, y) => {
    x = x**2
    console.log(x, y);
})



var numbers = [3, 4, 5, 6];
numbers.map((x,y) =>{
    x = x**2
    console.log(x, y)
})*/


/* 
? Fonksiyon ve metot arasındaki fark
* Tüm metotlar fonksiyondur, ama her fonksiyon bir metot değildir.
* Metot: bir nesneye bağlı fonksiyondur.
* Fonksiyon: bağımsız veya global olarak tanımlanabilir.
*/

// Fonksiyon

/*function selamVer() {
  console.log("Merhaba!");
}

selamVer(); // Merhaba*/

// Metot

/*const kisi = {
  isim: "Yusuf",
  selamVer: function () {
    console.log("Merhaba " + this.isim);
  }
};

kisi.selamVer(); // Merhaba Yusuf*/


/*
! Zaman olayları
*/


/*var date = new Date();
var TrDate = date.toLocaleDateString("tr-TR", {day:"2-digit", month:"2-digit", year:"2-digit"})
var TrDateTime = date.toLocaleTimeString("tr-TR")
console.log(TrDateTime)*/
