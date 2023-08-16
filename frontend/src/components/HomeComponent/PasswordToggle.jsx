import {useState} from 'react'


export default function PasswordToggle({onChange}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative'>

      <input name ="password" className="border border-solid border-black p-2 pr-10 rounded-lg" placeholder='*password'
        type={showPassword ? 'text' : 'password'}
        id="password"
        onChange={onChange}
      />

     
        {showPassword ? <h3 onClick={togglePasswordVisibility} className='bg-red-700 absolute right-3 top-2.5 cursor-pointer py-1 px-1.5 rounded-md text-white text-xs'>Hide</h3> 
                      : <h3 onClick={togglePasswordVisibility} className='bg-green-700 absolute right-3 top-2.5 cursor-pointer py-1 px-1.5 rounded-md text-white text-xs'>Show</h3>}
      
    </div>
  );
}


