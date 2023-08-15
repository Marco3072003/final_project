import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal'
import SuccessModal from '../components/SuccessModal';
import LogOutModal from '../components/LogOutModal';
import NavHomeContent from '../components/NavHomeContent';
import { useEffect, useState } from 'react';

export default function Home({handleLogOut,handleLogOutModal, isLogOutModal}){
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const [isOpenSuccessRegisterModal, setIsOpenSuccessRegisterModal] = useState(false)
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({'username':'', 'password':''});
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [errors, setErrors] = useState({});
  const [videos, setVideos] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setIsLoggedIn(!!token); 
  }, [token]); 


  useEffect(()=>{
    getAllVideos().then(videos => {
    setVideos(videos);
    setLoading(false);
    })
  },[])

  function handleOpenSuccessRegisterModal(){
    setIsOpenRegisterModal(false);
    setIsOpenModal(false)
    isOpenSuccessRegisterModal ? setIsOpenSuccessRegisterModal(false) : setIsOpenSuccessRegisterModal(true);
  }

  async function register(){
    const response = await fetch('http://localhost:3001/register',{
      method:'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json', 
      },
    })
    if(response.ok){
      const data = await response.json();
      handleOpenSuccessRegisterModal(); 
    }else{
      const errorResponse = await response.json();
      alert(errorResponse.error);
    }
  }

  async function getToken(){
    
    const response = await fetch('http://localhost:3001/login',{
      method: 'POST',
      body: JSON.stringify(form), 
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if(response.ok){

    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('username', data.username);
    window.location.reload()
    
    }else{
      const errorResponse = await response.json();
      alert(errorResponse.error)
    }
    
    
  }

  async function getAllVideos(){
    const response = await fetch('http://localhost:3001/video');
    return await response.json();
  }
  
  

  function validateForm() {
    const newErrors = {};
    if (!form.username) {
      newErrors.username = 'Username is required';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }


   function handleOpenModal(){
    setIsOpenRegisterModal(false);
    setIsOpenSuccessRegisterModal(false);
    isOpenModal ? setIsOpenModal(false) : setIsOpenModal(true);
  }

  function handleOpenRegisterModal(){
    setIsOpenModal(false);
    setIsOpenSuccessRegisterModal(false)
    isOpenRegisterModal ? setIsOpenRegisterModal(false) : setIsOpenRegisterModal(true);
  }
  

  function handleChange(event){
    const {name, value} = event.target;
    setForm({...form, [name]:value});
  }
  
  function handleRegister(event){
    event.preventDefault();
    if(validateForm()){
      register();
    }else{
      alert('Input Cannot Be Empty')
    }
  }

  

   async function handleSubmit(event){
    event.preventDefault();
    if(validateForm()){
     getToken();
    }else{
      alert('Input Cannot Be Empty')
    }
  
  }

  function handleOpenVideo(videoId){
    window.location.href = `/detail/${videoId}`;
  }

  return (
  <>
    {isLoggedIn ? <Navbar  content ={<NavHomeContent onClick={handleLogOutModal}  isLoggedIn={isLoggedIn} username={username}/>}/> : <Navbar  content ={<NavHomeContent onClick={handleOpenModal} isLoggedIn = {isLoggedIn}  />}/>}

    <HomeContent handleOpenVideo={handleOpenVideo} handleOpenModal={handleOpenModal} isLoggedIn ={isLoggedIn} videos={videos} loading={loading} />
    
    {isLogOutModal && <LogOutModal handleLogOutModal={handleLogOutModal} handleLogOut={handleLogOut}/>}
    {isOpenModal && <LoginModal handleOpenModal={handleOpenModal} handleSubmit={handleSubmit} handleChange={handleChange} handleOpenRegisterModal={handleOpenRegisterModal} />} 
    {isOpenRegisterModal && <RegisterModal handleRegister={handleRegister} handleChange ={handleChange} handleOpenRegisterModal={handleOpenRegisterModal} />}
    {isOpenSuccessRegisterModal && <SuccessModal handleOpenSuccessRegisterModal={handleOpenSuccessRegisterModal} handleOpenModal={handleOpenModal}/>}
  </>

  );
}