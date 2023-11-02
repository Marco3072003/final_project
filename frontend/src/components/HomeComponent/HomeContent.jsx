import short1 from '../../assets/images/thumbnail1.jpg'
import Video from './Video'

export default function ({isLoggedIn, handleOpenModal, handleOpenVideo, videos, loading}){
    const {Videos} = videos;
    return(
    

        <div className=" pt-24 pb-5 flex justify-center">
            
            <div className="video-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-8 mt-2 mx-4">

                {loading ? (
                    <p></p>
                ) : 
                    Videos.map((video)=>{  
                                return  ( <Video key={video.videoId} handleOpenVideo={handleOpenVideo} 
                                        handleOpenModal={handleOpenModal} isLoggedIn={isLoggedIn} 
                                        videoId={video.videoId} imgUrl={video.imgURL} title={video.title} 
                                        views={video.views} />)
                                        
                                        
                                        })
                    
                    
                
                }         

            </div>


            
        </div>
        
        
    
    )
}