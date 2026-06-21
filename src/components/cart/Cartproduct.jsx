import React from "react";

function Cartproduct({ product, cartItem }) {
  function removecartItem(){
    
  }  
  const totalPrice = cartItem?.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItem?.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>

                  <p className="text-green-600 text-sm">In Stock</p>

                  <p className="font-bold mt-2">${item.price}</p>

                  <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-72 border rounded-lg p-4 h-fit shadow-sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cartItem.length}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartproduct;
