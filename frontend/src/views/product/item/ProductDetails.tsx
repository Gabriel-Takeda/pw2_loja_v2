import { ProductDto } from "../products.types";

interface ProductDetailsProps {
    product: ProductDto
}

function ProductDetails({product}: ProductDetailsProps) {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8 space-y-6">
            <header className="border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
                </h1>
                <p className="mt-2 text-gray-600">
                {product.description}
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-xl p-4">
                <span className="block text-sm text-gray-500">Valor</span>
                <span className="text-xl font-semibold text-gray-900">
                    R$ {parseFloat(product.price).toFixed(2)}
                </span>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                <span className="block text-sm text-gray-500">
                    Quantidade disponível
                </span>
                <span className="text-xl font-semibold text-gray-900">
                    {product.stock}
                </span>
                </div>
            </div>
            </div>
        </main>
    );
}

export default ProductDetails