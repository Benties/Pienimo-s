import React,{ useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import MapContainer from "../maps"
import './profile.css'
const PizzaProfile = () => {

    const user = useSelector(state => state.session?.user)

    return (
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
                            <div>Your Information</div>
                            <div>{user.first_name} {user.last_name}</div>
                            <div>{user.email}</div>
                            <div>{user.phone_number}</div>
                        </div>
                        <div id='address-info'>
                            <div>Address</div>
                            <div>216 N9TH ST</div>
                            <div>PHILLY, PA ZIP</div>
                        </div>
                        <div id='payment-info'>
                            <div>Primary Payment Method</div>
                            <div>Visa ending in ***1234</div>
                            <div>Expires on 12/21/41</div>
                        </div>
                    </div>
                    <div id='maps-master-container'>
                        <MapContainer/>
                    </div>
                </div>
                <div id='order-history'>
                    <div>YOUR ORDER'S</div>
                </div>
            </div>
        </div>
    )
}


export default PizzaProfile
