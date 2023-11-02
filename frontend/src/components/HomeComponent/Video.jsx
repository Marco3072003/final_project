import { Link } from "react-router-dom";


export default function Video({isLoggedIn,handleOpenVideo,  handleOpenModal, videoId,imgUrl, title, views}){
   
    return isLoggedIn ?

        (
            <Link to={`detail/${videoId}`} onClick={()=>handleOpenVideo(videoId)}>
                <div style={{minHeight:'324px'}}
                     className="video bg-custom-gradient border border-solid border-gray-800
                                 shadow-md shadow-gray-900 rounded-xl cursor-pointer">
                
                        <img src={imgUrl} style={{objectFit:'cover', padding:'0px'}} className="thumbnail w-full rounded-t-lg mb-3 h-56" alt="img1" />
                
                    
                        <p className='space-y-10 text-lg font-bold mt-0.5 ml-2 text-gray-200 leading-tight'>{title}</p>
                        {(views === 0) ? (<p className='tracking-tight text-md font-medium ml-2 mb-5 text-gray-300'>belum ditonton</p>) : 
                        (<p className='tracking-tight text-md font-medium ml-2 mb-3 text-white'>{views}x ditonton</p>) }

                
                </div>
            </Link>
        ) : (
                <div onClick={handleOpenModal} className="video bg-custom-gradient border border-solid border-gray-800 shadow-md shadow-gray-900 rounded-xl  cursor-pointer">
                        
                <img src={imgUrl} style={{objectFit:'cover', padding:'0px'}} className="thumbnail w-full rounded-t-lg mb-3 h-56" alt="img1" />
            
                
                    <p className='space-y-10 text-lg font-bold mt-0.5 ml-2 text-gray-200 '>{title}</p>
                    {(views === 0) ? (<p className='tracking-tight text-md font-medium ml-2 mb-5 text-gray-300'>belum ditonton</p>) : 
                    (<p className='tracking-tight text-md font-medium ml-2 mb-3 text-white'>{views}x ditonton</p>) }

            
                </div>
            )
            

    

}