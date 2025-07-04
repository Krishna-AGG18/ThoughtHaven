import React from 'react'
import { Container, Logo, Logoutbtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-black text-contrastColor'>
      <Container>
        <nav className='flex max-xs:text-[14px] max-xsm:text-[11px] justify-between max-xs:justify-center max-xs:items-center'>
          <div className='mr-4 flex justify-center items-center'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          <ul className='flex'>
            {
              navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="inline-block px-3 sm:px-6 py-2 duration-200 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-md hover:font-semibold cursor-pointer rounded-lg max-smmd:text-[11px]"

                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>

                ) : null
              )
            }
            {
              authStatus && (
                <li>
                  <Logoutbtn />
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
