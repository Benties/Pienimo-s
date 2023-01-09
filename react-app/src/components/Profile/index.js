import React,{ useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import MapContainer from "../maps"
import './profile.css'
const PizzaProfile = () => {
    const user = useSelector(state => state.session?.user)
    const key = useSelector((state) => state.maps.key);

    const [streetAddress, setStreetAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zipCode, setZipCode] = useState()

    const changeAddress = () => {

    }

    let profilePage
    user?.first_name ?
    profilePage =
    <div id='profile-outer'>
    <div id='pie-profile-container'>
        <div id='pie-profile-header'>
            <div id='porfile-header-words'>YOUR PIE PROFILE</div>
        </div>
        <div id='profile-rewards'>
            <div>pie logo</div>
            <div>pie animation</div>
            <div id='profile-points-container'>
                <div id='profile-points'>
                    <div>{user.reward_point}</div>
                    <div>/60</div>
                </div>
                <div>TOWARD NEXT FREE PIE</div>
            </div>
            <button onClick={''}>REDEEM</button>
        </div>
        <div id='profile-settings'>
            <div id='settings-word'>PROFILE SETTINGS</div>
            <div id='settings-top'>
                <div id='contact-info'>
                    <div className="settings-title">Your Information</div>
                    <div>{user.first_name} {user.last_name}</div>
                    <div>{user.email}</div>
                    <div>{user.phone_number}</div>
                </div>
                <button id='address-info' onClick={changeAddress()}>
                    {/* <input
                        value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}/> */}
                    <div id='address-butt-text'>
                        <div className="settings-title">Delivery Address</div>
                        <div>{user.address.street_address}</div>
                        <div>{user.address.city}, {user.address.state} {user.address.zipcode}</div>
                    </div>
                </button>
                <div id='payment-info'>
                    <div className="settings-title">Primary Payment Method</div>
                    <div>Visa ending in ***1234</div>
                    <div>Expires on 12/21/41</div>
                </div>
            </div>
            <div id='maps-master-container'>
                <MapContainer/>
            </div>
        </div>
        {/* <div id='order-history'>
            <div>YOUR ORDER'S</div>
        </div> */}
    </div>
</div> :
profilePage =
<div id='profile-default'>You must be signed to view your profile</div>
    return (
        <div>
            {profilePage}
        </div>
    )
}


export default PizzaProfile
