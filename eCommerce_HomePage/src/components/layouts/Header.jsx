import { headerLinks } from "../../constants/headerLinks";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // current users state (logged in or not need to implemented later)
  const currentUser = true;
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleMobile, setToggleMobile] = useState(false);

  // Handle search - pending waiting for API endpoint
  const handleSubmit = (e) => {
    e.preventDefault();

    // searching needs to be implemented later
  };

  return (
    <>
      <header className="bg-slate-200 shadow-md sticky top-0 z-20">
        <div className="flex justify-between items-center max-w-[1520px] mx-auto p-3 gap-5 md:gap-10">
          <NavLink to="/">
            <img className="w-[40px] h-[30px]" src={logo} alt="Logo" />
          </NavLink>

          {/* Categories links */}
          <ul className="hidden md:flex items-center gap-5 flex-grow">
            {headerLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.link}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-slate-700 text-[16px] uppercase  font-semibold hidden sm:inline hover:underline"
                      : "text-slate-500 text-[16px] uppercase font-semibold hidden sm:inline hover:underline"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search Form */}
          <form
            className="bg-slate-100 px-3 py-2 rounded-lg flex items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-44 lg:w-64 text-slate-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa-sharp fa-solid fa-magnifying-glass text-slate-400 cursor-pointer hover:text-slate-600"></i>
            </button>
          </form>

          <ul className="hidden md:flex gap-6 tracking-wider items-center">
            <li>
              <NavLink
                to="/cart"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px] font-semibold hidden sm:inline hover:underline"
                    : "text-slate-500 text-[16px] font-semibold hidden sm:inline hover:underline"
                }
              >
                <i className="fa-solid fa-cart-shopping "></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px]  font-semibold hidden sm:inline hover:underline"
                    : "text-slate-500 text-[16px] font-semibold hidden sm:inline hover:underline"
                }
              >
                <i className="fa-solid fa-heart"></i>
              </NavLink>
            </li>
            <li>
              {currentUser ? (
                <NavLink to="/profile">
                  <img
                    className="rounded-full h-9 w-9 object-cover"
                    src={
                      currentUser.avatar ||
                      "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    }
                    alt="User avatar"
                  />
                </NavLink>
              ) : (
                <NavLink
                  to="/sign-in"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-slate-700 text-14px sm:text-[16px] font-semibold hover:underline"
                      : "text-slate-500 text-14px sm:text-[16px] font-semibold hover:underline"
                  }
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>

          {/* For small devices */}
          {!toggleMobile ? (
            <i
              className="fa-solid fa-bars text-xl w-5 md:hidden"
              onClick={() => setToggleMobile((prev) => !prev)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark text-xl w-5"
              onClick={() => setToggleMobile((prev) => !prev)}
            ></i>
          )}
        </div>
      </header>

      {/* Small devices left nav bar */}
      <div
        className={`w-[180px] px-4 min-h-content py-4 bg-slate-200 rounded-md z-40 absolute top-14 transition-all duration-700 ${
          toggleMobile ? "translate-x-[0px]" : "translate-x-[-240px]"
        }`}
      >
        <ul className="flex flex-col gap-6 tracking-wider">
          {headerLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.link}
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px] font-semibold hover:underline"
                    : "text-slate-500 text-[16px] font-semibold hover:underline"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className={(navClass) =>
                navClass.isActive
                  ? "text-slate-700 text-[16px] font-semibold hover:underline"
                  : "text-slate-500 text-[16px] font-semibold hover:underline"
              }
            >
              {/* Hand burger menu for small devices */}
             Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={(navClass) =>
                navClass.isActive
                  ? "text-slate-700 text-[16px] font-semibold hover:underline"
                  : "text-slate-500 text-[16px] font-semibold hover:underline"
              }
            >
              Wishilist
            </NavLink>
          </li>
          <li>
            {currentUser ? (
              <NavLink
                to="/sign-in"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px] font-semibold hover:underline"
                    : "text-slate-500 text-[16px] font-semibold hover:underline"
                }
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-14px sm:text-[16px] font-semibold hover:underline"
                    : "text-slate-500 text-14px sm:text-[16px] font-semibold hover:underline"
                }
              >
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
