
import Link from 'next/link'
import React from 'react'

export const Sidebar = () => {
  return (
    <div className='flex bg-slate-200 p-3 space-x-3'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/myFeed">My Feed</Link>
      <Link href="/bookmarks">Bookmarks</Link>
      <Link href="/bookmarks">Subscriptions</Link>
    </div>
  )
}
