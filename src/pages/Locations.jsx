export default function Locations() {
    return (
      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-[#1b5e20] mb-12">Find a Café Lamees Near You</h1>
          <p className="text-2xl text-[#1b5e20] mb-12">We're growing across the UK – enter your postcode to find your local store.</p>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
            <p className="text-[#1b5e20] text-xl">Store Locator Map (Google Maps API here)</p>
          </div>
        </div>
      </section>
    );
  }