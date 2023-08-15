export default function Product({title, price, imgUrl}){
    return(
        <div className="relative bg-gray-500 w-60 h-32 rounded-md cursor-pointer">
            <img className="w-full h-full rounded-md" src={imgUrl} alt="product" />
            <div className='thumbnail-product absolute w-full h-full z-10 inset-0 rounded-md'></div>
            <h3 className="absolute inset-0 top-20 left-3 mt-1 text-white z-20 font-semibold shadow-lg">{title}</h3>
            <h4 className="absolute inset-0 top-24 left-3 mt-1 italic text-white z-20 font-medium shadow-lg text-md">{price}</h4>
        </div>
    )
}