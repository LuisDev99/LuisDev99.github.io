import { Project } from "@/utilities/projects";
import Link from "next/link";

interface CardProject {
  project: Project;
}

export default function CardProject({ project }: CardProject) {
  return (
    <div className="m-auto h-[600px] mt-[10%] w-[80%] bg-[#151718] flex items-center justify-center rounded-lg">
      <div className="w-full m-auto">
        <img className="rounded-t-lg" src={project.imgUrl} alt="" />
      </div>
      <div className="w-full m-auto">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">
            {project.description}
          </p>
          <Link
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Github Link
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
