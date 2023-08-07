'use client'
import Feed from '@/components/Feed'
import { useState, useEffect } from "react"

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt', { next: { revalidate: 10 } })
      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed posts={posts} />
    </section>
  )
}

export default Home