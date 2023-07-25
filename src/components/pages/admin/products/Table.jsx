import useFetch from "../../hooks/UseFetch"

const Table = () => {

    const {data, error, loading} = useFetch("public/products")

    if(loading) return <h1>Cargando...</h1>
    if(error) return <h1>Error en la peticion de productos.</h1>

    return(
        <div>
            <h1>Products</h1>
            {
              data.map(prod =>(
                  <div key={prod.id}> {JSON.stringify(prod)} </div>
              ))
            }
        </div>
    )
}

export default Table