export default function SuccessModal({children}){
    return(
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-800' id="myModal">
          <div className="bg-white px-24 py-16 rounded-lg shadow-lg flex flex-col items-center gap-5 relative">
            {children}
          </div>
      </div>)
}