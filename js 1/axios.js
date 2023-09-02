// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>{console.log(res.data)})
// .catch((err)=>{console.log(err.status)})

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     body: JSON.stringify({
//       title: 'fooojikvgujctyndyth',
//       body: 'bardrnydytru',
//       userId: 1,
//     }),
//   })
//   .then((respons) =>console.log(respons.data))
//   .catch((err) =>console.log(err));

// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//     body: JSON.stringify({
//         id:1,
//       title: 'nola',
//       body: 'nosu',
//       userId: 1,
//     }),
//   })
//   .then((respons) =>console.log(respons.data))
//   .catch((err) =>console.log(err));

// axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
//     body: JSON.stringify({
//       title: 'kola',
//     }),
//   })
//   .then((respons) =>console.log(respons.data))
//   .catch((err) =>console.log(err));

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>console.log(res.data))