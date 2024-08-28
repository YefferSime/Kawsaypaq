import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
    const { orderId } = useParams()

    // Simulación de datos
    const order = {
        _id: orderId,
        date: '2024-08-22',
        delivery_status: 'pending',
        shippingInfo: {
            name: 'John Doe',
            address: '123 Main St',
            province: 'Province Name',
            city: 'City Name',
            area: 'Area Name',
        },
        payment_status: 'Paid',
        price: 250.00,
        products: [
            { name: 'Product 1', brand: 'Brand A', quantity: 1, images: ['http://localhost:3000/images/category/1.jpg'] },
            { name: 'Product 2', brand: 'Brand B', quantity: 2, images: ['http://localhost:3000/images/category/1.jpg'] },
        ],
        suborder: [
            {
                delivery_status: 'processing',
                products: [
                    { name: 'Product 3', brand: 'Brand C', quantity: 1, images: ['http://localhost:3000/images/category/1.jpg'] }
                ]
            }
        ]
    }

    const [status, setStatus] = useState(order.delivery_status)

    const status_update = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4  bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl text-[#d0d2d6]'>Order Details</h2>
                    <select onChange={status_update} value={status} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'>
                        <option value="pending">pending</option>
                        <option value="processing">processing</option>
                        <option value="warehouse">warehouse</option>
                        <option value="placed">placed</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>
                <div className='p-4'>
                    <div className='flex gap-2 text-lg text-[#d0d2d6]'>
                        <h2>#{order._id}</h2>
                        <span>{order.date}</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-[32%]'>
                            <div className='pr-3 text-[#d0d2d6] text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver to : {order.shippingInfo?.name}</h2>
                                    <p><span className='text-sm'>${order.shippingInfo?.address} {order.shippingInfo?.province} {order.shippingInfo?.city} {order.shippingInfo?.area}</span></p>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Payment Status : </h2>
                                    <span className='text-base'>{order.payment_status}</span>
                                </div>
                                <span>Price : ${order.price}</span>
                                <div className='mt-4 flex flex-col gap-8'>
                                    <div className='text-[#d0d2d6]'>
                                        {order.products.map((p, i) => (
                                            <div key={i} className='flex gap-3 text-md'>
                                                <img className='w-[45px] h-[45px]' src={p.images[0]} alt="" />
                                                <div>
                                                    <h2>{p.name}</h2>
                                                    <p>
                                                        <span>Brand : </span>
                                                        <span>{p.brand} </span>
                                                        <span className='text-lg'>Quantity : {p.quantity}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[68%]'>
                            <div className='pl-3'>
                                <div className='mt-4 flex flex-col'>
                                    {order.suborder.map((o, i) => (
                                        <div key={i} className='text-[#d0d2d6] mb-6'>
                                            <div className='flex justify-start items-center gap-3'>
                                                <h2>Seller {i + 1} order : </h2>
                                                <span>{o.delivery_status}</span>
                                            </div>
                                            {o.products.map((p, index) => (
                                                <div key={index} className='flex gap-3 text-md mt-2'>
                                                    <img className='w-[45px] h-[45px]' src={p.images[0]} alt="" />
                                                    <div>
                                                        <h2>{p.name}</h2>
                                                        <p>
                                                            <span>Brand : </span>
                                                            <span>{p.brand} </span>
                                                            <span className='text-lg'>Quantity : {p.quantity}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
