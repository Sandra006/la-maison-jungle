import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import "../styles/ShoppingList.css"

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category), 
        []
    )
    return (
        <div>
            <ul className="categories">
                {categories.map(cat => <li key={cat}>{cat}</li>)}
            </ul>
            <ul className="list">
                {plantList.map(plant => 
                <li key={plant.id} className="item">
                    {plant.isBestSale && <span>🔥</span>} 
                    {plant.name} 
                    {plant.isSpecialOffer && <div className="sales">Soldes</div>}
                    <CareScale careType='water' scaleValue={plant.water} />
                    <CareScale careType='light' scaleValue={plant.light} />
                </li>)}
            </ul>
        </div>
    )
}

export default ShoppingList