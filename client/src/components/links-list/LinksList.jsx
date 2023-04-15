import LinkItem from '../linkItem/LinkItem';
import './linkslist.css';
import React from 'react';

const LinksList = ({links}) => {
  return (
    <div className='links-list-container'>
        <ul className='links-list'>
            {links.map((link) => (
                
                    <LinkItem link={link} />
                
            ))}
        </ul>
    </div>
  )
}

export default LinksList