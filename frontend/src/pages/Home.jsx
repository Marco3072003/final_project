import Navbar from '../components/GeneralComponent/Navbar';
import HomeContent from '../components/HomeComponent/HomeContent';
import LoginModal from '../components/HomeComponent/LoginModal';
import RegisterModal from '../components/HomeComponent/RegisterModal'
import SuccessModal from '../components/HomeComponent/SuccessModal';
import LogOutModal from '../components/HomeComponent/LogOutModal';
import NavHomeContent from '../components/HomeComponent/NavHomeContent';
import SuccessRegisterContentModal from '../components/HomeComponent/SuccessRegisterContentModal';
import SuccessLoginContentModal from '../components/HomeComponent/SuccessLoginContentModal';
import { useEffect, useState } from 'react';

export default function Home(){
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const [isOpenSuccessRegisterModal, setIsOpenSuccessRegisterModal] = useState(false)
  const [isOpenSuccessLoginModal, setIsOpenSuccessLoginModal] = useState(false)
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({'username':'', 'password':''});
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [videos, setVideos] = useState({});
  const [loading, setLoading] = useState(true);
  const [isHomeContent, setIsHomeContent] = useState(true);
  const [isLogOut, setIsLogOut] = useState(false);
  const [isLogOutModal, setIsLogOutModal] = useState(false);
  
  

  useEffect(() => {
    setIsLoggedIn(!!token); 
  }, [token]); 


  useEffect(()=>{
    setLoading(true);
    getAllVideos().then(videos => {
    setVideos(videos);
    handleContent(videos)
    setLoading(false)
    })

  },[isHomeContent])

  
  //Function API HANDLE
  async function register(){
    const response = await fetch('https://back-end-final-project-gg30.vercel.app/register',{
      method:'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json', 
      },
    })
      const data = await response.json();
      handleOpenSuccessRegisterModal(); 
  }

  async function getToken(){
    
    const response = await fetch('https://back-end-final-project-gg30.vercel.app/login',{
      method: 'POST',
      body: JSON.stringify(form), 
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    const data = await response.json();
    if(data.accessToken || data.username){
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('username', data.username);
        const newToken = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        setToken(newToken);
        setUsername(username);
        setIsOpenModal(false)
        setIsOpenSuccessLoginModal(true);
    }else{
        alert(data.error);
    }

  }

  async function getAllVideos(){
    const response = await fetch('https://back-end-final-project-gg30.vercel.app/video');
    return await response.json();
  }

  async function plusViewVideo(videoId){
    const response = await fetch(`https://back-end-final-project-gg30.vercel.app/video/${videoId}/play`,{
      method:'POST',
      headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }

    });

    return await response.json();
  }

  function handleLogOutModal(){
    isLogOutModal ? setIsLogOutModal(false) : setIsLogOutModal(true)
   }

   function handleLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLogOutModal(false); 
    setIsLoggedIn(false);
  }

  //Function Handle Content or Component
  function handleContent(videosPar){
    const videosArray = videosPar.Videos;
      if(!isHomeContent){
        const sortedVideos = [...videosArray].sort((a, b) => b.views - a.views);
        setVideos({Videos: sortedVideos})
      } 
  }

  function handleOpenSuccessRegisterModal(){
    setIsOpenRegisterModal(false);
    setIsOpenModal(false)
    isOpenSuccessRegisterModal ? setIsOpenSuccessRegisterModal(false) : setIsOpenSuccessRegisterModal(true);
  }

  function handleOpenSuccessLoginModal(){
    setIsOpenModal(false);
    setIsOpenRegisterModal(false)
    isOpenSuccessLoginModal ? setIsOpenSuccessLoginModal(false) : setIsOpenSuccessLoginModal(true);
  }

  function handleContentChanges(status){
    setIsHomeContent(status)
  }

  function validateForm() {
    const newErrors = {};
    if (!form.username) {
      newErrors.username = 'Username is required';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    }
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

  

  async function handleOpenVideo(videoId){
    const response = await plusViewVideo(videoId);
    console.log(response)
  }

  return (
  <>

    <Navbar>
      {isLoggedIn ? 
        <NavHomeContent onClick={handleLogOutModal}  isLoggedIn={isLoggedIn} username={username} handleContentChanges={handleContentChanges} />  :
        <NavHomeContent onClick={handleOpenModal} isLoggedIn = {isLoggedIn} handleContentChanges={handleContentChanges} />
      }
    </Navbar>
      

    {/* {isLoggedIn ? <Navbar  content ={<NavHomeContent onClick={handleLogOutModal}  isLoggedIn={isLoggedIn} username={username} handleContentChanges={handleContentChanges} />}/> : <Navbar  content ={<NavHomeContent onClick={handleOpenModal} isLoggedIn = {isLoggedIn} handleContentChanges={handleContentChanges} />}/>} */}

    <HomeContent handleOpenVideo={handleOpenVideo} handleOpenModal={handleOpenModal} isLoggedIn ={isLoggedIn} videos={videos} loading={loading} />
    
    {isLogOutModal && <LogOutModal handleLogOutModal={handleLogOutModal} handleLogOut={handleLogOut}/>}
    {isOpenModal && <LoginModal handleOpenModal={handleOpenModal} handleSubmit={handleSubmit} handleChange={handleChange} handleOpenRegisterModal={handleOpenRegisterModal} />} 
    {isOpenRegisterModal && <RegisterModal handleRegister={handleRegister} handleChange ={handleChange} handleOpenRegisterModal={handleOpenRegisterModal} />}
    {isOpenSuccessRegisterModal && <SuccessModal>
                                      <SuccessRegisterContentModal handleOpenSuccessRegisterModal={handleOpenSuccessRegisterModal} handleOpenModal={handleOpenModal}/>
                                   </SuccessModal>}
                                   
   {isOpenSuccessLoginModal && <SuccessModal>
                                    <SuccessLoginContentModal handleOpenSuccessLoginModal={handleOpenSuccessLoginModal} username={username}/>
                               </SuccessModal>
     } 
  </>

  );
}

