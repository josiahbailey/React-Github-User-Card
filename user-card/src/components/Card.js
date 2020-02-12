import React from 'react';

const Card = ({data}) => {
    const { login, avatar_url, html_url } = data
    console.log(data)
    return (  
        <div className='card'>
            <h2>{login}</h2>
        </div>
    );
}
 
export default Card;