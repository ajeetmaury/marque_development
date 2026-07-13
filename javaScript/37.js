// Fetch
// fetch("https://dummyjson.com/products")
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch(e => {
//     console.log(e.message);
// })

// ------------------------------------
fetch("https://dummyjson.com/posts")
.then((res) => {
    return res.json()
})
.then((data) =>{
    console.log(data);
})
.catch(e => {
    console.log(e.message);
})