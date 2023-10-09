import CommentItem from "./CommentItem"
import InputWrapper from "./InputWrapper"
import DetailVideo from "./DetailVideo"
import Product from "./Product"
import { Link } from 'react-router-dom'

export default function DetailContent({handleCommentSubmit, handleChangeComment,loading, commentText,loadingProduct, comments:{CommentList} , products:{ProductList} }){
    function handleRedirectProduct(productUrl){
        window.open(productUrl,'_blank')
    }
    
    return(
        <div className="detail-content">
            <div className="bg-transparent flex flex-col">
            <div className="bg-transparent flex " style={{height: '650px'}}>
           
                {/* video section */}
                <DetailVideo />

                {/* comments section */}
                <div className="bg-color-template h-full" style={{width: '25%'}}>
                        <div className="comments-section-wrapper flex flex-col h-90.72% mt-16 ">
                            {/* comments-wrapper */}
                            
                            <div className="comment-wrapper  h-5/6 flex flex-col px-2 overflow-auto" >
                                                
                                {   
                                    
                                    (!CommentList) ? (<h1 className="text-white">LOADING COMMENTS....</h1>)
                                        : CommentList.map((comment,index)=>{
                                            return(<CommentItem key={index} username={comment.username} text={comment.comment}/>)
                                        
                                        })
                                }    
                                

                            </div>
                            {/* input comment */}
                            <InputWrapper handleCommentSubmit={handleCommentSubmit} commentText={commentText} handleChangeComment={handleChangeComment}/>
                        </div>
                    
                </div> 
            </div>

             {/* product section */} 
            <div className="bg-transparent flex-1 ">
                
                    <div className="bg-gray-600 ml-0 flex flex-row w-full h-full justify-around">
                        

                        
                        
                        {loadingProduct ? (
                                <p></p>
                        
                                    ) : 
                                    
                                     ProductList.map((product,index)=>{
                                        return(<Link to={product.productURL} className="h-32 w-60 flex">
                                        <Product key={index} title={product.title} price='Rp.500.000' imgUrl={product.imgURL} onClick={handleRedirectProduct} /> 
                                        </Link>)
                                    }) 

                            }

                    </div>
                
            </div> 
            
            

            </div>

            
            
        </div>
    )
}