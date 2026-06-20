import React from 'react'
import Navbar from '../Homepage/Navbar'

function Profilepage() {
  return (
    <>
    <Navbar/>    
    <div>
      <h1 className='font-bold p-4 text-2xl'>
        Your Account
      </h1>
                            {/* Orders */}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Orders</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className='border-b flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Your Orders</h2>
              <button >{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Subscribe & Save</h2>
              <button>{">"}</button>
            </div>
            <div className='flex justify-between p-3 border-gray-500 '>
              <h2 className=''>Recalls and Product Safety</h2>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
                          {/* Account Settings */}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Account Settings</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className='border-b flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Login & security</h2>
              <button >{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Default Purchase Settings</h2>
              <button>{">"}</button>
            </div>
            
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Manage Your Seller Account</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Account Linking</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Create your free business account</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Manage Prime membership</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Manage Your Amazon Family</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Memberships & Subscriptions</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Content Library</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Devices</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Review Your Purchases</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Edit/Delete customer review</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>SMS alert preferencs</h2>
              <button>{">"}</button>
            </div>
            <div className=' flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Photo ID proofs</h2>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
                            {/* Amazon pay */}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Amazon Pay</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className='border-b flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Top-up your Amazon Pay Wallet</h2>
              <button >{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>View Amazon Pay balance statement</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Add Gift Card to your balance</h2>
              <button>{">"}</button>
            </div>
            
            <div className='flex justify-between p-3 border-gray-500 '>
              <h2 className=''>Manage payment options</h2>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
                            {/* Message Centre */}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Message Centre</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className='border-b flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Communication preferences</h2>
              <button >{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Your Messages</h2>
              <button>{">"}</button>
            </div>
            <div className='flex justify-between p-3 border-gray-500 '>
              <h2 className=''>Alexa shopping notifications</h2>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
                            {/* Customer Service*/}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Customer Service</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className=' flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Contact Us</h2>
              <button >{">"}</button>
            </div>
          </div>
        </div>
      </div>
                            {/* Personalization */}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Personalization</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className='border-b flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Your Shopping preferences</h2>
              <button >{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Your Content</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Your Recommendations</h2>
              <button>{">"}</button>
            </div>
            <div className='flex justify-between p-3 border-gray-500 '>
              <h2 className=''>Wish List</h2>
              <button>{">"}</button>
            </div>
          </div>
        </div>

      </div>
                            {/*Manage your data  */}
      <div className=' m-2 '>
        <div className='p-3 '>
          <h1 className='font-bold mb-3 text-xl'>Manage your data</h1>
          <div className='border rounded-xl border-gray-300'>
            <div className='border-b flex justify-between p-3 border-gray-300  '>
              <h2 className=''>Request your data</h2>
              <button >{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Data Acess and Requests</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Manage apps and services with data access</h2>
              <button>{">"}</button>
            </div>
            <div className='border-b flex justify-between p-3 border-gray-300 '>
              <h2 className=''>Close Your Amazon Account</h2>
              <button>{">"}</button>
            </div>
            <div className='flex justify-between p-3 border-gray-500 '>
              <h2 className=''>Privacy Notice</h2>
              <button>{">"}</button>
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Profilepage