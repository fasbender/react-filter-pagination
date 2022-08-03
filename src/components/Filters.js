import React from 'react'
import Switch from "react-switch";

const Filters = ({handleChecked, handleTileView, tileView, search, handleSearch}) => {

  return (
    <div className='filters'>
      <div className='search'>
          <input type="text" value={search} onChange={handleSearch} placeholder='search' />
      </div>
      <div className='filter-by'>
          <span>Filter by:</span>
          <div>
            <label htmlFor="all" style={{marginLeft: "10px"}}>All</label>
            <input type="radio" name="gender" id="all" value="all" defaultChecked onChange={handleChecked} />
          </div>
          <div>
            <label htmlFor="male" style={{marginLeft: "10px"}}>Male</label>
            <input type="radio" name="gender" id="male" value="male" onChange={handleChecked} />
          </div>
          <div>
            <label htmlFor="female" style={{marginLeft: "10px"}}>Female</label>
            <input type="radio" name="gender" id="female" value="female" onChange={handleChecked} />
          </div>
      </div>
      <div className='tile-view'>
          <span>Tile view</span>
          <Switch onChange={handleTileView} checked={tileView} />
      </div>
    </div>
  )
}

export default Filters