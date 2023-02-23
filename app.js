var input = document.querySelector('#label-input')
var btnSubmit = document.querySelector('.btn-submit')
var writeArr = document.querySelector('.array-write')
var sidebarItem = document.querySelectorAll('.sidebar-list-item');
var writeResult = document.querySelector('.write-result')


btnSubmit.onclick = function(e) {
    if(input == '') {
        return
    }

    var inputValue = input.value;
    var strArr = inputValue.split(',')
    var myArr = []
    for(var i = 0; i < strArr.length; i++) {
        var item = Number(strArr[i])
        if(item == NaN) {
            alert('Bạn nhập không hợp lệ!')
            return
        }

        myArr.push(item)
    }

    writeArr.innerHTML = '[' + myArr  + ']';

    // XỬ LÍ KHI CLICK VÀO CÁC LỰA CHỌN
    sidebarItem.forEach(function(item, index) {
        item.onclick = function(e) {
            var curr = document.querySelector('.sidebar-list-item.active')
            if(curr != null) {
                curr.classList.remove('active')
            }

            item.classList.add('active')
            handle(myArr, index)

        }
    })

}

function handle(arr, index) {
    switch(index) {
        case 0:
            var s = sum(arr);
            writeResult.innerHTML = s;
            break;
        case 1:
            var c = countEven(arr);
            writeResult.innerHTML = c;
            break;
        case 2:
            var min = findMin(arr);
            writeResult.innerHTML = min;
            break;
        case 3:
            var min = findEvenMin(arr);
            writeResult.innerHTML = min;
            break;
        case 4:
            var s = findLastEven(arr);
            writeResult.innerHTML = s;
            break;
        case 5:
            var a = Number(prompt('Nhập vị trí thứ nhất'))
            var b = Number(prompt('Nhập vị trí thứ hai'))

            if(a < 0 || a >= arr.length || b < 0 || b >= arr.length) {
                alert('Bạn nhập vượt quá độ dài cho phép')
                return
            }
            swap(arr, a, b);
            writeResult.innerHTML = arr;
            break;
        case 6:
            sortAsc(arr)
            writeResult.innerHTML = arr;
            break;
        case 7:
            var prime = findFirstPrime(arr);
            writeResult.innerHTML = prime;
            break 
        case 8:
            var n = Number(prompt("Nhập số lượng phần tử cho mảng số thực"))
            var st = []
            for(var i = 0; i < n; i++) {
                var a = Number(prompt("Nhập phần tử thứ " + i + ": "))
                st.push(a)
            }

            writeResult.innerHTML = "Mảng số thực: [" + st + "] | Số lượng số nguyên: " + countInt(st);
            break;
        case 9:
            writeResult.innerHTML = compare(arr)
            break;
        default:
            console.log('KKKKKKK')   
    }
}

function sum(arr) {
    var s = 0;
    for(var i = 0; i < arr.length; i++) {
        s += arr[i]
    }

    return s
}

function countEven(arr) {
    var c = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0)
            c++;
    }

    return c
}

function findMin(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min)
            min = arr[i]
    }

    return min
}

function findEvenMin(arr) {
    var b = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0)
            b.push(arr[i])
    }

    return findMin(b)
}

function findLastEven(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] % 2 == 0)
            return arr[i]
    }

    return -1;
}

function swap(arr, fPos, sPos) {
    var temp = arr[fPos]
    arr[fPos] = arr[sPos]
    arr[sPos] = temp
}

function sortAsc(arr) {
    for(var i = 0; i < arr.length; i++) {
        var curr = i
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[curr]) {
                curr = j
            }
        }

        swap(arr, curr, i);
    }
}

function isPrime(n) {
    if (n < 2)
        return false;
    for(var i = 2; i <= Math.sqrt(n); i++) 
        if(n % i == 0)
            return false;
    
    return true;
}

function findFirstPrime(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(isPrime(arr[i]))
            return arr[i]
    }

    return -1;
}

function countInt(arr) {
    var c = 0;
    for(var i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i]) == true) {
            c++;
        }
    }

    return c;
}

function compare(arr) {
    var a = []
    var b = []

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0)
            a.push(arr[i])
        else if(arr[i] > 0)
            b.push(arr[i])
    }

    if(a.length > b.length)
        return "Số âm nhiều hơn số dương"
    else if(a.length < b.length)
        return "Số dương nhiều hơn số âm"
    return "Số lượng âm và dương bằng nhau"
}
