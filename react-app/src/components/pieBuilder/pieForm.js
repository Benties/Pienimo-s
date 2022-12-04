import {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createPieThunk } from '../../store/pie'
import { addToCartThunk } from '../../store/cart'
import './pieForm.css'


const PieForm = ({setShowModal, pie, cart}) => {
    const pieBuilder = useRef(null)
    const dispatch = useDispatch()
    const [size, setSize] = useState(pie.size)
    const [style, setStyle] = useState(pie.style)
    const [bake, setBake] = useState(pie.bake)
    const [seasoning, setSeasoning] = useState(pie.seasoning)
    const [cut, setCut] = useState(pie.cut)
    const [quantity, setQuantity] = useState(pie.quantity)

    const thisPie = {...pie}
    delete thisPie?.name ; delete thisPie.id ; delete thisPie.menu_item ; delete thisPie.size ;
    delete thisPie.style; delete thisPie.bake; delete thisPie.seasoning ; delete thisPie.cut ;
    delete thisPie.quantity; delete thisPie.pie_img;
    const currPie = Object.entries(thisPie)

    const [checked, setChecked] = useState(currPie.filter(ele => ele[1] > 0).map(ele => ele[0]))
    const [topping, setTopping] = useState(thisPie)
    // const [currSauce, setSauce] = useState(topping.filter(sauce=> topping.includes(sauce)))
    const removeTopping = (key) => {
        checked.splice(checked.indexOf(key), 1)
        setChecked([...checked])
    }
    const meats = ['ham', 'beef', 'italian_sausage', 'premium_chicken', 'salami', 'bacon', 'pepperoni', 'philly_steak']
    const sauce = ['robust_inspired_tomato_sauce', 'hearty_marinara_sauce', 'honey_bbq_sauce', 'garlic_parmesan_sauce', 'alfredo_sauce', 'ranch']
    // const [currSauce, setSauce] = useState(topping.filter(sauce => topping.includes(sauce)))
    // console.log(currSauce)
    const toppingType = (key) => {
        if(String(key) === 'cheese') return 'cheese'
        if(sauce.includes(key)) return 'sauce'
        if(meats.includes(key)) return 'meat'
        return 'vege'
    }

    // const changeSauce = (key) => {
    //     checked.splice()
    //     checked.includes(key)? removeTopping(key) : (setChecked([...checked, key]))
    //     setTopping({...topping, [`${key}`] : Number(2)})
    // }

    const addToOrder = (e) => {
        e.preventDefault()
        const payload = {
            'price' : pie.price *= parseFloat(quantity),
            'name' : pie.name? pie.name : null,
            'pie_img' : pie.pie_img ? pie.pie_img : 'https://i.imgur.com/qMF3XHK.jpg',
            'size': size,
            'style': style,
            'bake' : bake,
            'seasoning': seasoning === true ? 'True' : 'False',
            'cut': cut,
            'quantity': quantity,
            ...topping
        }
        const newPie = dispatch(addToCartThunk(payload) )
        console.log('thismy newpie',payload)
        setShowModal(false)
        e.stopPropagation()
    }
    return (
        <form ref={pieBuilder} id='pie-form' onSubmit={addToOrder}>
            <h1 id='builder-title'> Pienimo's Pie builder</h1>
            <div id='left-box-builder'>
            <div className='size-crust top-box'>
                <div className='top-title'>1. SIZE & CRUST</div>
                <div className='size'>
                    <label id='small'>
                        <h3>Small</h3>
                        <input
                            type='radio'
                            name='size'
                            checked={size === 'small'}
                            onClick={() => setSize('small')}
                            />
                    </label>
                    <label id='med'>
                        <h3>Medium</h3>
                        <input
                            type='radio'
                            name='size'
                            checked={size === 'medium'}
                            onClick={() => setSize('medium')}
                            />
                    </label>
                    <label id='large'>
                        <h3>Large</h3>
                        <input
                            type='radio'
                            name='size'
                            checked={size === 'large'}
                            onClick={() => setSize('large')}
                            />
                    </label>
                    <label id='x-large'>
                        <h3>X-Large</h3>
                        <input
                            type='radio'
                            name='size'
                            checked={size === 'x-large'}
                            onClick={() => setSize('x-large')}
                            />
                    </label>
                </div>
                <div className='style'>
                    <label>
                        <h3>Brooklyn Style</h3>
                        <p>Hand stretched to be big, thin and perfectly foldable.</p>
                        <input
                            type='radio'
                            name='style'
                            checked={style === 'brooklyn'}
                            onClick={() => setStyle('brooklyn')}
                            />
                    </label>
                    <label>
                        <h3>Hand Tossed</h3>
                        <p>Garlic-seasoned crust with a rich, buttery taste.</p>
                        <input
                            type='radio'
                            name='style'
                            checked={style === 'hand'}
                            onClick={() => setStyle('hand')}
                            />
                    </label>
                    <label>
                        <h3>Crunchy Thin Crust</h3>
                        <p>Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.</p>
                        <input
                            type='radio'
                            name='style'
                            checked={style === 'thin'}
                            onClick={() => setStyle('thin')}
                            />
                    </label>
                </div>
            </div>
            <div className='top-box'>
                <div className='top-title'>2. CHEESE</div>
                {currPie.filter(([key, val]) => key === 'cheese').map(([key, val]) => (
                    <div className={toppingType(key)}>
                        {key}
                        <label>
                            <input
                                type='radio'
                                checked={checked.includes(key)}
                                onClick={() => checked.includes(key)? removeTopping(key) : (setChecked([...checked, key]), setTopping({...topping, [`${key}`] : Number(2)}))}
                                />
                        {checked.includes(key) &&
                            <select value={topping[`${key}`]}  onChange={(e) => setTopping({...topping, [`${key}`] : Number(e.target.value)})}>
                                <option value={1}>light</option>
                                <option value={2}>normal</option>
                                <option value={3}>extra</option>
                            </select> }
                        </label>
                    </div>
                ))}
            </div>
            <div className='top-box'>
                <div className='top-title'>3. SAUCE</div>
                {currPie.filter(([key, val]) => sauce.includes(key)).map(([key, val]) => (
                    <div className={toppingType(key)}>
                        {key}
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                checked={checked.includes(key)}
                                // checked={currSauce === String(key)}
                                // onChange={() => removeTopping(key)}
                                onClick={() => checked.includes(key)? removeTopping(key) : (setChecked([...checked, key]), setTopping({...topping, [`${key}`] : Number(2)}))}
                                // onClick={() => (setSauce(key), changeSauce(key), setTopping({...topping, [`${key}`] : Number(2)}))}
                                />
                        {checked.includes(key) &&
                            <select value={topping[`${key}`]}  onChange={(e) => setTopping({...topping, [`${key}`] : Number(e.target.value)})}>
                                <option value={1}>light</option>
                                <option value={2}>normal</option>
                                <option value={3}>extra</option>
                            </select> }
                        </label>
                    </div>
                ))}
            </div>
            <div className='top-box'>
                <div className='top-title'>4. Toppings</div>
                {currPie.filter(([key, val]) => key !== 'cheese' && key !== 'tempId' && !(sauce.includes(key))).map(([key, val]) => (
                    <div className={toppingType(key)}>
                        {key}
                        <label>
                            <input
                                type='radio'
                                checked={checked.includes(key)}
                                onClick={() => checked.includes(key)? removeTopping(key) : (setChecked([...checked, key]), setTopping({...topping, [`${key}`] : Number(2)}))}
                                />
                        {checked.includes(key) &&
                            <select value={topping[`${key}`]}  onChange={(e) => setTopping({...topping, [`${key}`] : Number(e.target.value)})}>
                                <option value={1}>light</option>
                                <option value={2}>normal</option>
                                <option value={3}>extra</option>
                            </select> }
                        </label>
                    </div>
                ))}
            </div>
            <div className='special-instructions top-box'>
                <div className='top-title'>5. Special Instructions</div>
                <h3>Bake</h3>
                <label>Well Done
                    <input
                        type='radio'
                        name='bake'
                        checked={bake === 'well'}
                        onClick={() => setBake('well')}
                    />
                </label>
                <label>Normal Bake
                    <input
                        type='radio'
                        name='bake'
                        checked={bake === 'normal'}
                        onClick={() => setBake('normal')}
                    />
                </label>
                <h3>Seasoning</h3>
                <label>Garlic-Seasoned Crust
                    <input
                        type='radio'
                        name='seasoning'
                        checked={seasoning === true}
                        onClick={() => setSeasoning(true)}/>
                </label>
                <label>No Garlic-Seasoned Crust
                    <input
                        type='radio'
                        name='seasoning'
                        checked={seasoning === false}
                        onClick={() => setSeasoning(false)}/>
                </label>
                <h3>Cut</h3>
                <label>Pie Cut
                    <input
                        type='radio'
                        name='cut'
                        checked={cut === 'pie'}
                        onClick={() => setCut('pie')}/>
                </label>
                <label>Square
                    <input
                        type='radio'
                        name='cut'
                        checked={cut === 'square'}
                        onClick={() => setCut('square')}/>
                </label>
                <label>Uncut
                    <input
                        type='radio'
                        name='cut'
                        checked={cut === 'uncut'}
                        onClick={() => setCut('uncut')}/>
                </label>
            </div>
            </div>
            <div className='lastBox top-box'>
                <div className='top-title'>MY PIZZA</div>
                Quantity:
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
                <button type='submit' id='addOrder'>{cart ? 'SAVE CHANGES' : 'ADD TO ORDER'}</button>
            </div>
        </form>
    )
}
 export  default PieForm




