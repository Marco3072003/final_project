import Navbar from "../components/Navbar";
import NavDetailContent from '../components/NavDetailContent'
import DetailContent from '../components/DetailContent'
import LogOutModal from "../components/LogOutModal";
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

    },[products])

    async function getAllProducts(){
        const response = await fetch(`http://localhost:3001/video/${videoId}/product`,{
        headers: {
            'Authorization': `Bearer ${token}`, 
        },
    });
    if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setLoadingProduct(false);
    } else {
        const errorResponse = await response.json();
        
        console.error(errorResponse);
        setLoadingProduct(false);
    }

    }


    async function getAllComment(){
    const response = await fetch(`http://localhost:3001/video/${videoId}/comment`,{
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
    
        const response = await fetch('http://localhost:3001/video/'+videoId+'/comment',{
            method:'POST',
            body: JSON.stringify({username: username, comment:commentText}), 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        })
        if(response.ok){
            const data = await response.json();
            setCommentText('')
        }else{
            const errorResponse = await response.json();
            alert(errorResponse.Error)
          }
    }

    async function handleCommentSubmit(event){
        event.preventDefault();
        if(validateComment()){
            addComment();
        }else{
            alert('Comment is Empty')
        }

    }

    function validateComment() {
        const newErrors = {};
        if (!commentText) {
          newErrors.commentText = 'Comment is Empty';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      }

    function handleChangeComment(event){
        const newCommentText = event.target.value;
        setCommentText(newCommentText);
       
    }

    return(
        <>

        {isLogOutModal && <LogOutModal handleLogOutModal={handleLogOutModal} handleLogOut={handleLogOut}/>}
        <Navbar content={<NavDetailContent handleLogOutModal={handleLogOutModal} username={username} />}/>
        <DetailContent handleChangeComment={handleChangeComment} handleCommentSubmit={handleCommentSubmit}
         commentText={commentText} loadingProduct={loadingProduct} comments={comments} loading={loading} username={username} products={products}/>
        </>
    )
}