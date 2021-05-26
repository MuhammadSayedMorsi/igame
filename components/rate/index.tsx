import { useState } from "react";
export default function Rate() {
  const [rating, setRating] = useState([1])
  return (
    <div className="flex pt-2">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i as any;
        return (
          <span role="img" className="mr-1">
            <label>
              <input
                className="cursor-pointer"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <svg
                className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-125"
                width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.05859 9L2.53188 10.8541L3.20542 6.92705L0.352255 4.1459L4.29524 3.57295L6.05859 0L7.82195 3.57295L11.7649 4.1459L8.91176 6.92705L9.58531 10.8541L6.05859 9Z" fill={ratingValue <= rating ? "#FF7A2E" : "#272832"} />
              </svg>
            </label>
          </span>
        )
      })}
    </div>
  )
}
