import { Search, BarChart, Zap, ChevronRight } from 'lucide-react'

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">Our Services</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-blue-900">Comprehensive SEO Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Search className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Strategic Keyword Optimization</h3>
              <p className="text-gray-600 mb-4">We craft targeted keyword strategies to elevate your brand's visibility in search results.</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <BarChart className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Advanced Performance Analytics</h3>
              <p className="text-gray-600 mb-4">Our comprehensive analysis and reporting guide your strategic decisions for optimal results.</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <Zap className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Precision On-Page Optimization</h3>
              <p className="text-gray-600 mb-4">We refine your digital assets to maximize their impact on search engine rankings.</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 inline-flex items-center">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-8 text-blue-900">Why Choose Us?</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>Tailored strategies for your unique business needs</li>
              <li>Proven track record of success across various industries</li>
              <li>Transparent reporting and communication</li>
              <li>Cutting-edge SEO techniques and tools</li>
              <li>Dedicated team of SEO experts</li>
            </ul>
          </div>
        </section>
      </main>     
    </div>
  )
}