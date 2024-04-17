

export default function Sidebar() {
    return (
        <div className="sidebar flex bg-blue-900 w-full sm:w-1/6">
        <aside className="px-8 py-4">
          <div className="flex mb-8">
            <span className="text-white text-2xl font-bold">MediKeep</span>
          </div>
          <nav>
            <ul className="text-white py-2">
              <li>
                <span className="block py-2">Name</span>
              </li>
              <li>
                <span className="block py-2">Username</span>
              </li>
              <li>
                <span className="block py-2">Email</span>
              </li>
              <li>
                <span className="block py-2">Contact</span>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    );
}