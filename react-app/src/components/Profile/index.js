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
    const [address, setAddress] = useState(true)

    const changeAddress = async (payload, address_id) => {
        const response = await fetch(`/api/address/${address_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (response.ok) {
            const addy = await response.json()
            return addy;
          } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
              return data.errors;
            }
          } else {
            return ['An error occurred. Please try again.']
          }
    }

    const submitAddress = async (payload) => {
        const response = await fetch(`/api/address`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                'user_id' : user.id,
                'street_address': streetAddress,
                'city' : city,
                'state' : state,
                'zipcode' : zipCode
            })
        })
        if (response.ok) {
            const addy = await response.json()
            return addy;
          } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
              return data.errors;
            }
          } else {
            return ['An error occurred. Please try again.']
          }
    }
    const onSubmit = () => {

        const payload = {
            'street_address': streetAddress,
            'city' : city,
            'state' : state,
            'zipcode' : zipCode
        }
        changeAddress(payload, user.address.id)
    }

    const newSubmit = () => {
        // const payload = {
        //     'user_id' : user.id,
        //     'street_address': streetAddress,
        //     'city' : city,
        //     'state' : state,
        //     'zipcode' : zipCode
        // }
        // console.log('helloooooooooooooooooooooooo')
        // console.log('this si front end payload', payload)
        submitAddress()
    }

    let addressPlacement
    if(user?.first_name){
            address ?
            addressPlacement =
            <div id='address-butt-text'>
                <div>{user.address === '' ? 'Street Address' : user.address.street_address}</div>
                <div>{user.address === '' ? 'City' :user.address.city}, {user.address === '' ? 'State,' : user.address.state} {user.address === '' ? 'Zipcode' : user.address.zipcode}</div>
            </div> :
            addressPlacement =
            <form onSubmit={user.address === '' ? newSubmit : onSubmit} id='address-form'>
                <input
                value={streetAddress}
                placeholder='Street Address'
                onChange={(e) => setStreetAddress(e.target.value)}/>
                <input
                value={city}
                placeholder='City'
                onChange={(e) => setCity(e.target.value)}/>
                <input
                value={state}
                placeholder='State'
                onChange={(e) => setState(e.target.value)}/>
                <input
                value={zipCode}
                placeholder='Zipcode'
                onChange={(e) => setZipCode(e.target.value)}/>
                <button>Enter Address</button>
            </form>
    }

    let profilePage
    user?.first_name ?
    profilePage =
    <div id='profile-outer'>
    <div id='pie-profile-container'>
        <img id='profile-top-logo' src="https://i.imgur.com/nqttBCw.png"/>
        <div id='pie-profile-header'>
            <div id='porfile-header-words'>YOUR PIE PROFILE</div>
        </div>
        <div id='profile-rewards'>
            <div id='rewards-logo-container'>
                <img id='rewards-logo' src="https://i.imgur.com/DpG8sbQ.png"/>
            </div>
            <div id='rewards-right'>
                <div id='profile-points-container'>
                <div id='pie-animation'>
                    <div id='animated-outer'>
                        <div id='animated-inner'></div>
                    </div>
                </div>
                    <div id='profile-points'>
                        <div id='points-container'>
                            <div id='user-points'>{user.reward_point === null? '00': user.reward_point}</div>
                            <div>/60pts</div>
                        </div>
                        <div id='rewards-points-bottom'>TOWARD NEXT FREE PIE</div>
                    </div>
                </div>
                <div id='rewards-text-bottom'>
                    The store you selected doesn't participate in Piece of the
                    Pie Rewards. Please select a different store in order to earn points.
                </div>
            </div>
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
                <div>
                    <button id='address-info' onClick={() => setAddress(!address)}>
                        <div className="settings-title">Delivery Address</div>
                    </button>
                        {addressPlacement}
                </div>
                <div id='payment-info'>
                    <div className="settings-title">Primary Payment Method</div>
                    <div>Visa ending in ***1234</div>
                    <div>Expires on 12/21/41</div>
                </div>
            </div>
            <div id='profile-instructions'>Markers below represent Pienimo locations near you. Click on Delivery Address to change your address</div>
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
