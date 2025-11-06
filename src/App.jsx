import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import LinkCards from "./components/LinkCards";
import TaskList from "./components/TaskList";

function App() {
  const [query, setQuery] = useState("");

  // Demo data to match the SmartLink concept visually
  const links = [
    {
      id: 1,
      title: "AI Hackathon Registration",
      url: "https://example.com/hackathon",
      description: "Register for the AI Hackathon and view timelines.",
      tags: ["events", "ai"],
      folder: "Education",
      deadline: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6).toISOString(),
    },
    {
      id: 2,
      title: "Research Paper Library",
      url: "https://scholar.google.com",
      description: "Find and bookmark research papers.",
      tags: ["education"],
      folder: "Education",
    },
    {
      id: 3,
      title: "Company Portal",
      url: "https://portal.company.com",
      description: "Access HR, payroll, and internal tools.",
      tags: ["work"],
      folder: "Work",
    },
  ];

  const tasks = [
    {
      id: 1,
      description: "Prepare slides for Hackathon",
      dueLabel: labelForDue(daysFromNow(5)),
      overdue: false,
      link: "https://example.com/hackathon",
    },
    {
      id: 2,
      description: "Email project update",
      dueLabel: labelForDue(daysFromNow(-1)),
      overdue: true,
    },
  ];

  const reminders = [
    { title: "AI Hackathon Registration", dueLabel: labelForDue(daysFromNow(2)) },
    { title: "Prepare slides", dueLabel: labelForDue(daysFromNow(5)) },
  ];

  const filteredLinks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return links;
    return links.filter((l) =>
      [l.title, l.description, l.folder, ...(l.tags || [])]
        .filter(Boolean)
        .some((f) => String(f).toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <Topbar query={query} setQuery={setQuery} reminders={reminders} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex gap-6">
        <Sidebar onNewFolder={() => alert("Folder creation coming soon")} />
        <main className="flex-1 space-y-6">
          <Hero />

          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">All Links</h2>
                <div className="text-sm text-gray-500">Showing {filteredLinks.length} items</div>
              </div>
              <LinkCards items={filteredLinks} />
            </div>
            <div className="space-y-4">
              <TaskList tasks={tasks} />
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="font-medium text-gray-900">Folders</h3>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  <li className="flex items-center justify-between"><span>Education</span><span className="text-xs text-gray-500">12</span></li>
                  <li className="flex items-center justify-between"><span>Work</span><span className="text-xs text-gray-500">8</span></li>
                  <li className="flex items-center justify-between"><span>Personal</span><span className="text-xs text-gray-500">5</span></li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function daysFromNow(n) {
  return n;
}

function labelForDue(days) {
  if (days < 0) return `${Math.abs(days)} days overdue`;
  if (days === 0) return "Due today";
  if (days === 1) return "in 1 day";
  return `in ${days} days`;
}

export default App;
