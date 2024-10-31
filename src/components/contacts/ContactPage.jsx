import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-serif mb-6 text-blue-900">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 py-2 border w-full rounded-md border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 border w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send Message
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-blue-900">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-orange-300 w-6 h-6 mr-2" />
                <span>info@eleganceseo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-300 w-6 h-6 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-orange-300 w-6 h-6 mr-2" />
                <span>123 SEO Street, Digital City, 12345</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-serif mb-4 text-blue-900">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </section>
        </div>
      </main>     
    </div>
  )
}