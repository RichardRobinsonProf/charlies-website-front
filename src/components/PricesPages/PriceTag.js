

function PriceTag  () {
    return (
        <div className='w-100 rounded mt-2 py-1 borderblue'>
            <div className="row">
                <div className="col-6 ms-5">
                    <p className= "display-6 mt-2 mb-0">Mes</p>
                    <p className="text-muted mt-0"> <small>Se renueva todos los meses</small></p>
                    </div>
                    <div className="col-4 d-flex align-items-center text-end ms-5 ">
                    <p className= "display-6 mt-2 mb-0">$USD 100/año</p>
                    </div>
            </div>
        </div>
    )
    
}

export default PriceTag