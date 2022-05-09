import React from "react";
import './Header.css'

export default ({black}) =>{
    return(
        <header className={ black ? 'black' : ''}>
            <div className="header--logo">
                <a>
                    <img src="https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0"></img>
                </a>
            </div>
            <div className="header--user">
                <a>
                    <img src="https://occ-0-4866-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcmtYoUaqdGw30gvbi2y68Q1Xa_ZaljTXyX0AK6aWhw3AsYQ7KY3yD1EtZQmQ1mYKw5-ng1OBoXquq79d12pWTP32WC-ivc.png?r=d36"></img>
                </a>
            </div>
        </header>
    )
}