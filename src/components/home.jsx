import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Craft from './craft';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/craft')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{alignContent:"end",display:"flex",justifyContent:"flex-end",backgroundColor:"pink",color:"black"}}>
    
    <button style={{ padding:"14px 20px",backgroundColor:"pink",color:"black",borderRadius:"10px",borderWidth:"5px"}}>login </button>
    <button  style={{padding:"14px 20px",backgroundColor:"pink",color:"black",borderRadius:"10px",borderWidth:"5px"}}>craft ideas</button>
    <button  style={{padding:"14px 20px",backgroundColor:"pink",color:"black",borderRadius:"10px",borderWidth:"5px"}}>home decor </button>
    {/* <button  style={{padding:"14px 20px",backgroundColor:"pink",color:"black",borderRadius:"10px",borderWidth:"5px"}}>mod podge craft </button> */}
    </div>
    <center>
    <div style={{backgroundImage:`url(Art.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"1000px",width:"1200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h2>Crafted Creation : Inspiring your Artistic Journey</h2>
      <p></p>
      {/* <button onClick={logout} style={{padding:"14px 20px",backgroundColor:"wheat",color:"black",borderRadius:"10px",borderWidth:"5px"}}>login </button> */}
    </div>
    </center>
    <div style={{backgroundColor:'black',marginLeft:'20px',display:'flex',justifyContent:'space-around'}}>
      <a href='#' onClick={logout}>
      <img src='mode.jpg' style={{height:'200px'}}></img>
      <h3>mode podge craft</h3>
      </a>
      <a href='#'>
      <img src='decor.jpg' style={{height:'200px'}}></img>
      <h3>home decor</h3>
      </a>
      <a href='#'>
      <img src='fig2.jpg' style={{height:'200px'}}></img>
      <h3>kids craft</h3>
      </a>
    </div>

  </>


    );
};

export default Home;
