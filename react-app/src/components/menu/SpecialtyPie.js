import { useEffect, useState } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { getMenuThunk } from '../../store/menu'
import { createPieThunk } from "../../store/pie";
import PieFormModal from "../pieBuilder";
import { pieDescription } from "./PieDescription";
import {addToCartThunk} from "../../store/cart"

function SpecialtyPies() {
    const dispatch = useDispatch()
    const menu = useSelector(state => Object.values(state.menu.menu))
    console.log('menu',menu)
    useEffect(() => {
        dispatch(getMenuThunk())
    },[])


    if(!menu.length) return null
    return (
    <div>
        {menu?.map((item, ind) =>
        <div>
            {item.name}
            <li>
                 {pieDescription[ind]}
                {/* {(Object.entries(item)
                    .filter(ele => ele[1] !== null && ele[0] !== 'name'))
                       .map(ele => <li>{ele[0]}</li>)} */}

            </li>
            <button onClick={()=> dispatch(addToCartThunk(item))}>Add to Cart</button>
            <PieFormModal pie={item}/> {/*onclick display modal for pie builder*/}
        </div>)}
    </div>
    )
}


export default SpecialtyPies
