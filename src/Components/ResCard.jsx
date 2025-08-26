import React from 'react'
import { CID } from '../utils/constants';
const ResCard = ({resDetails}) => {
    
    const info = resDetails?.card?.card?.info || {};
    const {name, locality, cloudinaryImageId, avgRating, cuisines} = info;
    
  return (
    <div>
      <div className="bg-gray-50 w-60 h-auto rounded-lg hover:bg-gray-200">
        <div>
          <img
            src={CID + cloudinaryImageId}
            alt=""
            className=" p-2 w-full h-44 rounded-lg"
          />
        </div>
        <h1 className="text-xl font-bold ml-2">{name}</h1>
        <h2 className="font-semibold text-md ml-2 m-2">Locality: {locality}</h2>
        <h1 className="font-semibold text-md ml-2 m-2">
          Rating: <span className="font-bold">{avgRating}</span>
        </h1>
        <h1 className="break-words truncate overflow-y-auto font-semibold text-md ml-2 pb-5 ">
          Cuisines: {cuisines?.join(",")}
        </h1>
      </div>
    </div>
  );
}

export default ResCard


export const WithPromoted = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className='bg-black text-white absolute m-2 p-2 rounded-lg'>Promoted</label>
        <ResCard {...props} />
      </div>
    )
  }
}
