import React,{useState, useEffect} from 'react'
import Settings from '../assets/settings.svg';
import Search from '../assets/search.svg';
import Checkbox from './Checkbox';
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
// import Location from "../assets/location.svg";
import "../styles/KitchenPage.css";

export default function KitchenPage() {
    const history = useHistory();
    const [loadingState, setLoadingState] = useState<Boolean>(false);
    const AddDishes = () =>{
        history.push("/add-kitchen");
    }
    return (
        <div id="KitchenPage">
            <div>
                <div className="searchbar">
                    <input type="text" placeholder="Search" name="searchbar"/>
                    <img src={Search} alt="search"/>
                </div>
                <div>
                    <img src={Settings} alt="settings"/>
                    <button onClick={AddDishes}>+</button>
                </div>
            </div>
            {!loadingState &&
                <Link to="/kitchen-details">
                <div className="dishes-data">
                    <div>
                        <span id="dish-id">101</span>
                        <span id="kitchen-name">Radha Kitchen</span>
                        <div id="location">
                            <svg viewBox="0 0 24 24" fill="currentColor" color="#4b5c6b"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>
                            <span>Pimple Saudagar, Pune</span>
                        </div>
                        <div id="rating">4 stars</div>
                        <span id="emailid">radha@gmail.com</span>
                        <span id="mobileno">9999960012</span>
                        <span id="price">Rs. 15000.43</span>
                        <div>                   
                            <Checkbox checked={false}/>
                        </div>
                    </div>
                </div>
                </Link>
            }
            {loadingState &&
                <div className="loader-div">
                    <div className="loader"></div>
                </div>
            }
        </div>
    )
}