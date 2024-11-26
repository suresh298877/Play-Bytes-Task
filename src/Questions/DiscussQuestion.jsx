import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigation, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function DiscussQuestion() {
    const questions = useSelector((state) => state.Questions.data);
    const { id } = useParams()
    const data = questions[id]
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const messageContainer = useRef(null)

    useEffect(() => {
        if (messageContainer.current) {
            messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
        }
    }, [messages]);



    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setMessages([...messages, input])
            setInput('')
        }
    }
    const handleClick = (e) => {
        setMessages([...messages, input])
        setInput('')
    }
    return (
        <div className='' ref={messageContainer}>
            <div>
                <div className='text-center p-6 sticky w-[100vw] z-10 top-0 bg-[white]'>
                    <Link to="/questions"><span className='float-left ml-4'><ArrowBackIosIcon className='' /></span></Link>
                    <span className='text-[#6e6e6e] sm:text-lg md:text-xl lg:text-2xl font-poppins font-semibold'>QUESTIONS</span>
                </div>
                <div className='bg-[#ACD3FF] h-[32vh] md:h-auto flex justify-center items-center p-3'>
                    <div className='text-[#002b5e] w-[60%] text-[16px] relative left-[40px] md:left-0 md:text-[34px] font-bold'>{data.question}</div>
                    <img className='relative top-5 right-2 md:right-16 md:h-[34vh] h-[25vh] self-end z-0' src='/images/Socialinteraction-rafiki 1.png' />
                </div>
                <div className='border border-[#81B9FA] flex items-center px-4 justify-between w-[80vw] ml-auto mr-auto h-[40px] lg:h-[60px] rounded-xl relative bottom-5 lg:bottom-8 bg-[white]'>
                    <span className='text-sm md:text-lg'>View more questions on this topic</span>
                    <AddOutlinedIcon />
                </div>
            </div>

            <div className='mb-[100px] overflow-scroll container ml-auto mr-auto pl-4 pr-4'>
                <div className='flex gap-5 text-[#505050] font-semibold max-w-[65vw] md:max-w-[50vw] mb-2'>
                    <img src='/images/profile.jpg' className='h-[26px] w-[26px] rounded-full' />
                    <div className='flex flex-col gap-2'>
                        <div className='bg-[#efefef] rounded-lg pl-2'>
                            <span className='text-[red] text-xs font-semibold'>John Smith</span>
                            <div>I've Love to have Mr.Bean as my roommate!</div>
                        </div>
                        <div className='bg-[#efefef] rounded-lg pl-2'>
                            He's hilarious and always finds a way to make everyday life an adventure.
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mb-1'>
                    <div className='flex max-w-[65vw] md:max-w-[50vw] gap-5 text-[white] font-semibold'>
                        <div className='bg-[#166FF6] rounded-xl pl-2'>
                            <span className='text-[white] text-xs font-semibold'>John Doe</span>
                            <div>I'd choose to room with Tony Stark, a.k.a. Iron Man. Imagine the perks! A high-tech apartment, a personal AI assistant (Jarvis), and endless tech gadgets to play with.
                            </div>
                        </div>
                        <img src='/images/profile2.jpg' className='h-[36px] w-[36px] rounded-full' />
                    </div>
                </div>
                {messages.map((msg, idx) => <div className='flex'><div key={idx} className='inline text-left max-w-[56vw] mr-[50px] ml-auto pl-5 my-1  text-white bg-[#166FF6] rounded-lg pr-2 p-2'>{msg}</div></div>)}
            </div>
            <div className='flex w-full h-[10vh] items-center justify-between p-4 border-t bg-white border-t-[grey] fixed bottom-0'>
                <input onKeyDown={handleKeyDown} value={input} onChange={handleChange} name='message' className='w-full mr-8 rounded-md h-[7vh] pl-3 font-poppins font-semibold text-lg' type='text' placeholder='Type a message' />
                <button onClick={handleClick}><KeyboardArrowRightOutlinedIcon className='bg-[#166FF6]' sx={{ height: "40px", width: "40px", borderRadius: "50%", color: "white" }} /></button>
            </div>

        </div>
    )
}

export default DiscussQuestion
