import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        
        {/* Image Section */}
        <figure className="w-full h-64 overflow-hidden">
          <img
            src={item.image || "https://via.placeholder.com/300x200"} // fallback image
            alt={item.name || item.title || "Book Image"}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            <span>{item.name || "Untitled"}</span>
            {item.category && (
              <div className="badge badge-secondary">{item.category}</div>
            )}
          </h2>

          {/* Title (subtitle/description) */}
          {item.title && <p>{item.title}</p>}

          {/* Price + Button */}
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline">
              {item.price === 0 || item.category === "Free"
                ? "Free"
                : `$${item.price}`}
            </div>
            <button className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
              {item.price === 0 || item.category === "Free" ? "Get Now" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
