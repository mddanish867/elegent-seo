import { Search, BarChart, Zap, Repeat, ArrowRight } from 'lucide-react'

export default function OurProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">Our SEO Process</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Our Proven SEO Methodology</h2>
          <p className="text-gray-600 mb-8">
            At Elegance SEO, we follow a comprehensive, data-driven process to ensure your website achieves and maintains top search engine rankings. Our methodology is designed to deliver sustainable, long-term results.
          </p>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center text-center">
                <Search className="text-orange-300 w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">1. Research & Analysis</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 mb-4">
                  We begin by conducting a thorough analysis of your website, industry, and competitors. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Comprehensive website audit</li>
                  <li>Keyword research and opportunity analysis</li>
                  <li>Competitor analysis</li>
                  <li>Industry trend evaluation</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center text-center">
                <BarChart className="text-orange-300 w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">2. Strategy Development</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 mb-4">
                  Based on our research, we develop a tailored SEO strategy that aligns with your business goals:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Custom SEO roadmap creation</li>
                  <li>Keyword targeting strategy</li>
                  <li>Content strategy development</li>
                  <li>Technical SEO improvement plan</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center text-center">
                <Zap className="text-orange-300 w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">3. Implementation</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 mb-4">
                  We put our strategy into action, optimizing your website for maximum search engine visibility:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>On-page optimization</li>
                  <li>Content creation and optimization</li>
                  <li>Technical SEO improvements</li>
                  <li>Link building and outreach</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center text-center">
                <Repeat className="text-orange-300 w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">4. Monitoring & Optimization</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 mb-4">
                  We continuously monitor your website's performance and make data-driven adjustments:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Regular performance tracking and reporting</li>
                  <li>Ongoing keyword position monitoring</li>
                  <li>Conversion rate optimization</li>
                  <li>Strategy refinement based on results</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Data-Driven Approach</h3>
              <p className="text-gray-600">
                Our decisions are based on comprehensive data analysis, ensuring that every action we take is backed by solid evidence.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Customized Strategies</h3>
              <p className="text-gray-600">
                We tailor our approach to your specific industry, target audience, and business goals, ensuring maximum relevance and impact.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Continuous Optimization</h3>
              <p className="text-gray-600">
                Our process is iterative, allowing us to adapt to changes in search algorithms and market conditions quickly.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Holistic Approach</h3>
              <p className="text-gray-600">
                We consider all aspects of SEO, from technical optimization to content creation and link building, for comprehensive results.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Ready to Start Your SEO Journey?</h2>
          <p className="text-gray-600 mb-8">
            Experience the power of our proven SEO process. Let's work together to elevate your online presence and drive sustainable growth for your business.
          </p>
          <a
            href="/schedule-consulant"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </section>
      </main>
    </div>
  )
}