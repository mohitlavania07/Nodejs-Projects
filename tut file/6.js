const a = 10;
const b = 0;

let wrintingData = new Promise((res, reject)=>{
    setTimeout(()=>{
    res(20);
    },2000);
})
wrintingData.then((data)=>{
    console.log(a+data);
})