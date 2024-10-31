import { Book, Video, FileText, ArrowRight } from 'lucide-react'

export default function DiscoverMorePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">Discover More</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Explore Our Resources</h2>
          <p className="text-gray-600 mb-8">
            Dive deeper into the world of SEO with our comprehensive resources. Whether you're a beginner or an experienced professional, we have something for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Book className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">SEO Guides</h3>
              <p className="text-gray-600 mb-4">In-depth guides covering various aspects of SEO strategy and implementation.</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                Browse Guides <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <Video className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch our expert-led video tutorials on various SEO topics and techniques.</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                Watch Videos <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <FileText className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Case Studies</h3>
              <p className="text-gray-600 mb-4">Real-world examples of how our SEO strategies have driven success for clients.</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                Read Case Studies <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=400" alt="Blog post thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">The Future of SEO: Trends to Watch in 2024</h3>
                <p className="text-gray-600 mb-4">Explore the emerging trends that will shape the SEO landscape in the coming year.</p>
                <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=400" alt="Blog post thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Mastering Local SEO: A Comprehensive Guide</h3>
                <p className="text-gray-600 mb-4">Learn how to optimize your website for local search and attract more customers in your area.</p>
                <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              View All Blog Posts
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay up-to-date with the latest SEO trends, tips, and insights delivered straight to your inbox.
          </p>
          <form className="max-w-md">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-r-md bg-blue-900 text-white font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </main>      
    </div>
  )
}