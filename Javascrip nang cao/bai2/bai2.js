//Bài 1 Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất
function arMax(arr1) {
    let newArr1=[];
    let newArr = arr1.sort(function (a, b) { return b.length - a.length })
    newArr1.push(newArr[0]);
    maxleng = newArr[0].length;
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i].length == maxleng) {
            newArr1.push(newArr[i]);
        }
    } 
    return newArr1;   
}

// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), 
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào

function comTwoArray(firstArray, secondArray) {
    let newArray=[];
    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.indexOf(firstArray[i])==-1) {
            newArray.push(firstArray[i]);
        }
    }
    for (let j = 0; j < secondArray.length; j++) {
        if (firstArray.indexOf(secondArray[j])==-1) {
            newArray.push(secondArray[j]);
        }
    }
    return newArray;
}

//Bài 3: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac 

function startArr(m,n) {
    var arr= [];
    var x=1;
    for (let k = 0; k < m; k++) {
          arr[k]= [];
    }
    for (let i = 0; i < m; i++) {
        if (i%2 ==0) {
            for (let j = 0; j < n; j++) {
                arr[i][j]=x;
                x++;
            }
        }else {
            for (let j = n-1; j >= 0; j--){
                arr[i][j]=x;
                x++;
            }
        }
    }
    return arr;
}

//Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng 
// { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.

function averageAge(arr) {
    var ave=0;
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total+= arr[i].age;
    }
    ave = total / (arr.length);
    return ave;
}


//Bài 5: Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp
function sortAge(arr1) {
   return arr1.sort(function(a, b){return b.age - a.age});
}

//Bài 6  Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

function sortName(arr2) {
    return arr1.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
}

//Bai 7 Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
function findFirstName(arr3) {
    let newArr;
    newArr = arr3.filter(str=>str.name.substr(0,1) == "H" || str.name.substr(0,1) == "h");
    return newArr;
}