import { coffeeCategories } from "../assets/data";


const Categories = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-black/80">
            Explore Our Coffee Categories
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover a variety of handcrafted coffee styles, each offering
            unique flavors, aromas, and experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coffeeCategories.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-primary/3"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                ☕
              </div>

              <h3 className="text-xl font-semibold text-black/80 mb-2">
                {coffee.name}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {coffee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;