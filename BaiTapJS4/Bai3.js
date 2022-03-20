function tinhThue() {
    var thuePhaiNop;
    var thuNhapNam = document.getElementById("thuNhap").value*1;
    var soNguoiPt = document.getElementById("pt").value*1;
    var thuNhapTinhThue = thuNhapNam - 132000000 - 4400000*soNguoiPt*12;
    if (thuNhapTinhThue<=0) {thuePhaiNop=0} else
    if (0<thuNhapTinhThue<=60000000) {thuePhaiNop=thuNhapTinhThue*5/100} else
    if (thuNhapTinhThue<= 120000000) {thuePhaiNop=thuNhapTinhThue*10/100 - 250000*12} else
    if (thuNhapTinhThue<=216000000) {thuePhaiNop=thuNhapTinhThue *15/100 - 750000*12} else
    if (thuNhapTinhThue<=384000000) {thuePhaiNop=thuNhapTinhThue *20/100 - 1650000*12} else
    if (thuNhapTinhThue<=624000000) {thuePhaiNop=thuNhapTinhThue * 25/100 - 3250000*12} else
    if (thuNhapTinhThue<=960000000) {thuePhaiNop=thuNhapTinhThue * 30/100 - 5850000*12} else
    if (thuNhapTinhThue>960000000) {thuePhaiNop=thuNhapTinhThue * 35/100 - 9850000*12};
    alert("Số tiền thuế TNCN phải nộp là " + thuePhaiNop)
}