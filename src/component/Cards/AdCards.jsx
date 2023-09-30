import {products} from '../Items/Items'

export const AdCards = () => {
    
    return(
        <div className="card-container d-flex flex-wrap justify-content-center flex-row gap-3">
            {products.slice(0, 4).map((data, index) => (
                <div key={index} className="card text-center border-0 overflow-hidden" style={{width: "23%"}}>
                    <div className='' style={{height:"140px"}}>
                        <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                    </div>  
                    <div>
                        <span>{data.name}</span>
                        <p>Price: ${data.price}</p>
                    </div>  
                </div>
            ))}
        </div>    
    )
}