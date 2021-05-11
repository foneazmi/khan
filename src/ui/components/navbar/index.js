export const Nav = ({ children }) => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">{children}</ul>
    </nav>
  );
};

export const NavItem = ({ href, isActive, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`block px-4 py-2 rounded-md ${
          isActive ? "bg-green-100 text-green-700" : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
};
