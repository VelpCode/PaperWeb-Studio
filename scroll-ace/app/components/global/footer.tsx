
import Link from "next/link"

export default function Component() {
  return (
    <footer className="bg-gray-950 py-12 sm:py-14 lg:py-16 xl:py-20">
      <div className="container grid-in-container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center gap-2 text-2xl font-semibold tracking-tighter text-gray-50 sm:text-3xl dark:text-gray-950"
            href="#"
          >
            PaperWeb
          </Link>
          <ul className="flex items-center gap-4 text-base font-medium tracking-wide text-gray-300 dark:text-gray-600">
            <li>
              <Link className="hover:underline" href="#">
                Templates
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid max-w-sm items-center gap-1 text-center sm:max-w-4xl sm:gap-4 md:text-left lg:max-w-5xl xl:grid-cols-3 xl:max-w-6xl xl:items-start xl:gap-2">
          <p className="text-sm tracking-wide text-gray-500 sm:order-2 sm:text-base sm:text-gray-400 sm:pl-4 md:order-1 md:text-left lg:col-start-2 lg:order-1 lg:text-gray-500 xl:order-2 xl:text-gray-500 dark:text-gray-400">
            44 Algin Street, Studio Apt. 5532 BankerAve.
          </p>
          <p className="text-sm tracking-wide text-gray-500 sm:order-1 sm:text-gray-400 md:order-2 lg:order-2 xl:order-1 xl:text-gray-500 dark:text-gray-400">
            © 20224 Company Inc. All rights reserved.
          </p>
          <p className="flex justify-end text-sm text-gray-500 xl:order-3 dark:text-gray-400">
            Made with
            <HeartIcon className="w-4 h-4 mx-1.5" />
            by Velp{"\n                  "}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

