export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow-sm flex flex-col items-center p-4 transition hover:shadow-md gap-3 m-2 border-[1px] border-gray-500 w-52 h-96">
      <div className="w-full flex-shrink-0 h-40 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain"
        />
      </div>
      <h3 className="text-sm font-medium text-red-900 text-center line-clamp-3 h-16 w-full">
        {product.title}
      </h3>
      <p className="text-green-500 text-xs text-center h-5 w-full">Stock : {product.rating_count}</p>
      <p className="text-black font-semibold text-sm mt-auto">
        Rating :
        <span className="text-yellow-500">
          {product.rating_rate}
        </span>
      </p>
      <p className="text-sky-500 font-semibold text-sm mt-auto">${product.price}</p>
    </div>
  );
}