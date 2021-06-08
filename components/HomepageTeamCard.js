import React from 'react';

const HomepageTeamCard = ({ member }) => {
    return (

        <img src={member.photo} className="rounded-circle mx-auto d-block" alt={member.name} />

    )
}

export default HomepageTeamCard;