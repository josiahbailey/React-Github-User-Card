import React from 'react';
import Card from './Card'

const CardList = ({myData, followData}) => {
    return (  
        <div>
            <Card data={myData}/>
            {followData.map(follower => (
                <Card key={follower.id} data={follower} />
            ))}
        </div>
    );
}
 
export default CardList;