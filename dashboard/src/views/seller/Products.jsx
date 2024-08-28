import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiKnightBanner } from 'react-icons/gi'
import Pagination from '../Pagination'
import Search from '../components/Search'

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5)

    const dummyProducts = [
        {
            _id: 1,
            images: ['https://via.placeholder.com/45'],
            name: 'Product 1',
            category: 'Category 1',
            brand: 'Brand 1',
            price: 100,
            discount: 10,
            stock: 50
        },
        {
            _id: 2,
            images: ['https://via.placeholder.com/45'],
            name: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 200,
            discount: 0,
            stock: 30
        },
        {
            _id: 2,
            images: ['https://via.placeholder.com/45'],
            name: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 200,
            discount: 0,
            stock: 30
        },{
            _id: 2,
            images: ['https://via.placeholder.com/45'],
            name: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 200,
            discount: 0,
            stock: 30
        },{
            _id: 2,
            images: ['https://via.placeholder.com/45'],
            name: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 200,
            discount: 0,
            stock: 30
        },{
            _id: 2,
            images: ['https://via.placeholder.com/45'],
            name: 'Product 2',
            category: 'Category 2',
            brand: 'Brand 2',
            price: 200,
            discount: 0,
            stock: 30
        },
        // Agrega más productos de ejemplo si lo necesitas
    ];

    const totalProduct = dummyProducts.length;

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dummyProducts.map((d, i) => (
                                    <tr key={i}>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <img className='w-[45px] h-[45px]' src={d.images[0]} alt="" />
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>{d.name}</span>
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>{d.category}</span>
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>{d.brand}</span>
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>${d.price}</span>
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            {
                                                d.discount === 0 ? <span>No discount</span> : <span>{d.discount}%</span>
                                            }
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>{d.stock}</span>
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link to={`/edit-product/${d._id}`} className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit /></Link>
                                                <Link to={`/view-product/${d._id}`} className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>
                                                <button className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash /></button>
                                                <Link to={`/add-banner/${d._id}`} className='p-[6px] bg-cyan-500 rounded hover:shadow-lg hover:shadow-cyan-500/50'><GiKnightBanner /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {
                    totalProduct <= parPage ? "" : (
                        <div className='w-full flex justify-end mt-4'>
                            <Pagination
                                pageNumber={currentPage}
                                setPageNumber={setCurrentPage}
                                totalItem={totalProduct}
                                parPage={parPage}
                                showItem={4}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products
