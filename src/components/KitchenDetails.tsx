import React from 'react';
import Checkbox from "./Checkbox";
import "../styles/KitchenDetails.css"

export default function KitchenDetails() {
    return (
        <div id="KitchenDetails">
            <div>
                <Checkbox/>
            </div>
            <div className="profile-picture-edit">
                <div className="kitchen-picture">
                    <label htmlFor="edit-picture">
                        <img id="display-picture" src="https://s2.svgbox.net/materialui.svg?ic=mode_edit" alt="PFP"/>
                    </label>
                    <div><img id="edit-icon" src="https://s2.svgbox.net/materialui.svg?color=ffffff&ic=mode_edit" alt="edit"/></div>
                    <input type="file" id="edit-picture"/>
                </div>
                <button className="kitchen-details">Kitchen Details</button>
                <button className="menu-details">Menu Details</button>
                <button className="ratings">Ratings</button>
            </div>
            <div className="edit-details">
                <input type="text" className="kitchen-name" placeholder="Kitchen Name*" required/>
                <input type="text" className="owner-name" placeholder="Owner Name*" required/>
                <input type="text" className="address" placeholder="Address*" required/>
                <input type="text" className="mobile-number" placeholder="Phone/Mobile*" required/>
                <input type="text" className="email" placeholder="Email*" required/>
                <input type="text" className="fssai-number" placeholder="FSSAI Number*" required/>
                <input type="text" className="preparation-time" placeholder="Preparation Time" required/>
            </div>
            <div className="dish-type">
                <span>
                    <input type="checkbox" id="northEastern"/>
                    <label htmlFor='northEaster'>North Eastern</label>
                </span>
                <span>
                    <input type="checkbox" id="southIndian"/>
                    <label htmlFor='southIndian'>South Indian</label>
                </span>
                <span>
                    <input type="checkbox" id="bihari"/>
                    <label htmlFor='bihari'>Bihari</label>
                </span>
                <span>
                    <input type="checkbox" id="bengali"/>
                    <label htmlFor='bengali'>Bengali</label>
                </span>
                <span>
                    <input type="checkbox" id="punjabi"/>
                    <label htmlFor='northEaster'>Punjabi</label>
                </span>
                <span>
                    <input type="checkbox" id="gujarati"/>
                    <label htmlFor='northEaster'>Gujarati</label>
                </span>
                <span>
                    <input type="checkbox" id="kashmiri"/>
                    <label htmlFor='northEaster'>Kashmiri</label>
                </span>
                <span>
                    <input type="checkbox" id="maharashtrian"/>
                    <label htmlFor='northEaster'>Maharashtrian</label>
                </span>
                <span>
                    <input type="checkbox" id="rajasthani"/>
                    <label htmlFor='northEaster'>Rajasthani</label>
                </span>
            </div>
            <div className="order-timing">
                <div></div>
                <span>Breakfast</span>
                <span>Lunch</span>
                <span>High Tea</span>
                <span>Dinner</span>
                <span>Order From</span>
                <input type="text" placeholder="06:30 AM"/>
                <input type="text" placeholder="12:00 PM"/>
                <input type="text" placeholder="03:30 PM"/>
                <input type="text" placeholder="06:30 PM"/>
                <span>Order To</span>
                <input type="text" placeholder="08:30 AM"/>
                <input type="text" placeholder="02:30 PM"/>
                <input type="text" placeholder="04:30 PM"/>
                <input type="text" placeholder="08:30 PM"/>
            </div>
            <div className="submit-buttons">
                <button className="save-button">SAVE</button>
                <button className="cancel-button">CANCEL</button>
            </div>
        </div>
    )
}
