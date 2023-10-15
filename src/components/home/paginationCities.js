import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ActionAreaCard from './ActionAreaCard';
import { useStateValue } from "../../StateProvide";
import './home.css'


export default function PaginationCities(props) {

//  
const cities = props.props
console.log(cities)
  const [page, setPage] = React.useState(cities.slice(0, 3))

  const [numPage, setNumPage] = React.useState(1)
 

  const handleChange = (event, value) => {
    setNumPage(value)

    const first_index = (value - 1) * 3
    const second_index = value * 3
   
    setPage(cities.slice(first_index, second_index));

  };
  return (
    <Stack spacing={2}>
      <div className=' md:flex md:flex-row md:justify-between sm:flex sm:flex-col sm:items-center sm:hover:none sm:mb-1 '>
        {page.map((item) => {
          return <ActionAreaCard item={item} class_style={"cities max-w-xs hover:scale-110 "} />
        })}

      </div>
      <Pagination className="contPagination" count={Math.round(cities.length / 3)} page={numPage} onChange={handleChange} />
    </Stack>
  );
};

