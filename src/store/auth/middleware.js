export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch('/products')
    console.log(res)
    const data = await res.json()
    console.log(data)
    dispatch()
  } catch (error) {
    console.log(error)
  }
}

export default getProducts
