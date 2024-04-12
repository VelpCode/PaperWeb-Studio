import Label  from "../components/ui/label"
import Input from "../components/ui/input"
import Textarea from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import Navbar from "../components/global/navbar"
import Footer from "../components/global/footer"

export default function Component() {
    return (
    <div>
    <Navbar></Navbar>
      <section className="w-full py-12 md:py-24">
        <div className="container grid gap-12 px-4 md:px-6 mt-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button>Send message</Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Contact Information</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 leading-none dark:text-gray-400">PaperWeb Studio.</p>
              <p className="text-sm text-gray-500 leading-none dark:text-gray-400"></p>
              <p className="text-sm text-gray-500 leading-none dark:text-gray-400">+1 (994) 456-7890</p>
              <p className="text-sm text-gray-500 leading-none dark:text-gray-400">paperwebsupport@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </div>
    )
  }