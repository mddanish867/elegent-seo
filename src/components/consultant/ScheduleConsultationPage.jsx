import { Calendar, Clock, Users } from 'lucide-react'

export default function ScheduleConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">Schedule Your Consultation</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-8">
            Ready to take your SEO strategy to the next level? Schedule a free consultation with one of our experts to discuss your goals and how we can help you achieve them.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Contact Method</label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="contact-email"
                    name="contact-method"
                    type="radio"
                    className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                  />
                  <label htmlFor="contact-email" className="ml-3 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="contact-phone"
                    name="contact-method"
                    type="radio"
                    className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                  />
                  <label htmlFor="contact-phone" className="ml-3 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Schedule Consultation
            </button>
          </form>

          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-serif mb-4 text-blue-900">What to Expect</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="flex-shrink-0 h-6 w-6 text-orange-300 mr-2" />
                <span>30-minute consultation at a time that suits you</span>
              </li>
              <li className="flex items-start">
                <Users className="flex-shrink-0 h-6 w-6 text-orange-300 mr-2" />
                <span>One-on-one discussion with an SEO expert</span>
              </li>
              <li className="flex items-start">
                <Clock className="flex-shrink-0 h-6 w-6 text-orange-300 mr-2" />
                <span>Flexible scheduling options to fit your busy schedule</span>
              </li>
            </ul>
          </div>
        </div>
      </main>      
    </div>
  )
}