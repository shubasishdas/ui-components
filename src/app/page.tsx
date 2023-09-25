import Link from "next/link";

const plannedUIComponents = [
  { name: "dialog", completed: true },
  { name: "accordion", completed: false },
  { name: "alert-dialog", completed: false },
  { name: "checkbox", completed: false },
  { name: "collapsible", completed: false },
  { name: "dropdown-menu", completed: false },
  { name: "form", completed: false },
  { name: "hover-card", completed: false },
  { name: "menubar", completed: false },
  { name: "popover", completed: false },
  { name: "scroll area", completed: false },
  { name: "progress", completed: false },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen p-8  items-center gap-8  ">
      <div className="font-semibold text-4xl ">UI Components</div>
      <div className="w-full flex gap-4 flex-wrap">
        {plannedUIComponents.map((component, index) => (
          <Link
            key={index}
            href={component.completed ? `./${component.name}` : "/"}
            className={`p-2 text-gray-500  hover:rounded-md hover:text-white ${
              component.completed
                ? "hover:bg-indigo-500/50"
                : "hover:bg-yellow-500/50"
            }`}
          >
            <div className=" w-fit text-lg font-semibold  ">
              {component.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
