
//HTML DOM 
    var headingElement = document.querySelectorAll('h1');
// 1. Element : 
//     id: document.getElementById('id')                                                               -> trả về element
//     class: document.getElementsByClassName('class')                                                 -> trả về NodeList  (nếu muốn lấy element thì bỏ vào mảng)  
//     tag : document.getElementsByTagName('tag')                                                      -> trả về NodeList  (nếu muốn lấy element thì bỏ vào mảng)
//     CSS selector : document.querySelector('cssclass') || document.querySelectorAll('cssclass'),     -> trả về element
//     HTML collection : document.images ||document.forms || document.anchors     img,form,a           -> trả về NodeList  (nếu muốn lấy element thì bỏ vào mảng)
// 2. Attribute  
    //C1
    // headingElement.title = 'title-content';
    // headingElement.id = 'id-content';
    //C2
    //headingElement.setAttribute('class','content');
    //alert(headingElement.getAttribute('class','content'));
    //lưu ý: các atribute nếu hợp lí trong element của nó có thể goi ra luôn mà không cần dùng getAttribute
    //alert(headingElement.className)
    //nếu gọi href trong thẻ class thì sẽ lỗi
// 3. Text
/*
    headingElement.innerText  = "Jav"; ||     headingElement.textContent = "Java"
    getter : 
        +innerText : lấy ra dòng text sẽ hiện trên giao diện
        +textContent : lấy ra dòng text sẽ nhận các khoảng trắng và dòng code 
*/


// innerHTML :  setter: sử dụng được cả element,attribute,text node

//DOM STYLE
    var boxElement = document.querySelector('.box');

    //way 1:
    boxElement.style.width =  '100px';
    boxElement.style.height = '100px';
    //boxElement.style.backgroundColor = 'red';
    //way 2
    Object.assign(boxElement.style,{
        width : '100px',
        height : '100px',
    });


/* ClassList property : quản lý class trong element (số lượng class,tìm class)
1. add :thêm class vào element
2. contains :kiểm tra 1 class có nằm trong element hay ko?
3. remove : xóa class trong element
4. toggle : nếu có class thì xóa , không có thì thêm
*/

boxElement.classList.add('red');
console.log(boxElement.classList.contains('red'));
boxElement.classList.remove('red');
setInterval(()=>{
    boxElement.classList.toggle('red');
},1000)


//DOM EVENT : xử lý đơn giản, dễ code hơn Event listener
for (let index = 0; index < headingElement.length; index++) {
    headingElement[index].onclick = function(e){
        console.log(e.target);
    }
}



//1. Event listener
    // xử lý nhiều việc khi 1 event xảy ra
    //Lắng nghe / Hủy bỏ lắng nghe
    var btn = document.querySelector('.btn');
    function viec1(){
        console.log('viec1');
    }
    function viec2(){
        console.log('viec2');
    }
    btn.addEventListener('click',viec1);
    btn.addEventListener('click',viec2);

    setTimeout(function(){
    btn.removeEventListener('click',viec1);

    },3000)
 
//2.JSON
    // Là 1 định dạng dữ liệu (chuỗi)
    // JavaScript Object Notation
    // JSON: string,number, boolen,null,array,object
    // Encode(Mã hóa) / Decode (giải mã)
    // stringify: Từ Javascript types -> JSON
    // parse : Từ JSON -> Javascript types
    var a = '"Javascript"';
    var json = '["Javascript","Ruby","PHP"]';
    var javaScript = ["Javascript","Ruby","PHP"];
    console.log(JSON.parse(json)); //từ chuỗi thàdh mảng
    console.log(JSON.stringify(javaScript)); //từ mảng thành chuỗi
    console.log(JSON.stringify(
        {
            name : "Hoang",
            age : 9
        }
    ));

 
