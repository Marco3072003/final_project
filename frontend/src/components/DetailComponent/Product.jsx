export default function Product({title, price, imgUrl}){
    const imageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '0.375rem', // Adjust the border radius as needed
      };
    
      const overlayBackground = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(2, 48, 32, 0.3)', // Adjust the color and opacity of the overlay
      };
    return(
        <div className="relative bg-gray-500 w-full h-full rounded-md cursor-pointer border border-gray-600 border-spacing-6">
            <div className="w-full h-full" >
            <div style={overlayBackground}></div>
            <img className="w-full h-full rounded-md" src={imgUrl} alt="product" style={{imageStyle}}/>
            <h3 className="absolute bottom-5 left-3 z-20 font-bold text-white text-sm" style={{filter: 'drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5)) brightness(1.2) contrast(1.2)', WebkitTextStroke: '1px black'}}>{title}</h3>
            <h4 className="absolute bottom-1 left-3 italic  z-20 text-white font-bold text-sm" style={{filter: 'drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5)) brightness(1.2) contrast(1.2)', WebkitTextStroke: '1px black'}}>{price}</h4>
            </div>
        </div>
    
    )
}