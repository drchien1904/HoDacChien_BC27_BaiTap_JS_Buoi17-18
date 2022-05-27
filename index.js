g// bài tập buổi js 17-18
var nums = [];
var nums2 = [];
var nums3 = [];

function baitap1() {
  // b1: dom tới input lấy value
  var number = +document.getElementById("number").value;
  //b2: Thêm value vừa lấy vào mảng nums
  nums.push(number);
  nums2.push(number);
  nums3.push(number);

  console.log(nums);
  //b3: tính toán
  var sum1 = 0; // tổng các số dương
  var count1 = 0; // đếm các số dương
  var count2 = 0; // đếm các số âm
  // duyệt mảng để xác định các giá trị bên trong mảng
  for (var i = 0; i < nums.length; i++) {
    // // tính tổng các số dương
    // if (nums[i] > 0) {
    //   sum1 += nums[i];
    // }
    // // tính số lượng các số dương
    // if (nums[i] > 0) {
    //   count1++;
    // }
    // // tính số lượng các số âm
    // if(nums[i] < 0){
    //   count2++
    // }
    if (nums[i] > 0) {
      sum1 += nums[i];
      count1++;
    } else {
      count2++;
    }
  }
  var soSanh = " ";
  if (count1 > count2) {
    soSanh = "số dương nhiều hơn số âm";
  } else if (count1 < count2) {
    soSanh = "số dương ít hơn số âm";
  } else {
    soSanh = "số dương bằng số âm";
  }
  var soChanCuoi = sochanCuoiCung(nums);
  var minNum = timSoNhoNhat(nums);
  var maxNum = timSoLonNhat(nums);
  var sapxep = sapXepMang(nums2);
  var hoanDoi = doiViTri(nums3);
  var soNguyenTo = timSoNguyenToDauTien(nums);
  var soNguyen = demSoNguyen(nums);

  // Hiển thị
  var divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML = `
  <p>Danh sách mảng: ${nums}</p>
  <p>tổng số dương: ${sum1}</p>
  <p>số lượng số dương: ${count1}</p>
  <p>số lượng số âm: ${count2}</p>
  <p>số nhỏ nhất: ${minNum}</p>
  <p>số lớn nhất: ${maxNum}</p>
  <p>số chan  cuoi: ${soChanCuoi}</p>
  <p>Danh sách mảng tăng dần: ${sapxep}</p>
  <p>Hoan doi ${hoanDoi}</p>
  <p>Số Nguyên Tố đầu tiên ${soNguyenTo}</p>
  <p>Điếm số Nguyên ${soNguyen}</p>
  <p>So sánh lượng số dương âm: ${soSanh}</p>
    
  `;
}

function timSoNhoNhat(array) {
  // gan so dau tien trong mang cho min
  var min = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      // neu so thu i nho hon min, gan so i cho min
      min = array[i];
    }
  }

  // tra ve so nho nhat
  return min;
}
function timSoLonNhat(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function sochanCuoiCung(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      return array[i];
    }
  }

  return "ko thay";
}
//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiViTri(array) {
  var viTri1 = +document.getElementById("vitri1").value;
  var viTri2 = +document.getElementById("vitri2").value;
  if (array.length < viTri1 || array.length < viTri2) {
    //alert("Vị trí ko tồn tại ko thể hoán đổi");
    return "Chưa thể hoán đổi";
  }
  // Lưu giá trị số ở vị trí 2 (giá trị cũ )
  var trungGian = array[viTri2];

  // gán giá trị vị tri 2 bằng  giá trị  vị trí 1, nếu ko gán biến trung gian thì lúc này giá trị ví trí 2 đã thay đổi
  array[viTri2] = array[viTri1];

  // gán giá trị vị trí 1 bằng giá trị vị trí 2 cũ.
  array[viTri1] = trungGian;

  return array;
}

//Sắp xếp mảng theo thứ tự tăng dần.
function compare(a, b) {
  return a - b; // xếp tăng dần
}
function sapXepMang(array) {
  return array.sort(compare);
}

//Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
// Viết hàm kiểm tra số nguyên tố

function timSoNguyenToDauTien(array) {
  for (var i = 0; i < array.length; i++) {
    var kt = kiemTraSoNguyenTo(array[i]);
    if (kt == 1) {
      return array[i];
    }
  }
  return "Không có";
}

function kiemTraSoNguyenTo(num) {
  if (num === 1) return 0;

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }

  return 1;
}

//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function demSoNguyen(nums) {
  var soNguyen = 0;
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (Number.isInteger(num)) {
      soNguyen += 1;
    }
  }

  return soNguyen;
}

//Code sẽ chạy từ trên xuống => soSanh ở phía trên ko có giá trị
//So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
// var soSanh =" "
// if(count1 > count2){
//    "số dương nhiều hơn số âm"
// }
// else if(count1 = count2){
//   soSanh ="số dương bằng số âm"
// }
// else{
//   soSanh ="số dương ít hơn số âm"
// }
