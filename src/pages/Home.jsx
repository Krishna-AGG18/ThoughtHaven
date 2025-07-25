import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Home() {
    const [posts, setPosts] = useState([])
    const status = useSelector(state => state.auth.status);

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    if (posts.length === 0) {
        return (
            <div className="w-full py-8 pt-4  h-[80dvh] bg-[url('https://i.pinimg.com/originals/59/89/b7/5989b7149f2d899ac53c1078bdddc919.gif')] bg-no-repeat bg-cover bg-center">
                <Container>
                    <div className="flex flex-wrap h-[80dvh]">
                        <div className="p-2 w-full">
                            <>
                                {status ? <p className='text-coral'>No Posts to show</p> :
                                    <div className='flex h-[100%] items-center justify-between max-md:flex-col-reverse max-md:justify-center'>
                                        <div className='flex flex-col max-md:items-center p-4 '>
                                            <h1 className="text-6xl font-bold text-white max-sm:text-4xl max-md:text-center">
                                                Welcome to <span className='text-coral'>ThoughtHaven!</span>
                                            </h1>
                                            <p className="text-lg text-gray-400 mt-4 max-md:text-center">
                                                Your gateway to curated blogs and ideas that matter.
                                            </p>
                                            <p className="text-lg text-gray-400 max-md:text-center">
                                                Discover perspectives worth reading.
                                            </p>
                                            <p className="text-lg text-gray-400 max-md:text-center">
                                                Sign in to begin your journey.
                                            </p>
                                            <Link to="/login">
                                                <button className="mt-6 w-fit cursor-pointer px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                                                    → Sign In to Explore
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="/logo.png" alt="Logo" className="w-full max-w-sm object-contain rounded-lg" />
                                            </div>
                                        </div>
                                    </div>}
                            </>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className="flex flex-wrap">
                    {status ? (posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))) : <>
                        <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 bg-[url(https://i.pinimg.com/originals/21/f3/5e/21f35e59c8f287e9e1460e69702ccadb.gif)] bg-no-repeat bg-cover bg-center ">
                            <div className="w-full max-w-lg bg-[rgba(255,255,255,0.08)] backdrop-blur-lg border border-[rgba(255,255,255,0.15)] rounded-2xl p-10 md:p-12 max-xs:p-4 transform transition-transform duration-300 hover:scale-102 animate-fade-in">
                                <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-xs:text-2xl">
                                    You Have Logged Out
                                </h2>
                                <p className="text-neutral-200 text-center mt-6 md:text-lg max-xs:text-sm">
                                    Thank you for visiting! Log in again to explore your blog.
                                </p>
                                <div className="mt-8 flex justify-center">
                                    <a
                                        href="/login"
                                        className="bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 max-xs:text-sm max-xs:py-2 max-xs:px-4"
                                    >
                                        Log In
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home