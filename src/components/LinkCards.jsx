import { ExternalLink, Edit, Trash2, AlarmClockCheck } from "lucide-react";

export default function LinkCards({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((item) => (
        <article key={item.id} className="group relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(item.url)}`} alt="favicon" className="h-6 w-6 rounded" />
              <div className="min-w-0">
                <h3 className="truncate font-medium text-gray-900">{item.title}</h3>
                <a href={item.url} target="_blank" rel="noreferrer" className="truncate block text-xs text-blue-600 hover:underline">
                  {item.url}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
              <IconButton label="Open" href={item.url} icon={<ExternalLink size={16} />} />
              <IconButton label="Edit" icon={<Edit size={16} />} />
              <IconButton label="Delete" icon={<Trash2 size={16} />} />
            </div>
          </div>
          {item.description ? (
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags?.map((t) => (
              <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">#{t}</span>
            ))}
          </div>
          {item.deadline ? (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-red-600 bg-red-50 rounded-full px-2 py-1">
              <AlarmClockCheck size={14} /> {daysRemaining(item.deadline)} remaining
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function IconButton({ icon, label, href }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        title={label}
        className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
      >
        {icon}
      </a>
    );
  }
  return (
    <button
      title={label}
      className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
    >
      {icon}
    </button>
  );
}

function daysRemaining(dateStr) {
  const now = new Date();
  const due = new Date(dateStr);
  const diff = due.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days < 0) return `${Math.abs(days)} days overdue`;
  if (days === 0) return "Due today";
  if (days === 1) return "1 day";
  return `${days} days`;
}
