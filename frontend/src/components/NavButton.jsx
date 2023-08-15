export default function NavButton(props){
    const{title} = props;
    return(
        <button className="border border-solid border-white-80 px-3 rounded-lg text-md text-white 
                            font-semibold hover:bg-green-600 active:bg-green-800 focus:ring">{title}</button>
    )   

}