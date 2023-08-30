const { CORSJumper } = require("../src")

(async ()=>{
    const response1 = CORSJumper("https://freefakeapi.io/api/posts/", {
        proxy: true
    });
    const response2 = CORSJumper("https://freefakeapi.io/api/posts/");
    console.log("Response 1", response1);
    console.log("Response 2", response2);
})()