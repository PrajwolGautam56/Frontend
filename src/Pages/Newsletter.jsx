import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Nav from '../components/Nav'
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons'

export default function Newsletter() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <div className="relative bg-news">
          <div className="h-full w-full mx-auto max-w-7xl px-6 py-28 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Subscribe to our <span className="text-[#5DB85E]">Newsletter</span></h2>
                <p className="mt-4 text-lg leading-8 text-white">
                  Suscribe to our Newsletter.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only text-white">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 backdrop-blur-sm">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon className="h-6 w-6 text-[#F59E0B]" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                  <dd className="mt-2 leading-7 text-white">
                    Subscribe to our newsletter to receive the latest updates, exclusive offers, and valuable insights delivered straight to your inbox. Be the first to know about:
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon className="h-6 w-6 text-[#F59E0B]" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-white">
                    Rest assured, we respect your inbox and will never spam you. Our newsletters are carefully curated to provide valuable content and updates tailored to your interests.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <FooterWithSocialMediaIcons />
    </>
  )
}
