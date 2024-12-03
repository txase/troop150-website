import React from 'react';

const LostItems = ({}: {}) => {
  const items = [
    {
      fname: 'dog',
      description: 'a dope dog'
    },
    {
      fname: 'eye ball',
      description: 'a bloated eye ball'
    }
  ];

  return <ul>
    {items.map(item => <li>
      <p>Name: {item.fname}</p>
      <p>Description: {item.description}</p>
    </li>)}
  </ul>;
}

export default LostItems;
