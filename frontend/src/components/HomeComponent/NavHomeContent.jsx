import NavButton from "../GeneralComponent/NavButton"
import Button from "../GeneralComponent/Button"

export default function NavHomeContent({onClick, isLoggedIn, username, handleContentChanges}){
    const text = isLoggedIn ? 'You\'re Log In as ' + username : 'login' 
    return(
    <>
        <div className='left'>
            <h1 className="text-2xl text-green-300 font-bold cursor-pointer pb-1">VIDEO PLAY</h1>
            <div className="m-0 flex space-x-4 ">
                <NavButton title = 'Home' handleContentChanges ={handleContentChanges} status={true}/>
                <NavButton title = 'Most Viewed' handleContentChanges ={handleContentChanges} status={false}/>
            </div>
        </div>
        <div className="right" onClick= {onClick}>
            <Button text={text}/>
        </div>
    </>
    )
}