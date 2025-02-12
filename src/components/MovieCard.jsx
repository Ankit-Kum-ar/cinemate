import React from 'react'
import { Link } from 'react-router-dom'
import { MOVIECARD_IMAGE_URL } from '../utils/constant'
import backup from "../assets/backup.png"

const MovieCard = ({id, title, overview, poster, name}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
              {
                title === undefined ? 
                (<Link to={`/show/${id}`}>
                  <img className="rounded-t-lg" src={poster ? MOVIECARD_IMAGE_URL + poster : backup} alt="" />
                </Link>)
                  :
                (<Link to={`/movie/${id}`}>
                  <img className="rounded-t-lg" src={poster ? MOVIECARD_IMAGE_URL + poster : backup} alt="" />
                </Link>)
              }
              <div className="p-5">
                  <Link to='#'>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title === undefined ? name : title}</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
              </div>
    </div>
  )
}

export default MovieCard
