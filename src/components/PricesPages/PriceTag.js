

function PriceTag  (props) {
    return (
        <div className='w-100 rounded mt-2 py-1 borderblue'>
            <div className="row">
                <div className="col-md-6 ms-md-5 ms-2">
                    <p className= "display-6 mt-2 mb-0">{props.time}</p>
                    <p className="text-muted mt-0"> <small>{props.pricesRenew}</small></p>
                    </div>
                    <div className="col-md-5 d-flex align-items-md-center text-end ">
                    <p className= "display-6 mt-md-2 mb-0 ms-2">{props.price}</p>
                    </div>
            </div>
        </div>
    )
    
}

export default PriceTag