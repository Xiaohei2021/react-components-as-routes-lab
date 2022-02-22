import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>

    {directors.map(
      director => {
        return(
          <div>
            <ol>
              <li>
                {director.name}
              </li>
              <li>
                {director.movies}
              </li>
            </ol>
          </div>
        )
      }
    )}


    </div>
  );
}

export default Directors
