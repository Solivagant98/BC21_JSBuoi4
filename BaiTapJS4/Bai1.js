var diemDoiTuong=0*1;
var diemKhuVuc=0*1;

function layKhuVuc() {
    var khuVucA = document.getElementById("khuVucA").checked;  
    var khuVucB = document.getElementById("khuVucB").checked;  
    var khuVucC = document.getElementById("khuVucC").checked;
    var X = document.getElementById("X").checked;

    if (khuVucA) {diemKhuVuc=2*1} else
    if (khuVucB) {diemKhuVuc=1*1} else
    if (khuVucC) {diemKhuVuc=0.5*1} else 
    if (X) {diemKhuVuc=0*1}
    console.log(diemKhuVuc);
};

function layDoiTuong() {
    var doiTuong1 = document.getElementById("doiTuong1").checked;  
    var doiTuong2 = document.getElementById("doiTuong2").checked;  
    var doiTuong3 = document.getElementById("doiTuong3").checked;
    var khongUuTien = document.getElementById("khongUuTien").checked;

    if (doiTuong1) { diemDoiTuong=2*1} else
    if (doiTuong2) { diemDoiTuong= 1.5*1} else
    if (doiTuong3) {diemDoiTuong=1*1} else
    if (khongUuTien) {diemDoiTuong=0*1} 
    console.log(diemDoiTuong);
};

document.getElementById("tinhDiem").addEventListener("click", function () {
    var diemChuan = document.getElementById("diemChuan").value*1;
    var diemMon1 = document.getElementById("diemMon1").value*1;
    var diemMon2 = document.getElementById("diemMon2").value*1;
    var diemMon3 = document.getElementById("diemMon3").value*1;
    var diemTB = diemMon1+diemMon2+diemMon3+diemDoiTuong+diemKhuVuc;
    if ((diemMon1>0 && diemMon2>0 && diemMon3>0) && (diemTB>diemChuan)) {alert("Tổng điểm là  " + diemTB + "  Thí sinh đậu")
        
    } else {alert("Tổng điểm là  " + diemTB + "   Thí sinh rớt")};
})

