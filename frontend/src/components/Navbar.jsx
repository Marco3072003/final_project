
export default function Navbar({content}){

return(    
    <nav className="flex fixed top-0 bg-custom-gradient px-8 w-full h-20 items-center justify-between z-40">
        
           {content}
        
    </nav>
    )
}