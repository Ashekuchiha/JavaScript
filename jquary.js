
const makereq = async(url,method,config)=>{
    try {
        const result = await $.ajax({
            url:url,
            method:method,
            config:config
        })
        return result;
    } catch (error) {
        console.log(error.statustext);
    }
}
const getdata=()=>{
    makereq("https://jsonplaceholder.typicode.com/posts/1","get")
    .then((res)=>console.log(res))
}
//getdata();
const postdata=()=>{
    makereq("https://jsonplaceholder.typicode.com/posts","post",{
                  title: 'foo',
                  body: 'bar',
                  userId: 1,
    })
    .then((res)=>console.log(res));
};
postdata();