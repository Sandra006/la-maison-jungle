import '../styles/Cart.css'

function Cart() {
  const plants = ["Monstera", "Lierre", "Bouquet de fleurs"]
  const price1 = 8
  const price2 = 10
  const price3 = 15
  const total = price1 + price2 + price3
  
  return (
    <div className='cart'>
      <h2>Panier</h2>
      <ul>
        <li>{plants[0]} : {price1}€</li>
        <li>{plants[1]} : {price2}€</li>
        <li>{plants[2]} : {price3}€</li>
      </ul>
      Total : {total}€
    </div>)
}

export default Cart