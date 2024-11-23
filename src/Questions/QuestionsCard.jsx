import React from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { red } from '@mui/material/colors';

function QuestionsCard({ data }) {
    return (
        <Box className="" sx={{ marginBottom: "12px", marginLeft: 'auto', marginRight: 'auto' }}>

            <Paper className='border h-full w-full ml-auto mr-auto p-2' elevation={1}>
                <div className='flex gap-5'>
                    <img className='w-[68px] h-[68px] lg:h-[90px] lg:w-[90px] mb-auto mt-2' src='/images/HomePersons.png' />
                    <div className='space-y-2'>
                        <div className='font-bold text-[120%]'>{data.question}</div>
                        <p className='font-semibold'><span className='text-[#4592EC]'>{data.answered_count} of your friends</span> answered this question <img className='inline-block' src='/images/person.png'></img> </p>
                    </div>
                </div>
            </Paper>
        </Box >
    )
}

export default QuestionsCard;
