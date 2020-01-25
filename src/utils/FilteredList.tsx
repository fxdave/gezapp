import React from 'react';

const FilteredList = ({ filter, list, render }) => filter(list).map(render)

export default FilteredList