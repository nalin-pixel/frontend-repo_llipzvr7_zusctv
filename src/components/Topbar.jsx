import { Bell, Search } from "lucide-react";

export default function Topbar({ query, setQuery, reminders = [] }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search links, folders, or tags..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
        <div className="relative">
          <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
            <Bell size={18} className="text-gray-700" />
            {reminders?.length ? (
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] text-[10px] grid place-items-center rounded-full bg-red-500 text-white px-1">
                {reminders.length}
              </span>
            ) : null}
          </button>
          {reminders?.length ? (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-2 text-xs font-medium text-gray-500 border-b">Upcoming deadlines</div>
              <ul className="max-h-64 overflow-auto">
                {reminders.map((r, i) => (
                  <li key={i} className="px-3 py-2 text-sm flex items-start gap-2 hover:bg-gray-50">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    <div>
                      <p className="font-medium text-gray-800">{r.title}</p>
                      <p className="text-gray-500 text-xs">Due {r.dueLabel}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
