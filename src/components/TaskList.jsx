import { CheckCircle2 } from "lucide-react";

export default function TaskList({ tasks }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900">To-Do</h3>
        <span className="text-xs text-gray-500">Sorted by upcoming</span>
      </div>
      <ul className="mt-3 divide-y divide-gray-100">
        {tasks.map((t) => (
          <li key={t.id} className="py-3 flex items-start gap-3">
            <input type="checkbox" defaultChecked={t.done} className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${t.done ? "line-through text-gray-400" : "text-gray-800"}`}>{t.description}</p>
              <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                <CheckCircle2 size={14} className={t.overdue ? "text-red-500" : "text-green-600"} />
                <span className={t.overdue ? "text-red-600" : ""}>{t.dueLabel}</span>
                {t.link ? (
                  <a href={t.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline truncate">
                    Open link
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
