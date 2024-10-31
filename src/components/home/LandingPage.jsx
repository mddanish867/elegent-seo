import { Search, BarChart, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleConsultant = () => {
    navigate("/schedule-consulant");
  }
  return (
    <>
    <main>
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-blue-950 text-white">
          <div className="md:container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 py-10 leading-tight">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Bespoke SEO strategies tailored to enhance your brand's online authority.
            </p>
            <a href="/discover" className="inline-flex items-center text-orange-300 font-semibold text-lg hover:text-orange-400 transition duration-300">
              Discover Our Expertise <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="md:container mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center text-orange-950">Our Bespoke Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Search className="text-orange-300 w-12 h-12 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Strategic Keyword Optimization</h3>
                <p className="text-gray-600">Crafting a targeted keyword strategy to elevate your brand's visibility.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <BarChart className="text-orange-300 w-12 h-12 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Advanced Performance Analytics</h3>
                <p className="text-gray-600">Comprehensive analysis and reporting to guide strategic decisions.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Zap className="text-orange-300 w-12 h-12 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Precision On-Page Optimization</h3>
                <p className="text-gray-600">Refining your digital assets for maximum search engine impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="md:container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-serif mb-6 text-blue-900">Elevate Your Brand's Digital Presence</h2>
            <p className="text-xl text-gray-600 mb-10">Let's craft a bespoke SEO strategy that resonates with your brand's unique voice.</p>
            <button
            onClick={handleConsultant}
            className="bg-blue-900 text-orange-300 px-8 py-3 rounded text-lg hover:bg-blue-800 transition duration-300">
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPage