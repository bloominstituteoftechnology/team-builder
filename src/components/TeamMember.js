import React from 'react';
import { exportAllDeclaration } from '@babel/types';

const TeamMember = props => {
  const { name, email, role } = props.memberInfo;

  return (
    <div className='my-4 p-4 max-w-full border border-full rounded border-gray-300'>
      <h2 className='font-bold text-xl'>{name}</h2>
      <h4>{role}</h4>
      <a href={`mailto:${email}`} className='text-gray-500'>
        {email}
      </a>
      <div className='flex justify-center mt-2'>
        <button
          className='border rounded border-full border-gray-400 py-1 px-3 text-gray-600 cursor-pointer hover:bg-gray-100'
          onClick={() => props.edit(props.memberInfo)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TeamMember;
