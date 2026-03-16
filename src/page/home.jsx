import ProductList from "../components/productList";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="w-full bg-white border-b">
        <div className="container mx-auto flex items-center justify-between py-6 px-8">
          <div className="text-3xl font-bold tracking-wide">Lee.Shop</div>
          <nav>
            <ul className="flex space-x-8 text-gray-700 font-medium text-lg">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">Products</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </nav>  
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Login</span>
            <span>|</span>
            <span>Help</span>
            <span>|</span>
            <span>Contact us</span>
            <span className="ml-4 text-xl">🛒</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-[#98a3b6]">
        <div className="container mx-auto px-8 py-12 flex flex-col items-center">
          {/* Replace with your own image */}
          <img
            src="https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/bestmultimedialaptop.jpg"
            alt="Essential Tees"
            className="w-full max-w-3xl object-cover mb-6 rounded"
          />
        <div className="text-white text-lg font-medium">New Essential</div>
            <button className="text-white underline text-sm mt-1" onClick={() => alert("Go to products")}>
                Learn more &rarr;
            </button>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="container mx-auto px-8 mt-8">
        <div className="flex space-x-8 justify-center border-b">
          {["All"].map((category) => (
            <div
              key={category}>
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-8 py-12">
        <ProductList />
      </div>
    </div>
  );
}