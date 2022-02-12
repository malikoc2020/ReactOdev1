import axios from "axios";

async function GetUserGetPostInformations(id){
    var g = await axios("https://jsonplaceholder.typicode.com/users/"+id);
    var p = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id);

    g.data.Posts = p.data[0];

    return g.data;
}

let res = GetUserGetPostInformations("2");

//console.log(res);

res.then((data)=>console.log(data));
