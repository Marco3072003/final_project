
export default function Button({text, onClick}){
    return(
        <button className="box-border border border-solid border-white px-7 py-2 rounded-lg text-white text-xl 
                            font-semibold hover:bg-green-600 active:bg-green-800" >{text}</button>
    )
}