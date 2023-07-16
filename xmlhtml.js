
const makereq=(method,url,data)=>{
    const xhr=new XMLHttpRequest();
xhr.open(method,url);

xhr.setRequestHeader('content-type','application/json');

xhr.onload=()=>{
    let data= xhr.response;
    //console.log(xhr.responseText);//tex,type,url,status,statustext
    console.log(data);
}
xhr.onerror=(err)=>{
    console.log(err);
}
xhr.send(JSON.stringify(data));
}

// const get=(method,url)=>{
//     makereq(method,url);
// }
// get('get',"https://jsonplaceholder.typicode.com/posts/1");


// const send =(method,url,data)=>{
//     makereq(method,url,data);
// }
// send('post','https://jsonplaceholder.typicode.com/posts',{
//     title: 'foo',
// body: 'bar',
// userId: 1,
// });

// const update =(method,url,data)=>{
//     makereq(method,url,data);
// }
// update('put','https://jsonplaceholder.typicode.com/posts/1',{
//     id: 1,
//     title: 'foollllll',
//     body: 'baraaaa',
//     userId: 1,
// });


// const singleUpdate =(method,url,data)=>{
//     makereq(method,url,data);
// }
// singleUpdate('put','https://jsonplaceholder.typicode.com/posts/1',{
//     body:'chng body',
// });


// const delet=(method,url)=>{
//     makereq(method,url);
// }
// delet('DELETE',"https://jsonplaceholder.typicode.com/posts/1");

