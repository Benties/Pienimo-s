import { useEffect, useState } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { getMenuThunk } from '../../store/menu'
import { createPieThunk } from "../../store/pie";
import PieFormModal from "../pieBuilder";
import { pieDescription } from "./PieDescription";
import {addToCartThunk} from "../../store/cart"
import './pieMenu.css'
function SpecialtyPies() {
    const dispatch = useDispatch()
    const menu = useSelector(state => Object.values(state.menu.menu))
    useEffect(() => {
        dispatch(getMenuThunk())
    },[])


    if(!menu.length) return null
    return (
    <div id='menu-container'>
        {menu?.map((item, ind) =>
        <div className="menu-items">
            <h5>
                {item.name}
            </h5>
            <button className='add-cart' onClick={()=> dispatch(addToCartThunk(item))}>Add to Cart</button>
            <div className="custom-pie-butt">
                <PieFormModal pie={item}/>
            </div>
            <div className="pie-description">
                 {pieDescription[ind]}
                {/* {(Object.entries(item)
                    .filter(ele => ele[1] !== null && ele[0] !== 'name'))
                       .map(ele => <li>{ele[0]}</li>)} */}

            </div>
        </div>)}
    </div>
    )
}


export default SpecialtyPies
