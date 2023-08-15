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
        <div className="detail-content flex min-h-screen">
            {/* product section */} 
            <div className="bg-color-template w-1/4 ">
                <div className="container pt-24">
                    <div className="mt-2 flex flex-col w-full h-full items-center gap-6">
                        
                        
                        {loadingProduct ? (
                                <p>Loading Product...</p>
                        
                                    ) : 
                                    
                                     ProductList.map((product,index)=>{
                                        return(<Link to={product.productURL}>
                                        <Product key={index} title={product.title} price='Rp.500.000' imgUrl={product.imgURL} onClick={handleRedirectProduct} /> 
                                        </Link>)
                                    }) 

                            }

                    </div>
                </div>
            </div> 
            
            {/* video section */}
            <DetailVideo />
            {/* comments section */}
            <div className="bg-color-template w-1/4 h-screen pt-20" >
                    <div className="comments-section-wrapper flex flex-col w-full h-full ">
                        {/* comments-wrapper */}
                        <div className="comment-wrapper h-5/6 w-full flex flex-col px-2 overflow-auto">
                                            
                            {   
                                
                                (!CommentList) ? (<h1 className="text-white">LOADING</h1>)
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
    )
}