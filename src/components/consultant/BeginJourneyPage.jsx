import { ArrowRight, CheckCircle } from 'lucide-react'

export default function BeginJourneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">Begin Your SEO Journey</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Your Path to SEO Success Starts Here</h2>
          <p className="text-gray-600 mb-8">
            Embarking on your SEO journey with Elegance SEO means taking the first step towards digital excellence. We're here to guide you every step of the way, ensuring your online presence reaches its full potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">1. Discovery</h3>
              <p className="text-gray-600 mb-4">We start by understanding your business, goals, and current SEO status.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>In-depth website analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Competitor research</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Keyword opportunity identification</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">2. Strategy</h3>
              <p className="text-gray-600 mb-4">We craft a tailored SEO strategy designed to meet your specific needs.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Custom SEO roadmap</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Content strategy development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Technical SEO plan</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">3. Implementation</h3>
              <p className="text-gray-600 mb-4">We put our plan into action, optimizing your digital presence.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>On-page optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Content creation and optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-orange-300 w-5 h-5 mr-2" />
                  <span>Technical SEO improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Why Start Your Journey with Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="flex-shrink-0 text-orange-300 w-6 h-6 mr-2 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Proven Expertise</h3>
                <p className="text-gray-600">Our team of SEO specialists brings years of experience and a track record of success.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="flex-shrink-0 text-orange-300 w-6 h-6 mr-2 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Tailored Approach</h3>
                <p className="text-gray-600">We create custom strategies that align with your unique business goals and industry.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="flex-shrink-0 text-orange-300 w-6 h-6 mr-2 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Transparent Reporting</h3>
                <p className="text-gray-600">Regular updates and clear metrics to track your SEO progress and ROI.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="flex-shrink-0 text-orange-300 w-6 h-6 mr-2 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Continuous Optimization</h3>
                <p className="text-gray-600">We adapt our strategies to keep pace with algorithm changes and industry trends.</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Ready to Begin?</h2>
          <p className="text-gray-600 mb-8">
            Take the first step towards SEO success. Schedule a consultation with our experts to discuss your goals and how we can help you achieve them.
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