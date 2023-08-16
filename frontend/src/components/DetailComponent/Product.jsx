export default function Product({title, price, imgUrl}){
    return(
        <div className="relative bg-gray-500 w-full h-full rounded-md cursor-pointer flex just">
            <img className="w-full h-full rounded-md" src={imgUrl} alt="product" />
            <div className='thumbnail-product absolute w-full h-full z-10 inset-0 rounded-md'></div>
            <h3 className="absolute inset-0 top-20 left-3 mt-1 text-white z-20 text-sm font-medium shadow-lg">{title}</h3>
            <h4 className="absolute inset-0 top-24 left-3 mt-1 italic text-white z-20 font-medium shadow-lg text-sm">{price}</h4>
        </div>
    )
}