import React from "react";

function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-end mt-4">
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          id="search"
          placeholder="Buscar..."
          className="rounded"
        />
        <input type="submit" value="Buscar" className="mx-2 rounded" />
      </form>
    </div>
  );
}

export default Search;
