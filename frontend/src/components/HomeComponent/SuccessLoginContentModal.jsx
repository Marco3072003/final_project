export default function SuccessLoginContentModal({handleOpenSuccessLoginModal, username}){
        return  (<>
                    <span onClick={handleOpenSuccessLoginModal} className="absolute right-7 top-4 cursor-pointer font-extrabold text-lg">X</span>
                    <h1 className="font-bold text-5xl center">Success Login  as {username}</h1>  
                    <button onClick={handleOpenSuccessLoginModal} className=" bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" id="closeModal">
                        Close
                    </button>
                </>)
}