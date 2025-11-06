import { Home, Folder, CheckSquare, Calendar, Settings, Plus } from "lucide-react";

export default function Sidebar({ onNewFolder }) {
  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white/70 backdrop-blur-sm hidden lg:flex flex-col min-h-screen">
      <div className="px-6 py-5 flex items-center gap-2 border-b border-gray-100">
        <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center text-lg font-bold">SL</div>
        <div className="leading-tight">
          <p className="font-semibold text-gray-900">SmartLink</p>
          <p className="text-xs text-gray-500">Links • Tasks • Events</p>
        </div>
      </div>

      <nav className="p-3 space-y-1">
        <NavItem icon={<Home size={18} />} label="Dashboard" active />
        <NavItem icon={<Folder size={18} />} label="Folders" />
        <NavItem icon={<CheckSquare size={18} />} label="Tasks" />
        <NavItem icon={<Calendar size={18} />} label="Events" />
        <NavItem icon={<Settings size={18} />} label="Settings" />
      </nav>

      <div className="mt-auto p-4">
        <button
          onClick={onNewFolder}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Create New Folder
        </button>
        <p className="text-[11px] text-gray-500 mt-3">
          Tip: Organize links by topics like Education, Work, or Projects.
        </p>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
        active
          ? "bg-blue-50 text-blue-700"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <span className="text-gray-600">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
