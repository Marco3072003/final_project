export default function InputWrapper({handleCommentSubmit, handleChangeComment, commentText}){
    return(
        <div className="input-comment-wrapper h-1/6 w-full bg-gray-900">
            <form onSubmit={handleCommentSubmit}className='flex w-full h-full justify-center items-center'action="">
                <div className="relative h-12 bg-white rounded-lg " style={{width: '90%', overflow: 'hidden'}}>
                <div className="w-full h-full">
                <input  onChange={handleChangeComment} value={commentText} className="h-full rounded-lg p-3 text-sm bg-transparent border-none focus:outline-none" name='comment' placeholder="Insert your comment here..." type="text" />
                </div>
                <button type="submit" className="absolute right-3 top-2 mt-0.5 bg-green-600 p-1 text-white hover:bg-green-500 active:bg-green-800 font-semibold text-sm rounded-md">comment</button>
                </div>
            </form>
        </div>
    )
}