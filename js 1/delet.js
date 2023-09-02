// console.log(window);
//onerror onload
//response responseText responseType responseURL responseXML statusText status
//setRequestHeader send open


const getdata=()=>{
    const xhr=new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1');
    xhr.send();
    xhr.onload=()=>{
        let data=xhr.response;
        console.log(data); //json obj
        console.log(JSON.parse(data));//js obj
        console.log(JSON.stringify(data)) //json formet
    }
}
getdata();