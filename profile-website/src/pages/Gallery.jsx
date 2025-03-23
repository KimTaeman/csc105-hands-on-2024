import React from 'react'
import Card from "../components/Card"

const Gallery = () => {
  return (
    <section className="p-20 min-w-screen" id="gallery">
      <p className="text-2xl md:text-5xl font-bold text-black mb-10">Gallery</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-15 justify-start items-start">
        <Card src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="erbology"/>
        <Card src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="erbology"/>
        <Card src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="erbology"/>
        <Card src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="erbology"/>
        <Card src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="erbology"/>
        <Card src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="erbology"/>
    </div>
</section>
  )
}

export default Gallery