import { Link, useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";
import Container from "../container/Container";
import "../../index.css";

function Header() {
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Log In", slug: "/login", active: !loginStatus },
    { name: "Sign Up", slug: "/signup", active: !loginStatus },
    { name: "All Posts", slug: "/all-posts", active: loginStatus },
    { name: "Add Post", slug: "/add-post", active: loginStatus },
  ];

  return (
    <>
      <header className="h-auto py-7 px-10 bg-gradient text-blush border-b-[1px] border-b-gray-800 sticky top-0 z-50 shadow-2xl shadow-custom-blush">
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-6xl font-semibold font-allison tracking-wider">
              <Link to="/">Meraki</Link>
            </div>

            {/* Hamburger Menu */}
            <button
              className="block md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Toggle Navigation"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="hidden md:flex justify-center items-center gap-10 text-2xl font-semibold">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="relative hover-line"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {loginStatus && <LogoutBtn />}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            className="hidden mt-4 bg-gradient text-blush rounded-md shadow-md p-4 space-y-3 md:hidden"
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.slug)}
                    className="block w-full text-left px-2 py-1 rounded hover:bg-gray-800"
                  >
                    {item.name}
                  </button>
                )
            )}
            {loginStatus && <LogoutBtn />}
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