//  const [cheese, setCheese] = useState(pie.cheese)
//  const [robust_inspired_tomato_sauce, setRobust_inspired_tomato_sauce] = useState(pie.robust_inspired_tomato_sauce)
//  const [hearty_marinara_sauce, setHearty_marinara_sauce] = useState(pie.hearty_marinara_sauce)
//  const [honey_bbq_sauce, setHoney_bbq_sauce] = useState(pie.honey_bbq_sauce)
//  const [garlic_parmesan_sauce, setGarlic_parmesan_sauce] = useState(pie.garlic_parmesan_sauce)
//  const [alfredo_sauce, setAlfredo_sauce] = useState(pie.alfredo_sauce)
//  const [ranch, setRanch] = useState(pie.ranch)
//  const [ham, setHam] = useState(pie.ham)
//  const [italian_sausage, setItalian_sausage] = useState(pie.italian_sausage)
//  const [beef, setBeef] = useState(pie.beef)
//  const [premium_chicken, setPremium_chicken] = useState(pie.premium_chicken)
//  const [bacon, setBacon] = useState(pie.bacon)
//  const [salami, setSalami] = useState(pie.salami)
//  const [philly_steak, setPhilly_steak] = useState(pie.philly_steak)
//  const [pepperoni, setPepperoni] = useState(pie.pepperoni)
//  const [hot_buffalo_sauce, setHot_buffalo_sauce] = useState(pie.hot_buffalo_sauce)
//  const [jalapeno_pepper, setJalapeno_pepper] = useState(pie.jalapeno_pepper)
//  const [onion, setOnion] = useState(pie.onion)
//  const [banana_pepper, setBanana_pepper] = useState(pie.banana_pepper)
//  const [diced_tomato, setDiced_tomato] = useState(pie.diced_tomato)
//  const [black_olive, setBlack_olive] = useState(pie.black_olive)
//  const [mushroom, setMushroom] = useState(pie.mushroom)
//  const [pineapple, setPineapple] = useState(pie.pineapple)
//  const [cheddar_cheese, setCheddar_cheese] = useState(pie.cheddar_cheese)
//  const [green_pepper, setGreen_pepper] = useState(pie.green_pepper)
//  const [spinach, setSpinach] = useState(pie.spinach)
//  const [roasted_red_pepper, setRoasted_red_pepper] = useState(pie.roasted_red_pepper)
//  const [feta_cheese, setFeta_cheese] = useState(pie.feta_cheese)
//  const [shredded_parmesan_asiago, setShredded_parmesan_asiago] = useState(pie.shredded_parmesan_asiago)
//  const [american_cheese, setAmerican_cheese] = useState(pie.american_cheese)
//  const [shredded_provolone_cheese, setShredded_provolone_cheese] = useState(pie.shredded_provolone_cheese)
