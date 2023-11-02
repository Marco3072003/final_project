export default function SuccessRegisterContentModal({handleOpenModal, handleOpenSuccessRegisterModal}){
    return(
                <>
                    <span onClick={handleOpenSuccessRegisterModal} className="absolute right-7 top-4 cursor-pointer font-extrabold text-lg">X</span>
                    <h1 className="font-bold text-5xl center">Success Register Account</h1>  
                    <button onClick={handleOpenModal} className=" bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" id="closeModal">
                        Login
                    </button>
                </>
            )
}