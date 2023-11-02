export default function NavButton({title, status, handleContentChanges=''}){

    return(

        <>
        {handleContentChanges === '' ? (
            <button className="border border-solid border-white-80 px-3 rounded-lg text-md text-white font-semibold
                                 hover:bg-green-600 active:bg-green-800 focus:ring ">
                {title}
            </button>
        ) : (
            <button
                onClick={() => handleContentChanges(status)}
                className="border border-solid border-white-80 px-3 rounded-lg text-md text-white font-semibold
                           hover:bg-green-600 active:bg-green-800 focus:ring"
            >
                {title}
            </button>
        )}
        </>
        
    )   

}