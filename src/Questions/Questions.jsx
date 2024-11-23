import React from 'react'
import { useSelector } from 'react-redux';
import QuestionsCard from './QuestionsCard';
import { Link } from 'react-router-dom';

function Questions() {
    const questions = useSelector((state) => state.Questions.data);
    // console.log(questions)
    return (
        <div className=''>
            <div className='h-[15vh] sticky top-0 bg-white divide-y mb-4'>
                <div className='text-center h-[10vh] flex items-center justify-center md:text-4xl text-3xl  font-semibold text-[rgb(128,128,128)]'>
                    Questions
                </div>
                <div className='text-center pt-4 md:text-2xl sm:text-xl bg-white'>
                    Previous Questions <span className='ml-[2%] mb-[4px] border-b border-[rgb(214,213,213)] w-[50vw] inline-block'></span>
                </div>
            </div>
            <div className='w-[90vw] mx-auto columns-1 md:columns-2 gap-7'>
                {questions.map((q, idx) => <Link key={idx} to={`/discuss-question/${idx}`}><QuestionsCard data={q} /></Link>)}
            </div>
        </div>
    )
}

export default Questions;
