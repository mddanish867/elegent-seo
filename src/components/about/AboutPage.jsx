import { Users, Award, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif">About Elegance SEO</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Elegance SEO was founded in 2010 with a vision to revolutionize the digital marketing landscape. Our journey began with a small team of passionate SEO experts who believed in the power of organic search to transform businesses.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we've grown into a full-service digital marketing agency, but our core focus remains the same: delivering exceptional SEO results that drive real business growth for our clients.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Elegance SEO, our mission is to empower businesses of all sizes to thrive in the digital world. We believe that every company deserves a strong online presence, and we're committed to making that a reality through innovative, ethical, and results-driven SEO strategies.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Users className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Expert Team</h3>
              <p className="text-gray-600">Our team of SEO specialists brings years of experience and a wealth of knowledge to every project.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <Award className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Proven Results</h3>
              <p className="text-gray-600">We have a track record of success, with countless clients achieving top rankings and increased organic traffic.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <TrendingUp className="text-orange-300 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Cutting-Edge Strategies</h3>
              <p className="text-gray-600">We stay ahead of the curve, constantly adapting our approaches to align with the latest SEO trends and algorithm updates.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-6 text-blue-900">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Transparency in all our dealings</li>
            <li>Commitment to ethical SEO practices</li>
            <li>Continuous learning and improvement</li>
            <li>Client success as our top priority</li>
            <li>Innovation in our strategies and tools</li>
          </ul>
        </section>
      </main>     
    </div>
  )
}