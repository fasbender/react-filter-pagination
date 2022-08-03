import React, { useState, useEffect } from 'react'
import ReactPaginate from 'https://cdn.skypack.dev/react-paginate@7.1.3'
import axios from 'axios'
import UserTable from '../components/UserTable'
import UserTile from '../components/UserTile'
import Filters from '../components/Filters'

const PER_PAGE = 10

const Home = () => {

  const [checked, setChecked] = useState('all')
  const [tileView, setTileView] = useState(false)
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')


    const fetchUser = async() => {
            try {
                setLoading(true)
                const response = await axios.get('/api/?results=1000')
                setUsers(response.data.results)
            } catch (error) {
                console.log('data not found')
            }
            setLoading(false)
        }

    useEffect(() => {
        fetchUser()
    }, [checked])

  const handlePagination = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE

  const pageCount = Math.ceil(users.length / PER_PAGE)

  const handleTileView = () => {
    setTileView(!tileView)
  }

  const handleChecked = (e) => {
    setChecked(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Filters handleChecked={handleChecked} handleTileView={handleTileView} tileView={tileView} search={search} handleSearch={handleSearch} />
        {
          loading ?

          <div>loading...</div>

          :

          <>
          { tileView ? <UserTile checked={checked} users={users} loading={loading} offset={offset} PER_PAGE={PER_PAGE} /> : <UserTable checked={checked} users={users} loading={loading} offset={offset} PER_PAGE={PER_PAGE} /> }
          <ReactPaginate
            nextLabel=">>"
            onPageChange={handlePagination}
            pageCount={pageCount}
            previousLabel="<<"
            containerClassName={"pagination"}
            activeClassName={"pagination-active"}
            previousLinkClassName={"pagination-prev"}
            nextLinkClassName={"pagination-next"}
            pageClassName={"pagination-li"}
            disabledClassName={"pagination-disable"}
          />
          </>
        }
    </div>
  )
}

export default Home