//3.Promise
    // Sync (đồng bộ)
    // Async (bất đồng bộ) : setTimeout, setInterval,fetch, XMLHttpRequest, request animation frame
    // Ly thuyet, cach hoat dong
        //+ Callback hell
        //+ Pyramid of doom
            //1. khởi tạo promise
            //2. trong constructor truyền vào executor function
            var promise = new Promise(
                //Executor
                function(resolve, reject){
                    //Logic
                    //Thành công : resolve
                    //Thất bại: reject
                    
            }) ;
            //promise có 3 trạng thái
                //pendding: đang chờ
                //fulfilled : thành công
                //Rejected: thất bại 
            //khi sử dụng promise, sử dụng qua phương thức then, catch
            //các phương thức này đều nhận callback function
            //then : resolve
            //catch : reject
            promise
                .then(function(){

                })

                .catch(function(){

                })

                .finally(function(){

                })
                // BT: in ra số thứ tự sau khoảng thời gian và không bất đồng bộ (không sử dụng setInterval)
                // function sleep(ms){
                //     return new Promise(function(resolve){
                //         setTimeout(resolve,ms);
                //     });
                // }
                // sleep(1000)
                //     .then(function(){
                //         console.log(1);
                //         return sleep(1000);
                //     })
                //     .then(function(){
                //         console.log(2);
                //         return sleep(1000);
                //     })
                //     .then(function(){
                //         console.log(3);
                //         return sleep(1000);
                //     })
                //     .finally(function(){
                //         console.log("DONE");
                //     })
                    
                    //Promise.resovle
                    //Promise.reject
                    //Promise.all
                    //BT: hợp nhất 2 promise ,nối mảng lại và chỉ mất 2s
                    // var promise1 = new Promise(function(resovle){
                    //     setTimeout(function(){
                    //         resovle([1]);
                    //     },1000)
                    // })
                    // var promise2 = new Promise(function(resovle){
                    //     setTimeout(function(){  
                    //         resovle([2,3]);
                    //     },2000)
                    // })
                    // Promise.all([promise1,promise2])
                    //     .then(function(result){
                    //         console.log(result);
                    //         console.log(result[0].concat(result[1])) ;      
                    //     })

                    //BT : tÌM RA COMMENT CỦA 1 USER
                    var users = [
                        {
                            id : 1,
                            name : "Kien Dam"
                        },
                        {
                            id : 2,
                            name : "Huy Hoang"
                        },
                        {
                            id : 3,
                            name : "Hung Dam"
                        }
                    ]
                    var comments = [
                        {
                            id : 1,
                            user_id : 1,
                            content : "Sao Anh Hoang xau trai the!"
                        },
                        {
                            id : 2,
                            user_id : 2,
                            content : "Anh cho do la mot loi khen :))"
                        },
                        {
                            id : 3,
                            user_id : 1,
                            content : "HAHA"
                        }
                    ]
                    //B1: Lấy conmment
                    //B2: Từ comment lấy ra user_id
                    //B3: Từ user_id lấy ra user tương ứng

                    //Fake API
                    function getComments(){
                        return new Promise(function(resovle){
                            setTimeout(function(){
                                resovle(comments);
                            },1000)
                        })
                     }
                    function getUsersByIds(userIds){
                        return new Promise(function(resovle){
                            var result = users.filter(function(user){
                                return  userIds.includes(user.id);
                            })
                            setTimeout(function(){
                                resovle(result);    
                            },1000)
                        })   
                     }
                    getComments()
                        .then(function(comments){
                            var userIds = comments.map(function(comment){ //lọc qua và đưa vào mảng các user_id
                                return comment.user_id;  //trả về đưa vào mảng
                            })
                            return getUsersByIds(userIds)
                                .then(function(users){
                                    return {
                                        users : users,
                                        comments : comments
                                    };
                                });
                        })
                        .then(function (data) {
                            var commentBlock = document.querySelector('.comments-block');
                            var html = '';
                            data.comments.forEach(function(comment){
                                var user = data.users.find(function(user){
                                    return user.id === comment.user_id;
                                })
                                html += `<li>${user.name} : ${comment.content}</li>`;   
                            });
                            commentBlock.innerHTML = html;
                        });

                    
      
// 4.Fetch : API(URL), CỔNG GIAO TIẾP GIỮA CÁC PM 
    //nhận được response -> JSON promise  
    // var postAPI = 'https://jsonplaceholder.typicode.com/posts'
    // fetch(postAPI)
    //     .then(function(response){ //phản hồi
    //         return response.json(); //JSON.parse: JSON -> Javascript types
    //     })
    //     .then(function(posts){
    //         var htmls = posts.map(function(post){
    //             return `
    //                 <h1>${post.title}</h1>
    //                 <p>${post.body}</p>
    //             `;
    //         });
    //         var html = htmls.join('');
    //         document.querySelector('.posts-block').innerHTML = html;
    //     })

    //JSON SERVER: API SERVER (FAKE API)
    //CRUD (POSTMAN)
        //+CREATE : tạo mới -> POST     
        //+READ : lấy dữ liệu -> GET    
        //+UPDATE : chỉnh sữa -> PUT    
        //+DELETE : xóa -> DELETE     
        
    //BT: Thêm,sửa,xóa khóa học với Fetch và RestAPI
    var coursesAPI = 'http://localhost:3000/courses';
    function start(){
        getCourses(renderCourses);
        handleCreateBtn();
    }
    start();

    //function
    function getCourses(callback){
        fetch(coursesAPI)
            .then(function(response) {
                return response.json();
            })
            .then(callback);
    }
    function createCourses(data,callback){
        var object = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
        fetch(coursesAPI,object)
            .then(function(response){
                return response.json();
            })
            .then(callback);
            
    }
    function deleteCourses(id){
        var object = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(coursesAPI + '/' + id, object)
            .then(function(response){
                return response.json();
            })
            .then(function(){
                getCourses(renderCourses);  
            });
            
    }
    function renderCourses(courses){
        var htmls = document.querySelector('.list-courses');
        var render = courses.map(function(course){
            return `
                <li>
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <button onclick="deleteCourses(${course.id})" >Xóa</button>
                </li>
            `;
        })
        htmls.innerHTML = render.join('');
    }
    function  handleCreateBtn(){
        var btnCteate = document.querySelector('.btn-create');
        btnCteate.onclick = function(){
            var name = document.querySelector('input[name="name"]').value;
            var description = document.querySelector('input[name="description"]').value;
            var data = {
                name : name,
                description : description
            }
            createCourses(data,function(){
                getCourses(renderCourses);
            });
        }
    }
// 5.DOM lacation
// 6.Local storage
// 7.Session storage
// 8.Coding convention
// 9.Best practices
// 10.Mistakes
// 11.Perfonmance
