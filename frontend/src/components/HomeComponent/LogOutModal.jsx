export default function LogOutModal({handleLogOutModal, handleLogOut}){
    return(

    <div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-800' id="myModal">
        <div className="bg-white px-20 py-10 rounded-lg shadow-lg flex flex-col items-center gap-5 relative">
        <span onClick={handleLogOutModal} className="absolute right-7 top-4 cursor-pointer font-extrabold text-lg">X</span>
            <div className="flex flex-col h-36 w-40  items-center justify-evenly">
                <h2 className="text-2xl font-bold text-green-900">Logout?</h2>
                <div className="flex justify-between w-full gap-2">
                    <button onClick={handleLogOut} className="px-6 py-2 bg-green-600 text-white rounded-md">Yes</button>
                    <button onClick={handleLogOutModal} className="px-6 py-2 bg-red-600 text-white rounded-md">No</button>
                </div>
            </div>
        </div>
    </div>)

}