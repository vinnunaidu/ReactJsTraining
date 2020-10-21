import React from 'react';

const getSeason = (lat, month)=>{

    if(month > 2 && month < 9){
        return lat > 0 ? 'summer':'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer'; 
    }
}

const SeasonDisplay = (props)=>{

    const season = getSeason(props.lat, new Date().getMonth);
    const text = season === 'summer' ? "Let's hit the beach" : "Burr, it's chilly";
    const icon = season === 'summer' ? 'sun' : 'snowflake';

    if(props.lat && !props.errorMessage){
    return (<div>
                <i  className={`massive ${icon} icon`}/>
                 <h1>{text}</h1>
                <i  className={`massive ${icon} icon`}/>
            </div>);
    }

    if(!props.lat && props.errorMessage){
        return <div>Error: {props.errorMessage}</div>
    }

    return <div>Loading...</div>;
}

export default SeasonDisplay;