import React from 'react';
import Github from './img/Github2.png'

const Card = ({data}) => {
    const { login, avatar_url, html_url } = data
    console.log(data)
    return (  
        <div className='card'>
            <img className='cardImg' src={avatar_url}/>
            <h2>{login}</h2>
            <a target='_blank' href={html_url}><button className='cardButton'><img className='cardSubImg' src={Github} />Github</button></a>
        </div>
    );
}
 
export default Card;