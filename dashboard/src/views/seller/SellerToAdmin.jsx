import React, { useEffect, useState, useRef, useMemo } from 'react'

const SellerToAdmin = () => {

    const scrollRef = useRef()
    const [text, setText] = useState('')

    // Memoizar los mensajes para evitar recrearlos en cada renderizado
    const dummyMessages = useMemo(() => [
        { senderId: '1', message: 'Hello from Admin' },
        { senderId: '2', message: 'Hello from Seller' }
    ], []);

    const activeAdmin = true; // Simulación de que el admin está activo
    const userInfo = { _id: '2', name: 'Seller' }; // Dummy userInfo

    const send = (e) => {
        e.preventDefault()
        const newMessage = {
            senderId: userInfo._id,
            receverId: '',
            message: text,
            senderName: userInfo.name
        };
        dummyMessages.push(newMessage);
        setText('');
        console.log('Message sent:', newMessage);
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [dummyMessages])

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full bg-[#283046] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>

                    <div className='w-full md:pl-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-3'>
                                <div className='relative'>
                                    <img className='w-[42px] h-[42px] border-green-500 border-2 max-w-[42px] p-[2px] rounded-full' src="https://via.placeholder.com/42" alt="Admin" />
                                    {
                                        activeAdmin && <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                    }
                                </div>
                                <h2 className='text-base text-white font-semibold'>Support</h2>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto'>
                                {
                                    dummyMessages.map((m, i) => {
                                        if (userInfo._id !== m.senderId) {
                                            return (
                                                <div ref={scrollRef} key={i} className='w-full flex justify-start items-center'>
                                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                                        <div>
                                                            <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="https://via.placeholder.com/38" alt="Admin" />
                                                        </div>
                                                        <div className='flex justify-center items-start flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm'>
                                                            <span>{m.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div ref={scrollRef} key={i} className='w-full flex justify-end items-center'>
                                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm'>
                                                            <span>{m.message}</span>
                                                        </div>
                                                        <div>
                                                            <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="https://via.placeholder.com/38" alt="Seller" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <form onSubmit={send} className='flex gap-3'>
                            <input value={text} onChange={(e) => setText(e.target.value)} className='w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]' type="text" placeholder='Input your message' />
                            <button className='shadow-lg bg-cyan-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerToAdmin
