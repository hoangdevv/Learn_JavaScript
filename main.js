/*  
Một số hàm built-in
    1.alert
    2.console
    3.confirm ... //hiển thị như alert chỉ thêm là thêm phần xác nhận
    4.prompt ... //hiển thị như alert & confirm chỉ thêm ô input để nhập
    5.setTimeout ... // Cách thực hiện: setTimeout(function(){
                                       //thực thi 1 đoạn code sau 1s (1000 = 1s) và chỉ 1 lần
                                       },1000)
    6.setInterval ... // Cách thực hiện: setInterval(function(){
                                            //thực thi 1 đoạn code sau 1s và chạy liên tục lặp đi
                                        },1000)



/*

Làm việc với chuỗi 
    1.length ... // độ dài của chuỗi
    2.find index ... // tìm vị trí của chuỗi trong chuỗi lớn 
                            -->  console.log(myString.indexof('abc'))
                        hoăc tìm vị trí cuối muốn tìm trong chuỗi 
                            --> console.log(myString.lastIndexOf('abc'))
    3.cut string ... --> (myString.slice(vị trí bắt đầu, vị trí cuối))
    4.replace    ... //ghi đè chuỗi muốn thay thế --> (myString.slice('chuỗi muốn thay thế', 'chữ mới để thay thế')) 
                Nâng cao :ghi đè thay thế hết các chữ như nhau --> (myString.slice(/chuỗi muốn thay thế/g, 'chữ mới để thay thế')) 
    5.convert to upper case ... // đổi chữ thường-> hoa
    6.convert to lower case ... // đổi chữ hoa-> thường
    7.trim ... // loại bỏ khoảng trắng
        --> console.log(myString.trim())
    8.Split ... // cắt 1 chuỗi thành arrays...
        var languages= 'PHP', 'JavaScript', 'Java';
        --> console.log(languages.split(', '));
    9. Character by index
        --> console.log(myString.charAt(index của chuỗi);
*/

/*
Làm việc với mảng
    1.toString  //chuyển array -> string
    2.join      //chuyển array -> string (''): để bỏ phần ''
    3.pop   ... // xóa elements cuối mảng và trả về phần tử đã xóa
    4.push  ... // thêm 1 hoặc nhiều elements vào cuối mảng và trả về độ dài mới của mảng
    5.shift ... // xóa elements đầu mảng và trả về phần tử đã xóa
    6.unShift ... // thêm 1 hoặc nhiều elements vào đầu mảng và trả về độ dài mới của mảng
    7.splicing ... // xóa,cắt,chèn pt mới vào mảng
            xóa : --> langguage.splice(vị trí của mảng bắt đầu,vị trí của mảng cuối)
            chèn: --> langguage.splice(vị trí của mảng bắt đầu,0,'pt chèn');
    8.concat ... // hợp nhất lại các array
            --> console.log(language.concat(langguage2));
    9.slicing : cắt
            --> console.log(language.slice(vị trí của mảng bắt đầu,vị trí của mảng cuối));
*/

/* 
NÂNG CAO: Làm việc với mảng p2 (callback)
    1.forEach ... // duyệt qua từng phần tử của mảng
    2.every ...// phải thỏa mãn hết tất cả mới trả về true  vd: sinh viên đó đã hoàn thành khóa học chưa
    3.some  ...// 1 điều kiện thỏa mãn sẽ trả về true           "
    4.find  ...// tìm kiếm điều kiện thỏa mãn -> trả về cái đầu tiên đktm -> vd: tìm khóa học có giá thấp hơn 1.000.000
    5.filter ...// tìm kiếm điều kiện thỏa mãn -> trả về tất cả đktm            "
    6.map ...// trả về view website
    7.reduce ...// nhận về giá trị duy nhất sau khi mà tính toán và xử lý trên những cái phần tử trên 1 array
    8.includes ...// kiểm tra có tồn tại trong phần tử không(chỉ trong String và Array ) 
*/

                /* Use Reduce
                Array.prototype.reduce2 = function(callback,result){
                    let i = 0
                    if(arguments.length < 2){ // nếu đối số thứ 2 không chuyền vào 
                        i = 1;
                        result = this[0];
                    }
                    for (; i < this.length; i++) {
                        result = callback(result,this[i],i,this);
                    }
                    return result;
                }
                const numbers = [1, 2, 3, 4, 5];

                const result = numbers.reduce2((total, number)=>{
                    return total + number;
                },10    );

                console.log(result);
                */

                    /* Use map
                    Array.prototype.map2 = function(callback){
                        var ouput = [];
                        for (let i = 0; i < this.length; i++) {
                            var result = callback(this[i],i)    // return `<h2>${cours}</h2>`
                            ouput.push(result);
                        }
                        return ouput;
                    }
                    var courses = [
                        'PHP',
                        'Javascript',
                        'Ruby'
                    ]

                    var htmls = courses.map2((cours) => {
                        return `<h2>${cours}</h2>`
                    });

                    console.log(htmls.join(''));
                    */

                        /* Use forEach 
                        Array.prototype.forEach2 = function(callback){
                            for (let i in this){
                                if(this.hasOwnProperty(i)){
                                    callback(this[i],i,this);
                                }
                            }
                        }
                        var courses = [
                            'PHP',
                            'Javascript',
                            'Ruby'
                        ]

                        courses.forEach2((cours,index,array) => {
                            console.log(index,cours,array);
                        });
                        */
                        
                            /* Use filter 
                            Array.prototype.filter2 = function(callback){
                                var output = [];
                            for(let i in this){
                                    if(this.hasOwnProperty(i)){
                                        var result = callback(this[i],i,this);
                                        if(result){
                                            output.push(this[i]);
                                        }
                                    }
                            }
                            return output;
                            }
                            var courses = [
                                {
                                    name : 'Javascript',
                                    coin : 720
                                },
                                {
                                    name : 'Ruby',
                                    coin : 800
                                },
                                {
                                    name : 'PHP',
                                    coin : 900
                                }
                            ]

                            var results = courses.filter2((cours) => {
                                return cours.coin < 900;
                            });
                            console.log(results);
                            */

                            