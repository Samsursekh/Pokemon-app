import { useState, useEffect } from 'react';

const pageSize = 10;



// const Pagination = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }




const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`);
    const json = await response.json();
    setData(json.results);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const renderData = () => {
    return data.map((item) => {
      return <div key={item.name}>{item.name}</div>;
    });
  };

  const updatePagination = () => {
    const pageCount = Math.ceil(1118 / pageSize); // assuming there are 1118 Pokemon in the API
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      const button = (
        <button key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
      if (i === currentPage) {
        // button.props.className = 'active';
      }
      buttons.push(button);
    }
    return buttons;
  };

  return (
    <div>
      {renderData()}
      <div className="pagination">{updatePagination()}</div>
    </div>
  );
}


export default Pagination;