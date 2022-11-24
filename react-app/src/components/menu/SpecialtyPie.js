import { useEffect, useState } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { getMenuThunk } from '../../store/menu'

function SpecialtyPies() {
    const dispatch = useDispatch()
    const menu = useSelector(state => Object.values(state.menu.menu))
    console.log('ssss',menu)
    useEffect(() => {
        dispatch(getMenuThunk())
    },[])


    if(!menu.length) return null
    return (
    <div>
        {menu?.map(item =>
        <li>
            {item.name}
            {(Object.entries(item)
                .filter(ele => ele[1] !== null && ele[0] !== 'name'))
                    .map(ele => <li>{ele[0]}</li>)}

        </li>)}
    </div>
    )
}


export default SpecialtyPies
