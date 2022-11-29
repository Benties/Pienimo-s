import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'



const PieForm = ({setShowModal, pie}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(pie.quantity)
    const [bake, setBake] = useState(pie.bake)
    const [cut, setCut] = useState(pie.cut)
    const [size, setSize] = useState(pie.size)
    const [style, setStyle] = useState(pie.style)
    const [cheese, setCheese] = useState(pie.cheese)
    const [robust_inspired_tomato_sauce, setRobust_inspired_tomato_sauce] = useState(pie.robust_inspired_tomato_sauce)
    const [hearty_marinara_sauce, setHearty_marinara_sauce] = useState(pie.hearty_marinara_sauce)
    const [honey_bbq_sauce, setHoney_bbq_sauce] = useState(pie.honey_bbq_sauce)
    const [garlic_parmesan_sauce, setGarlic_parmesan_sauce] = useState(pie.garlic_parmesan_sauce)
    const [alfredo_sauce, setAlfredo_sauce] = useState(pie.alfredo_sauce)
    const [ranch, setRanch] = useState(pie.ranch)
    const [ham, setHam] = useState(pie.ham)
    const [italian_sausage, setItalian_sausage] = useState(pie.italian_sausage)
    const [beef, setBeef] = useState(pie.beef)
    const [premium_chicken, setPremium_chicken] = useState(pie.premium_chicken)
    const [bacon, setBacon] = useState(pie.bacon)
    const [salami, setSalami] = useState(pie.salami)
    const [philly_steak, setPhilly_steak] = useState(pie.philly_steak)
    const [pepperoni, setPepperoni] = useState(pie)
    const [hot_buffalo_sauce, setHot_buffalo_sauce] = useState(pie.hot_buffalo_sauce)
    const [jalapeno_pepper, setJalapeno_pepper] = useState(pie.jalapeno_pepper)
    const [onion, setOnion] = useState(pie.onion)
    const [banana_pepper, setBanana_pepper] = useState(pie.banana_pepper)
    const [diced_tomato, setDiced_tomato] = useState(pie.diced_tomato)
    const [black_olive, setBlack_olive] = useState(pie.black_olive)
    const [mushroom, setMushroom] = useState(pie.mushroom)
    const [pineapple, setPineapple] = useState(pie.pineapple)
    const [cheddar_cheese, setCheddar_cheese] = useState(pie.cheddar_cheese)
    const [green_pepper, setGreen_pepper] = useState(pie.green_pepper)
    const [spinach, setSpinach] = useState(pie.spinach)
    const [roasted_red_pepper, setRoasted_red_pepper] = useState(pie.roasted_red_pepper)
    const [feta_cheese, setFeta_cheese] = useState(pie.feta_cheese)
    const [shredded_parmesan_asiago, setShredded_parmesan_asiago] = useState(pie.shredded_parmesan_asiago)
    const [american_cheese, setAmerican_cheese] = useState(pie.american_cheese)
    const [shredded_provolone_cheese, setShredded_provolone_cheese] = useState(pie.shredded_provolone_cheese)
    const thisPie = {...pie}
    delete thisPie.name
    delete thisPie.id
    delete thisPie.menu_item
    const currPie = Object.entries(thisPie)

    const [checked, setChecked] = useState(currPie.filter(ele => ele[1] > 0).map(ele => ele[0]))
    const [topping, setTopping] = useState(thisPie)
    const removeTopping = (key) => {
        checked.splice(checked.indexOf(key), 1)
        setChecked([...checked])
    }
    console.log(topping)

    return (
        <form className='pie-form'>
            <h1> Pienimo's {pie.name} Pie builder</h1>
            {currPie.map(([key, val]) => (
                <div>

                    <label>
                        <input
                            type='radio'
                            checked={checked.includes(key)}
                            onClick={() => checked.includes(key)? removeTopping(key) : setChecked([...checked, key])}
                            />
                            {key}
                    </label>
                    {checked.includes(key) &&
                        <select value={topping.key} onChange={(e) => setTopping({...topping, [topping.key] : e.target.value})}>
                            <option value={1}>light</option>
                            <option value={2}>normal</option>
                            <option value={3}>extra</option>
                        </select> }
                </div>
            ))}
        </form>
    )
}
 export  default PieForm
