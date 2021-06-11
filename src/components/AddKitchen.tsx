import React, {useState} from 'react';
import API from './API';
import Checkbox from "./Checkbox";
import '../styles/AddKitchen.css';

export default function AddKitchen() {
    const [loadingState, setLoadingState] = useState<Boolean>(false);
    const [errorStatus, setErrorStatus] = useState<Boolean>(false);
    const [kitchenPhoto, setKitchenPhoto] = useState<FileList | null>();

    /// Saving the details to the database
    const saveButton = async()=>{
        setLoadingState(true);
        setErrorStatus(false);
        const details : NodeListOf<HTMLInputElement>= document.querySelectorAll('.set-kitchen-details > input');

        // getting the dish types
        const dishTypesChecked :NodeListOf<HTMLInputElement> = (document.querySelectorAll(".dish-type > span > input:checked"));
        let dishtypes : string = '';
        dishTypesChecked.forEach((type)=>{
            dishtypes= dishtypes +'_'+ type.id;
        });

        /// getting the order timings
        const orderTimings :NodeListOf<HTMLInputElement> = document.querySelectorAll(".order-timing > input");
        let time : string[] = [];
        orderTimings.forEach(timing => {
            if (timing.value){
                time.push(timing.value);
            }
        });
        const [time_from, time_to] = [...time];
        if (!time_from || !time_to){
            setLoadingState(false);
            setErrorStatus(true);
            return;
        }

        /// getting the checkbox status
        const checkbox_status = document.querySelector("#checkbox:checked");
        console.log(checkbox_status)

        /// checking for valid input elements
        await details.forEach(detail => {
            if (detail.validity.valid){}
            else {
                setLoadingState(false);
                setErrorStatus(true);
                return;
            };
        });

        if(!errorStatus){
            const data = new FormData();
            if(kitchenPhoto){data.append('kitchenImage', kitchenPhoto[0])}
            for(let i:any =1; i < details.length; i++){
                data.append(details[i].classList[0], details[i].value)
            }
            data.append('dishtypes', dishtypes);
            data.append('orderfrom', time_from)
            data.append('orderto', time_to)
            if (checkbox_status){data.append('checkbox', 'true')}
            console.log(API().URL)
            await fetch(`http://localhost:5000/addkitchen/`, {
                method: 'POST',
                body: data,
            }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
        setLoadingState(false);
    }
    return (
        <div id="AddKitchen">
            <div className="checkbox-div">
                <Checkbox />
            </div>
            <div className="set-kitchen-details">
                <input type="file" id="kitchen-picture" accept=".jpeg,.jpg,.png" required onChange={(e)=>{
                    if (e.target.files){
                        setKitchenPhoto(e.target.files);
                    }
                }}/>
                <label htmlFor="kitchen-picture">Upload Picture <img src="https://s2.svgbox.net/hero-outline.svg?color=c3cfd9&ic=upload" alt="upload" /></label>
                <input type="text" className="ownername" placeholder="Owner Name*" required/>
                <input type="text" className="address" placeholder="Address*" required/>
                <input type="text" className="kitchenname" placeholder="Kitchen Name*" required/>
                <input type="email" className="email" placeholder="Email*" required/>
                <input type="text" className="fssainumber" placeholder="FSSAI Number*" required/>
                <input type="text" className="mobilenumber" placeholder="Phone/Mobile*" required/>
                <input type="text" className="preparationtime" placeholder="Preparation Time" />
            </div>
            { errorStatus &&
            <div style={{
                display:'grid',
                placeItems: 'center',
                color:'red'
            }}>Check the input fields and try again</div>}
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
                {!loadingState && <button className="save-button" onClick={saveButton} style={{background: "#1aae9f"}}>SAVE</button>}
                {!loadingState && <button className="cancel-button" style={{background: "#e52e40"}}>CANCEL</button>}
                {loadingState && <button className="save-button" style={{background:'grey'}} disabled>Please Wait ...</button>}
            </div>
        </div>
    )
}
