import Link from "next/link";

const plannedUIComponents = [
  { name: "dialog" },
  { name: "accordion" },
  { name: "alert-dialog" },
  { name: "checkbox" },
  { name: "collapsible" },
  { name: "dropdown-menu" },
  { name: "form" },
  { name: "hover-card" },
  { name: "menubar" },
  { name: "popover" },
  { name: "scroll area" },
  { name: "progress" },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen p-8  items-center gap-8  ">
      <div className="font-semibold text-4xl ">UI Components</div>
      <div className="w-full flex gap-4 flex-wrap">
        {plannedUIComponents.map((component, index) => (
          <Link
            key={index}
            href={`./${component.name}`}
            className="p-2 text-gray-500 hover:bg-gray-500/50 hover:rounded-md hover:text-white"
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
