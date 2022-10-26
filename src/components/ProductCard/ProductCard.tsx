import IProduct from "../../interfaces/IProduct"
import fixDate from "../../utils/fixDate"
import numberToMoney from "../../utils/numberToMoney"

interface IProps { product: IProduct }

export default function ProductCard (props: IProps) {
    const { product } = props
    return (
        <a href="" className="">
            <img src="" alt="" />
            <div className="">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            </div>
            <div className="">
                <p className="">${numberToMoney(product.price)}</p>
                <p>${product.city}</p>
                <p>${fixDate(product.date)}</p>
            </div>
        </a>
    )
}