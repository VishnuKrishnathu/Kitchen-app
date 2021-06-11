import React from 'react';
import "../styles/Checkbox.css";

export default function Checkbox({checked}:any) {
    return (
        <div id="Checkbox">
            {checked && <input type="checkbox" name="checkbox" id="checkbox" checked/>}
            {!checked && <input type="checkbox" name="checkbox" id="checkbox" />}
            <label htmlFor="checkbox"><div></div></label>
        </div>
    )
}
