

// Kolay:

//     Kullanıcıdan bir sayı alın.
//     Bu sayının pozitif, negatif veya sıfır olduğunu kontrol edin.
//     Duruma göre ekrana "Pozitif", "Negatif" veya "Sıfır" yazdırın.


// let say1 = +prompt("Lütfen bir sayı giriniz.")

// if(say1>0){
//     console.log(`${say1} Sayısı Pozitif Sayıdır.`)
// }
// if(say1==0){
//     console.log(`${say1} Sayısı Nötrdür.`)
// }
// if(say1<0){
//     console.log(`${say1} Sayısı Negatif Sayıdır.`)
// }






// Orta:

//     Kullanıcıdan dört kenarı olan bir dikdörtgenin uzunluklarını alın.
//     Bu dikdörtgenin kare olup olmadığını kontrol edin.
//     Duruma göre ekrana "Dikdörtgen", "Kare" veya "Geçersiz" yazdırın.



// let uzunluk1 = (+prompt("1. kenarın uzunluğunu giriniz."))
// let uzunluk2 = (+prompt("2. kenarın uzunluğunu giriniz."))
// let uzunluk3 = (+prompt("3. kenarın uzunluğunu giriniz."))
// let uzunluk4 = (+prompt("4. kenarın uzunluğunu giriniz."))

// if(uzunluk1==uzunluk2==uzunluk3==uzunluk4){
//     document.write(`
//     1. Kenar: ${uzunluk1},
//     2. Kenar: ${uzunluk2},
//     3. Kenar: ${uzunluk3} ve
//     4. Kenar: ${uzunluk4} uzunluğunda: Seçtiğiniz uzunluklar birleştirildiğinde bir "kare" oluşturur!
//     `)
// }
// else{
//     document.write(`
//     1. Kenar: ${uzunluk1},
//     2. Kenar: ${uzunluk2},
//     3. Kenar: ${uzunluk3} ve
//     4. Kenar: ${uzunluk4} uzunluğunda: Seçtiğiniz uzunluklar birleştirildiğinde bir "dikdörtgen" oluşturur!
//     `)
// }





// Zor:

//     Kullanıcıdan bir yıl alın.
//     Bu yılın artık yıl olup olmadığını kontrol edin.
//     Bir yıl, 4'e bölünebiliyorsa ve aynı zamanda 100'e bölünemiyorsa veya 400'e bölünebiliyorsa, o yıl artık yıldır.
//     Duruma göre ekrana "Artık Yıl" veya "Artık Yıl Değil" yazdırın.



// let yil = +prompt("Lütfen artık yıl olp olmadığını hesaplamak isdeğiniz değeri giriniz.")

// if(yil % 4 == 0 && yil % 100 !== 0) {
//     console.log(`${yil} YILI ARTIK YILDIR`)
// }
// else{
//     console.log(`${yil} YILI ARTIK YIL DEĞİLDİR`)
// }

// ===> Sıradaki üçlü 




//______________________________________________________________________________________



// Kolay:

//     Kullanıcıdan bir kelime alın.
//     Bu kelimenin uzunluğunu kontrol edin.
//     Eğer kelimenin uzunluğu 5 veya daha fazla ise "Uzun Kelime", aksi halde "Kısa Kelime" yazdırın.


// let kelime = prompt("Lütfen bir kelime giriniz.")

// if(kelime.length >= 5) {
//     console.log(`"${kelime}" kelimesi ${kelime.length} harften oluşmaktadır. 5 veya daha fazla harften oluşan kelimeler "Uzun Kelimedir" ve "${kelime}" kelimesi uzun kelimedir.`)
// }
// else{
//     console.log(`"${kelime}" kelimesi ${kelime.length} harften oluşmaktadır. 5'ten az harften oluşan kelimeler "Kısa Kelimedir" ve "${kelime}" kelimesi kısa kelimedir.`)
// }


// Orta:

//     Kullanıcıdan bir cümle alın.
//     Bu cümledeki kelimelerin sayısını bulun.
//     Ekrana "Cümlede toplam X kelime bulunmaktadır." şeklinde bir mesaj yazdırın.



let cumle = prompt("lütfen bir cümle yazınız.")
let cumledekiKelimeSayisi = cumle.split(" ")
document.write(`<h1>Yazdığınız Cümle;</h1> <p>'${cumle}'</p>
                <h1>Cümlenizde toplam <span class="kelimeSayisi">${cumledekiKelimeSayisi.length}</span> kelime bulunmaktadır.</h1>`)




// _____________________________________________________________



// Zor:  
              
// faktoriyel hesaplayıcı
// Kullanıcıya bir sayı girmesini isteyin.
// Ardından, bu sayının faktöriyelini hesaplayan bir JavaScript programı yazın.

// Örnek:
// Kullanıcı 5 girdiyse, program 5! = 5 * 4 * 3 * 2 * 1'i hesaplamalıdır.
// Sonucu ekrana yazdırın.





// let n = +prompt(`Faktoriyeli Hesaplanacak Sayı Giriniz`)

// function faktoriyel(n) {
//     if(n === 0){
//         return 1
//     }
//     else {
//         return n * faktoriyel(n-1)
//     }
// }
// document.write(faktoriyel(n))
