import { useEffect, useState } from "react";
import ProductCard from "./productCard";

const API_URL = "https://api.hengly.online/api/laptops"; // Public API
// const API_URL = "http://backend-service.default.svc.cluster.local"; // Public API

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (signal) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL, { signal });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) setProducts(data);
      else if (data && Array.isArray(data.products)) setProducts(data.products);
      else throw new Error("Unexpected API response");
    } catch (err) {
      if (err.name === 'AbortError') return; // ❌ ignore abort
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal);

    // cleanup only aborts if unmounted
    return () => {
      controller.abort();
    };
  }, []);


  return (
    <div className="p-4">
      {loading && (
        <div className="w-full text-center py-8 text-gray-600">Loading products</div>
      )}

      {error && (
        <div className="w-full text-center py-6">
          <div className="text-red-600 mb-2">Error: {error}</div>
          <button
            onClick={() => fetchProducts()}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      )}


      {!loading && !error && (
        <div className="flex flex-wrap justify-start gap-4">
          {products.map((p) => (
            <ProductCard key={p.id ?? p._id ?? p.name} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
