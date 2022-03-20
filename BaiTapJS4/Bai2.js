function tinhTienDien() {
    var soTien;
    var soKw = document.getElementById("soKw").value*1;
    if (soKw<=50) {soTien=soKw*500} else 
    if (soKw<=100) {soTien= 50*500 +(soKw-50)*650} else
    if (soKw<=200) { soTien= 50*500 + 50*650 + (soKw-100)*850} else
    if (soKw<=250) { soTien= 50*500 + 50*650 + 100* 850 + (soKw-200)*1100} else
    if ( soKw>250) { soTien= 50*500 + 50*650 +100*850+ 150*1100 + (soKw-350)*1300}
    alert("số tiền điện là " + soTien)
}