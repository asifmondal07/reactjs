import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function User() {
    const { userId } = useParams();
    return (<div className='bg-black text-3xl flex justify-center text-amber-100 p-4'>
              User: {userId}
            </div>
    )
}

