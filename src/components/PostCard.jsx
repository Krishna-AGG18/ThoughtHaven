import React from 'react'
import service from '../appwrite/config'
import { Link } from "react-router-dom"

function PostCard({
  $id, title, featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 max-xs:p-1.5 transform transition-transform duration-300 hover:rotate-y-15'>
  <div className='w-full justify-center mb-4'>
    <img src={service.getFileView(featuredImage)} alt={title} className="w-full h-64 max-xs:h-50 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" />
  </div>
  <h2 className='text-xl font-bold text-white text-center'>{title}</h2>
</div>
    </Link>
  )
}

export default PostCard
