export default function CommentItem({username,text}){
    return(
        
            <div className="w-full  border border-dashed border-green-400 shadow-sm shadow-green-400 py-3 pr-5 px-2 p rounded-md flex flex-col gap-2 my-2   ">
                <div className="user bg-transparent w-5/6 h-3 text-sm font-bold text-white">@{username}</div>
                
                    <p className=" text-white text-sm">
                        {text}
                    </p>
                
            </div>
        
    )
}