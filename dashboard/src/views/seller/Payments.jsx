import React, { forwardRef, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import toast from 'react-hot-toast'
import moment from 'moment'
import { FixedSizeList as List } from 'react-window'

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

const Payments = () => {

    const [amount, setAmount] = useState(0)
    const loader = false; // Placeholder for loading state

    const dummyPendingWithdrawals = [
        { _id: '1', amount: 100, status: 'Pending', createdAt: '2024-08-20' },
        { _id: '2', amount: 200, status: 'Pending', createdAt: '2024-08-21' }
    ];

    const dummySuccessWithdrawals = [
        { _id: '3', amount: 150, status: 'Success', createdAt: '2024-08-15' },
        { _id: '4', amount: 250, status: 'Success', createdAt: '2024-08-16' }
    ];

    const totalAmount = 1000; // Static total amount
    const availableAmount = 500; // Static available amount
    const withdrowAmount = 300; // Static withdrawn amount
    const pendingAmount = 200; // Static pending amount

    const Row = ({ index, style }) => {
        return (
            <div style={style} className='flex text-sm'>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>${dummyPendingWithdrawals[index]?.amount}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    <span className='py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs'>{dummyPendingWithdrawals[index]?.status}</span>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>{moment(dummyPendingWithdrawals[index]?.createdAt).format('LL')}</div>
            </div>
        )
    }

    const Rows = ({ index, style }) => {
        return (
            <div style={style} className='flex text-sm'>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>${dummySuccessWithdrawals[index]?.amount}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    <span className='py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs'>{dummySuccessWithdrawals[index]?.status}</span>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>{moment(dummySuccessWithdrawals[index]?.createdAt).format('LL')}</div>
            </div>
        )
    }

    const sendRequest = (e) => {
        e.preventDefault()
        console.log(availableAmount - amount)
        if (availableAmount - amount > 10) {
            // Simulate success message
            toast.success('Withdrawal request sent successfully!')
            setAmount(0)
        } else {
            toast.error('Insufficient balance')
        }
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5'>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>${totalAmount}</h2>
                        <span className='text-sm font-normal'>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>${availableAmount}</h2>
                        <span className='text-sm font-normal'>Available Amount</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#cd00e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>${withdrowAmount}</h2>
                        <span className='text-sm font-normal'>Withdrawal Amount</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#00cfe8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-lg font-bold'>${pendingAmount}</h2>
                        <span className='text-sm font-normal'>Pending Amount</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#7367f0] shadow-lg' />
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4'>
                <div className='bg-[#283046] text-[#d0d2d6] rounded-md p-5'>
                    <h2 className='text-lg'>Send Withdrawal Request</h2>
                    <div className='py-5'>
                        <form onSubmit={sendRequest}>
                            <div className='flex gap-3 flex-wrap'>
                                <input onChange={(e) => setAmount(e.target.value)} required value={amount} min='0' type="number" className='px-3 md:w-[79%] py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' name='amount' />
                                <button disabled={loader} className='bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-sm px-4 py-2 text-sm '>{loader ? 'Loading..' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='text-lg pb-4'>Pending Withdrawal Request</h2>
                        <div className='w-full overflow-x-auto'>
                            <div className='flex bg-[#161d31] uppercase text-xs min-w-[340px]'>
                                <div className='w-[25%] p-2'>No</div>
                                <div className='w-[25%] p-2'>Amount</div>
                                <div className='w-[25%] p-2'>Status</div>
                                <div className='w-[25%] p-2'>Date</div>
                            </div>
                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'hidden' }}
                                    className='List'
                                    height={350}
                                    itemCount={dummyPendingWithdrawals.length}
                                    itemSize={35}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>
                <div className='bg-[#283046] text-[#d0d2d6] rounded-md p-5'>
                    <div>
                        <h2 className='text-lg pb-4'>Success Withdrawal</h2>
                        <div className='w-full overflow-x-auto'>
                            <div className='flex bg-[#161d31] uppercase text-xs min-w-[340px]'>
                                <div className='w-[25%] p-2'>No</div>
                                <div className='w-[25%] p-2'>Amount</div>
                                <div className='w-[25%] p-2'>Status</div>
                                <div className='w-[25%] p-2'>Date</div>
                            </div>
                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'hidden' }}
                                    className='List'
                                    height={350}
                                    itemCount={dummySuccessWithdrawals.length}
                                    itemSize={35}
                                    outerElementType={outerElementType}
                                >
                                    {Rows}
                                </List>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
