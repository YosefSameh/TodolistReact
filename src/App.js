import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter , Form, Route, Routes } from 'react-router-dom';
import { logDOM } from '@testing-library/react';
import Fetch from './componates/Todolist';
import Todo from './componates/Todolist';

function App() {
  
  // const [value , setValue] = useState([{id:1,Titel:"yosef"}])
  
  // let nameValue = ""
  
  // let loop = value.map((obj)=>{
  //   console.log(obj);
  //   if (obj.Titel != "") {
      
  //     return(
  //       <div className='items' key={obj.id}>
  //         <div className='icon' ><input  type='checkbox'/></div>
  //       <div className='item'><h5 id='h5'>{obj.Titel}</h5> <span onClick={()=>handelEdite(obj.id)} >Edit</span>  <span onClick={()=>handelDelete(obj.id)}>X</span></div>
  //     </div>
  //     )
  //   }
  // })

  // let handelDelete = (id)=>{
  //   let filters = value.filter((ele)=> ele.id != id)
  //   setValue(filters)
  // }


  // let hadelClicked = (e)=>{
  //   e.preventDefault()
  //   nameValue = e.target[0].value
  //   if (nameValue != "") {
      
  //     let numberRandom = value.length + 1
  //     console.log(numberRandom);
      
  //       setValue([...value,{id:numberRandom, Titel:nameValue}])
  //     }else{
  //       console.log("erro");
  //     }
  //   }
    
    
    
  //   let handelEdite = (id)=>{
  //     console.log(nameValue ,"naeme valeu555");
  //   let index = id -1
  //   nameValue = value[index].id
  //   console.log(value[index].Titel,"edite");
  //   console.log(nameValue,"value name");
    
  // }
      
    


  
  return (
    <div className="App">
  
    

    <div className='parent'>
      <Todo/>
    </div>



    </div>
  );
}

export default App;








// =============================  
// let [value , setValue] = useState({name:'',phone:"",age:"", employee:false,salry:""})
//     function sudmit() {
      
//       if (value.name != "" && value.phone != "" && value.age != "" && value.employee != false && value.salry != "") {
//         alert("The Forme Has Been Submite Successfully")
//       }else{
        
//         return  
//     }
//     }
//     function colseRefresh(e) {
//       e.preventDefault()

//     }

              // <form onSubmit={colseRefresh} style={{display:'flex', justifyContent:'center', flexDirection:"column",  alignItems:"center"}}>
              //   <input value={value.name} onChange={( e)=>{setValue({...value, name:e.target.value})}} type='text'/>
              //   <label>PhoneNumber</label>
              //   <input value={value.phone} onChange={(e)=>{setValue({...value, phone:e.target.value})}} type='number'/>
              //   <label>Age</label>
              //   <input value={value.age} onChange={(e)=>{setValue({...value, age:e.target.value})}} type='number'/>
              //   <input value={value.employee} onChange={(e)=>{setValue({...value, employee:e.target.checked})}} type='checkbox'/>
              //   <label>Are You An Emplloyee</label>
              //   <input value={value.salry} onChange={(e)=>{setValue({...value, salry:e.target.value})}} type='number'/>
              //   <label>ٍSalry</label>
              //   <button onClick={sudmit}>sudmit</button>
              // </form>


// =============================

















  // ========================
  // const [player, setPlayer] = useState({
  //   firstName: 'Ranjani',
  //   lastName: 'Shettar',
  //   score: 10,
  // });
  
  // function handlePlusClick() {
  //   setPlayer({
  //     ...player,
  //     score:player.score+1
  //   })
  // }
  
  // function handleFirstNameChange(e) {
    //   setPlayer({
      //     ...player,
      //     firstName: e.target.value,
      //   });
      // }
      
      // function handleLastNameChange(e) {
        //   setPlayer({
          //     ...player,
          //     lastName: e.target.value
          //   });
          // }
    // ==========================          
    //     const initialProducts = [{
      //       id: 0,
      //       name: 'Baklava',
      //       count: 1,
      //     }
      //     , {
        //       id: 1,
        //       name: 'Cheese',
      //       count: 5,
      //     }, {
        //       id: 2,
        //       name: 'Spaghetti',
        //       count: 2,
        //     }
        //   ];
        
        
        //     const [ products, setProducts] = useState(initialProducts)
        
        // function handleIncreaseClick(productId) {
          //   setProducts(products.map(product => {
            //     if (product.id === productId) {
              //       return {
                //         ...product,
      //         count: product.count + 1
      //       };
      //     } else {
        //       return product;
        //     }
        //   }))
        // }
        // function handleDeletClick(productId) {
          //   setProducts(products.map(product => {
            //     if (product.id === productId) {
              //       return {
                //         ...product,
                //         count: product.count - 1
                //       };
                //     } else {
                  //       return product;
                  //     }
                  //   }))
                  // }
                  
                  // ==========================  