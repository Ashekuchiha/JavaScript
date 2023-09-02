
 
// //get
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>res.json())
// .then((res)=>console.log(res))

const makecall=async(url,config)=>{
    const alldata= await fetch(url,config);
    if(!alldata.ok){
        let m=`found a error : ${alldata.status}`
        throw new Error(m);
    }
    var data=await alldata.json();
    return data;
}

const getdata=(url)=>{
    makecall(url)
    .then((response)=>{
        console.log(response);
    })
    .catch((Error)=>{
        console.log(Error);
    })
}
//getdata('https://jsonplaceholder.typicode.com/posts/1');

const postdata=(url,config)=>{
    makecall(url,config)
    .then((response)=>{
        console.log(response);
    })
    .catch((Error)=>{
        console.log(Error);
    })
}
// postdata('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });

const updatedata=(url,config)=>{
    makecall(url,config)
    .then((response)=>{
        console.log(response);
    })
    .catch((Error)=>{
        console.log(Error);
    })
}
// updatedata('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foollllll',
//       body: 'baraaaaaaaaaa',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });

const singelupdatedata=(url,config)=>{
    makecall(url,config)
    .then((response)=>{
        console.log(response);
    })
    .catch((Error)=>{
        console.log(Error);
    })
}
// singelupdatedata('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//       title: 'foollllllllllllllllll',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });

  const delet=(url,config)=>{
    makecall(url,config)
    .then((response)=>{
        console.log(response);
    })
    .catch((Error)=>{
        console.log(Error);
    })
}
// delet('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'delete',
//   });

//get with error handel
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(
//     (res)=>{
//         if(!res.ok){
//             const m=`errorjhgjhgjhbhngb :${res.statusText}`;
//             throw new Error(m);
//         }
//         return res.json();
//     }
// )
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

//post 
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'post',
//     headers:{
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'fooll',
//         body: 'baraa',
//         userId: 1,
//       }),
// })
// .then(
//     (res)=>{
//         if(!res.ok){
//             const m=`errorjhgjhgjhbhngb :${res.statusText}`;
//             throw new Error(m);
//         }
//         return res.json();
//     }
// )
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});


//update
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foolllkjhjh',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json',
//     },
// })
// .then((res)=>{
//     if(!res.ok){
//         const m=`error:${res.status}`;
//         throw new Error(m);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// patch=one item update
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then(
//     (res)=>{
//         if(!res.ok){
//             const m=`errorjhgjhgjhbhngb :${res.statusText}`;
//             throw new Error(m);
//         }
//         return res.json();
//     }
// )
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});


// delet
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:"delete",
// })
// .then(
//     (res)=>{
//         if(!res.ok){
//             const m=`errorjhgjhgjhbhngb :${res.statusText}`;
//             throw new Error(m);
//         }
//         return res.json();
//     }
// )
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});