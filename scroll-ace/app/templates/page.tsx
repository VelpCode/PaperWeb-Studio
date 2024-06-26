import Navbar from "../components/global/navbar"
import Image from "next/image"
import Footer from "../components/global/footer"


export default function Component() {
  return (
    <div>
    <Navbar></Navbar>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Templates</h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Jumpstart your next project with these customizable templates.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="rotate-1 aspect-[3/2] overflow-hidden rounded-lg object-cover object-center shadow-lg mb-5"
              height="400"
              src="https://i.ibb.co/PWwVJHc/3.jpg"
              width="600"
            />
            <h3 className="text-xl font-bold tracking-tighter">Brand Template</h3>
            <p className="text-sm text-gray-500 leading-loose md:text-base dark:text-gray-400">
              The brand template provides a starting point for creating a new brand. It includes a feed of posts, a post
              page, and an about page.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="mb-5 shadow-lg aspect-[3/2] overflow-hidden rounded-lg object-cover object-center"
              height="400"
              src="https://i.ibb.co/8YmH6T1/winplante.png"
              width="600"
            />
            <h3 className="text-xl font-bold tracking-tighter">Portfolio Illustration</h3>
            <p className="text-sm text-gray-500 leading-loose md:text-base dark:text-gray-400">
              The dashboard template provides a starting point for creating a new dashboard. It includes several widgets
              for monitoring data.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className=" mb-5 shadow-lg aspect-[3/2] overflow-hidden rounded-lg object-cover object-center"
              height="400"
              src="https://i.ibb.co/Gt7qSKZ/VELPSPLSAH.png"
              width="600"
            />
            <h3 className="text-xl font-bold tracking-tighter">E-commerce Template</h3>
            <p className="text-sm text-gray-500 leading-loose md:text-base dark:text-gray-400">
              The e-commerce template provides a starting point for creating an online store. It includes pages for
              browsing products, viewing product details, and managing a shopping cart.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Thumbnail"
              className="shadow-lg mb-5 aspect-[3/2] overflow-hidden rounded-lg object-cover object-center"
              height="400"
              src="https://i.ibb.co/Ctn361D/1.png"
              width="600"
            />
            <h3 className="text-xl font-bold tracking-tighter">Sketch Template</h3>
            <p className="text-sm text-gray-500 leading-loose md:text-base dark:text-gray-400">
              The sketch template provides a multi-level
              sidebar for organizing content and a responsive layout.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}
