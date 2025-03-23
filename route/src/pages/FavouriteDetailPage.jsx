import React from 'react'
import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { number } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div>
      <p>Your favourite post is <b>{searchParams.get("q")}</b>. Post ID is <b>{number}</b>. Size is <b>{searchParams.get("size")}</b>.</p>
    </div>
  )
}

export default FavouriteDetailPage