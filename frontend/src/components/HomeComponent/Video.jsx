export default function Video({isLoggedIn, handleOpenVideo, handleOpenModal, videoId,imgUrl, title, views}){
    const handleClick = isLoggedIn ? () => handleOpenVideo(videoId) : handleOpenModal; 
    return(
        <div onClick={handleClick} className="video bg-custom-gradient border border-solid border-gray-800 shadow-md shadow-gray-900 rounded-xl  cursor-pointer">
           
            <img src={imgUrl} className="thumbnail w-full h-56 rounded-lg mb-2" alt="img1" />
           
            
                <p className='space-y-10 text-lg font-bold mt-0.5 ml-2 text-gray-200'>{title}</p>
                {(views === 0) ? (<p className='tracking-tight text-md font-medium ml-2 mb-5 text-gray-300'>belum ditonton</p>) : 
                (<p className='tracking-tight text-md font-medium ml-2 mb-3 text-white'>{views}x ditonton</p>) }
                
           
        </div>

    )

}