
// fetch('https://reqres.in/api/users')
//       .then(res => res.json())
//       .then(data =>{
//         console.log(data.data[0]);
//       })
//       .catch(error =>{
//         console.log('error')

//       });
// ============================

// add new user
// const newUser = {
//   id: 1,
//   name: 'ALine',
//   job: 'Front-end developer',
//   email: 'kyle1@gmail.com'
// };

// fetch('https://reqres.in/api/users', {
//  method: 'POST',
//  headers:{
//   'Content-Type': 'application/json'
//  },body: JSON.stringify(newUser)

// })
//    .then(res => res.json())
//    .then(data =>{
//     console.log(data);
//    }).catch(error => {
//     console.log(error);
//    });

//fetch data by using async and await
// const btnEl = document.querySelector(".btn");
// const newUser = {
//     id: 1,
//     name: 'Aline',
//     job: 'Front-end developer',
//     email: 'kyle1@gmail.com',
//     location: 'kibagabaga'
//   };
//   const clickHandler = async () => {
//     try{
//           const res = await fetch('https://reqres.in/api/users', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//       },body: JSON.stringify(newUser)
      
//       });
//       const data = await res.json()
//       console.log(data);
// } catch (error) {
//   console.log(error);
// }
// };
// btnEl.addEventListener("click", clickHandler);

//fetch data by using async and await by using PUT

// const btnEl = document.querySelector(".btn");
// const newUser = {
//     id: 1,
//     name: 'Aline',
//     job: 'Front-end developer',
//     email: 'kyle1@gmail.com',
//     location: 'kibagabaga'
//   };
//   const clickHandler = async () => {
//     try{
//           const res = await fetch('https://reqres.in/api/users/12', {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json'
//       },body: JSON.stringify(newUser)
      
//       });
//       const data = await res.json()
//       console.log(data);
// } catch (error) {
//   console.log(error);
// }
// };
// btnEl.addEventListener("click", clickHandler);

// //to display all users by using fetch(this link)
// fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(res => res.json())
//       .then(data =>{

//          // console.log(data.data[0]); all users 

         //to display all users by username(one way)
//         console.log(data[0].username);
//         console.log(data[1].username);
//         console.log(data[2].username);
//         console.log(data[3].username);
//         console.log(data[4].username);
//         console.log(data[5].username);
//         console.log(data[6].username);
//         console.log(data[7].username);
//         console.log(data[8].username);
//         console.log(data[9].username);
            
//       })
//       .catch(error =>{
//         console.log('error')

//       });

//to display all users by using fetch(this link) on the browsers
//to display all users by username(second way)
fetch('https://jsonplaceholder.typicode.com/users/')
.then(res => {
  if(!res.ok){
    console.log('problem');
    return;
  }
  return res.json();

})
.then(data => {
  for( let i = 0; i< data.length; i++){
    // console.log(data[i].id+' '+data[i].name);
    document.querySelector("ul").
    insertAdjacentHTML("beforeend",`<li>${data[i].name}</li>`)
  }
})




      
      
     


     