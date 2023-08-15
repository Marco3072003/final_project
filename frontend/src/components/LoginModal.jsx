import PasswordToggle from "./PasswordToggle";

export default function LoginModal({handleOpenModal, handleSubmit, handleChange, handleOpenRegisterModal}){
    return(
      <div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-800' id="myModal">
        <div className="bg-white px-24 py-16 rounded-lg shadow-lg flex flex-col items-center gap-5 relative">
          <span onClick={handleOpenModal} className="absolute right-7 top-4 cursor-pointer font-extrabold text-lg">X</span>
          <h1 className="font-bold text-5xl center">LOGIN</h1>  
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
              
                <input onChange={handleChange} name="username" className="border border-solid border-black p-2 pr-10 rounded-lg" type='text' placeholder='*username'/>
                
              <PasswordToggle onChange={handleChange} />
              {/* <input onChange={handleChange} name="password" className="border border-solid border-black p-2 pr-10 rounded-lg" type='password' placeholder='password'/> */}
              <input type="submit" value='Login' className=" bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" id="closeModal"/>
            </form>
            <h3 className="inline-block text-gray-400">Doesn't have account? <button onClick={handleOpenRegisterModal } className="underline">register</button> </h3>
            
        </div>
    </div>)
    
}