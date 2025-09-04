import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ExternalLink } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } =
    useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleViewFullSpecs = (productId) => {
    // Navigate to product details page to view full specifications
    window.location.href = `/products/${productId}`;
  };

  const handleCheckoutToAlibaba = () => {
    // Create a list of all Alibaba URLs from cart items
    const alibabaUrls = cart.items
      .map((item) => item.alibabaUrl)
      .filter(Boolean);

    if (alibabaUrls.length > 0) {
      // For demonstration, open the first Alibaba URL
      // In a real implementation, you might want to create a custom landing page
      // or handle multiple URLs differently
      window.open(alibabaUrls[0], "_blank");
    } else {
      alert("No Alibaba links available for current cart items");
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover our amazing collection of electric bikes
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cart.items.length} item(s) in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {item.brand}
                        </p>
                        <div className="flex items-center space-x-2 mb-3">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">
                            {item.rating}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          ${item.price} each
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => handleViewFullSpecs(item.id)}
                        className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        View Full Specifications
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    ${getTotalPrice().toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">
                    ${(getTotalPrice() * 0.08).toFixed(0)}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">
                    ${(getTotalPrice() * 1.08).toFixed(0)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCheckoutToAlibaba}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Checkout on Alibaba
                </button>

                <button
                  onClick={clearCart}
                  className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>🔒</span>
                  <span>Secure checkout powered by Alibaba</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
