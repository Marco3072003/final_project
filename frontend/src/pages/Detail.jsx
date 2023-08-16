import NavDetailContent from '../components/DetailComponent/NavDetailContent'
import DetailContent from '../components/DetailComponent/DetailContent'
import LogOutModal from "../components/HomeComponent/LogOutModal";
import { useState, useEffect } from 'react' 
import {useParams} from 'react-router-dom'

export default function Detail({handleLogOutModal, handleLogOut,isLogOutModal}){
    const [commentText, setCommentText] = useState('');
    const [errors, setErrors] = useState({});
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const videoId = useParams().id;
    const [comments, setComments] = useState({});
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true);
    const [loadingProduct, setLoadingProduct] = useState(true);
    

    useEffect(()=>{
        getAllComment();
        
        
      },[handleCommentSubmit])

    useEffect(()=>{
        getAllProducts();

    },[])

    //Function API Handle
    async function getAllProducts(){
        const response = await fetch(`https://back-end-final-project-gg30.vercel.app/video/${videoId}/product`,{
        headers: {
            'Authorization': `Bearer ${token}`, 
        },
    });
        const data = await response.json();
        setProducts(data);
        setLoadingProduct(false);
    }


    async function getAllComment(){
    const response = await fetch(`https://back-end-final-project-gg30.vercel.app/video/${videoId}/comment`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
    });
        const data =  await response.json();
        setComments(data);
        setLoading(false);
    }

    async function addComment(){
    
        const response = await fetch('https://back-end-final-project-gg30.vercel.app/video/'+videoId+'/comment',{
            method:'POST',
            body: JSON.stringify({username: username, comment:commentText}), 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        })
        
    }

   

    //Function Handle Componen
    function validateComment() {
        const newErrors = {};
        if (!commentText) {
          newErrors.commentText = 'Comment is Empty';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleCommentSubmit(event){
    event.preventDefault();
    if(validateComment()){
        addComment();
    }else{
        alert('Comment is Empty')
    }

    }

    function handleChangeComment(event){
        const newCommentText = event.target.value;
        setCommentText(newCommentText);
       
    }

    return(
        <>

        {isLogOutModal && <LogOutModal handleLogOutModal={handleLogOutModal} handleLogOut={handleLogOut}/>}
        <nav className=" flex fixed top-0 bg-custom-gradient px-8 w-full h-14 items-center justify-between z-40">
        <NavDetailContent handleLogOutModal={handleLogOutModal} username={username} />
        </nav>
        <DetailContent handleChangeComment={handleChangeComment} handleCommentSubmit={handleCommentSubmit}
         commentText={commentText} loadingProduct={loadingProduct} comments={comments} loading={loading} username={username} products={products}/>
        </>
    )
}