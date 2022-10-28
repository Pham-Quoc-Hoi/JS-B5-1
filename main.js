/**     QUẢN LÝ TUYỂN SINH
 *  Đầu vào:
 *      + diemChuan, khuVuc, doiTuong, điểm môn 1, điểm môn 2, điểm môn 3;
 *  Xử lý:
*      + tongdiem = khuVuc + doiTuong + điểm môn 1 + điểm môn 2 + điểm môn 3; 
*      + điểm môn 1 == 0 hoặc điểm môn 2 ==0 hoặc điểm môn 3 == 0 > rớt
       + tongdiem >= điểm chuẩn =>> Đậu
       tongdiem < điểm chuẩn =>> Rớt
    Đầu ra: In kết quả
 */


// document.getElementById("btnQuanLyTuyenSinh").onclick = function () {
//     var monThu1 = document.getElementById("monThu1").value * 1;
//     var monThu2 = document.getElementById("monThu2").value * 1;
//     var monThu3 = document.getElementById("monThu3").value * 1;

//     var diemChuan = document.getElementById("diemChuan").value * 1;
//     var khuVuc = document.getElementById("khuVuc").value * 1;
//     var doiTuong = document.getElementById("doiTuong").value * 1;
//     var tongDiem = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;
//     var ketqua = "👉";

//     if (monThu1 == 0 || monThu2 == 0 || monThu3 == 0) {
//         ketqua += "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
//     } else if (tongDiem >= diemChuan) {
//         ketqua += "Bạn đã đậu. Tổng điểm: " + tongDiem;
//     } else if (tongDiem < diemChuan) {
//         ketqua += "Bạn đã rớt. Tổng điểm: " + tongDiem;
//     }

//     document.getElementById("infoQuanLyTuyenSinh").innerHTML = ketqua;
// }

document.getElementById("btnQuanLyTuyenSinh").onclick = function () {
    var res = quanLyTuyenSinh();

    document.getElementById("infoQuanLyTuyenSinh").innerHTML = res;
}

function quanLyTuyenSinh() {
    var monThu1 = document.getElementById("monThu1").value * 1;
    var monThu2 = document.getElementById("monThu2").value * 1;
    var monThu3 = document.getElementById("monThu3").value * 1;

    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var tongDiem = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;
    var ketqua = "👉";

    if (monThu1 == 0 || monThu2 == 0 || monThu3 == 0) {
        ketqua += "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    } else if (tongDiem >= diemChuan) {
        ketqua += "Bạn đã đậu. Tổng điểm: " + tongDiem;
    } else if (tongDiem < diemChuan) {
        ketqua += "Bạn đã rớt. Tổng điểm: " + tongDiem;
    }
    return ketqua;
}


/** TÍNH TIỀN ĐIỆN
 * 
 */
const MUC_DIEN_1 = 500;
const MUC_DIEN_2 = 650;
const MUC_DIEN_3 = 850;
const MUC_DIEN_4 = 1100;
const MUC_DIEN_5 = 1300;

var tienDien1 = 0;
var tienDien2 = 0;
var tienDien3 = 0;
var tienDien4 = 0;
var tienDien5 = 0;
var tongTienDien;
var currentFM = Intl.NumberFormat("VN-vn");

document.getElementById("btnTienDien").onclick = function () {
    var nameTienDien = document.getElementById("nameTienDien").value;
    var soKw = document.getElementById("soKw").value * 1;
    var kq = tongTienDien(soKw, MUC_DIEN_1, MUC_DIEN_2, MUC_DIEN_3, MUC_DIEN_4, MUC_DIEN_5);
    // var soKw = document.getElementById("soKw").value * 1;
    // if (soKw < 0) {
    //     alert("Số kw không hợp lệ! Vui lòng nhập lại");
    // } else if (0 <= soKw && soKw <= 50) {
    //     tienDien1 += soKw * MUC_DIEN_1;
    // } else if (50 < soKw && soKw <= 100) {
    //     tienDien1 += 50 * MUC_DIEN_1;
    //     tienDien2 += (soKw - 50) * MUC_DIEN_2;
    // } else if (100 < soKw && soKw <= 200) {
    //     tienDien1 += 50 * MUC_DIEN_1;
    //     tienDien2 += 50 * MUC_DIEN_2;
    //     tienDien3 += (soKw - 100) * MUC_DIEN_3;
    // } else if (200 < soKw && soKw <= 350) {
    //     tienDien1 += 50 * MUC_DIEN_1;
    //     tienDien2 += 50 * MUC_DIEN_2;
    //     tienDien3 += 100 * MUC_DIEN_3;
    //     tienDien4 += (soKw - 200) * MUC_DIEN_4;
    // } else {
    //     tienDien1 += 50 * MUC_DIEN_1;
    //     tienDien2 += 50 * MUC_DIEN_2;
    //     tienDien3 += 100 * MUC_DIEN_3;
    //     tienDien4 += 150 * MUC_DIEN_4;
    //     tienDien5 += (soKw - 350) * MUC_DIEN_5;
    // }
    // tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4 + tienDien5;
    var inf = "👉";
    inf += "Họ tên: " + nameTienDien + ";Tiền điện: " + currentFM.format(kq);
    document.getElementById("infoTienDien").innerHTML = inf;
}


function tongTienDien(soKw, giaDien1, giaDien2, giaDien3, giaDien4, giaDien5) {
    if (soKw < 0) {
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
    } else if (0 <= soKw && soKw <= 50) {
        tienDien1 += soKw * giaDien1;
        tongTienDien = tienDien1;
    } else if (50 < soKw && soKw <= 100) {
        tienDien1 += 50 * giaDien1;
        tienDien2 += (soKw - 50) * giaDien2;
        tongTienDien = tienDien1 + tienDien2;
    } else if (100 < soKw && soKw <= 200) {
        tienDien1 += 50 * giaDien1;
        tienDien2 += 50 * giaDien2;
        tienDien3 += (soKw - 100) * giaDien3;
        tongTienDien = tienDien1 + tienDien2 + tienDien3;
    } else if (200 < soKw && soKw <= 350) {
        tienDien1 += 50 * giaDien1;
        tienDien2 += 50 * giaDien2;
        tienDien3 += 100 * giaDien3;
        tienDien4 += (soKw - 200) * giaDien4;
        tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4;

    } else {
        tienDien1 += 50 * giaDien1;
        tienDien2 += 50 * giaDien2;
        tienDien3 += 100 * giaDien3;
        tienDien4 += 150 * giaDien4;
        tienDien5 += (soKw - 350) * giaDien5;
        tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4 + tienDien5;

    }
    return tongTienDien;
}

