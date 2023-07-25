import axios from "axios"
import {API_URL} from "../../../../constants/env"
import { token } from "../../../../helpers/auth"

const Form = () => {

  const haldleSubmit = (e) =>{
    e.preventDefault()

    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
      }
    }

    axios.post(`${API_URL}/admin/products`, data, {
      headers: {
        Authorization: `Bearer ${token()}`,
      }
    }) 
    .then(resp => {
      console.log(resp)
      alert("producto creado")
    })
    .catch(err => {
      console.log(err)
      alert("error al crear producto")
    })

  }

  return(
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={haldleSubmit}>
        <input type="text" name="productName" placeholder="Nombre" required />
        <input type="number" name="price" placeholder="precio" required />
        <input type="url" name="image" placeholder="Imagen" required />
        <textarea name="description" rows="10" required />
        <input type="text" name="color" placeholder="Color" required />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  )
}

export default Form