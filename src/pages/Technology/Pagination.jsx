import React, { useState } from 'react';


function Pagination() {
    

  const [activePage, setActivePage] = useState(1);

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
            ${activePage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} 
            hover:bg-blue-400 hover:text-white hover:border-blue-400 
            focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
