import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({listing}) => {
  return (
    <div className="mx-auto bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg w-[90%]">
        {/* replace it with the single product id : single product page */}
      <Link className="flex flex-col gap-4" to={`/products/${listing?.category}/${listing?.id}`}>
        <img
          src={listing.src[0]}
          alt="listing cover"
          className="h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />

        <div className="p-4 flex flex-col gap-2 w-full tracking-wide">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {listing.productName}
          </p>
          <p className="text-sm text-gray-600 line-clamp-2 text-semibold">
            {listing.description}
          </p>
          <div className='flex justify-start gap-3'>

          <p className="text-green-500 text-md font-semibold mt-2 flex items-center">
          ₹ {Math.round(listing?.price - (listing?.price*(listing?.offerPercentage / 100)))}
          </p>
          <p className="text-red-500 line-through text-xs font-semibold mt-2 flex items-center">
          ₹ {listing?.price}
          </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard