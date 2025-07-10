/*
! Referans
? Object, Array ve Function bellekte Refarans olarak tutulur.
*/

// örn:

var data1,data2

data1 = {
    name: "Yusuf",
    surname: "Kapkiner"
}


data2 = data1
//ikiside aynı referansa bağlı oldu için biri değişince diğeride değişiyor.
data2.name = "Arda"
data2.surname = "Ayhan"

console.log(data1)
console.log(data2)