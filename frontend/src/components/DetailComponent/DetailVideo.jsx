import {useParams} from 'react-router-dom';

export default function DetailVideo(){
    const {id} = useParams();
    return(
    
        <div className="container" style={{width: '75%'}}>
            <iframe width="560" height="200" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{height:'100%'}}></iframe>
        </div>
   
    )
}