import React, { useState } from 'react';
import Title from "../components/Title";
import CardList from "../components/cardlist";

const Ourteam = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='otpage'>
      <Title title="EVCFLO" subTitle="Team" />
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search team members"
      />
      <CardList searchTerm={searchTerm} />
    </div>
  );
};

export default Ourteam;