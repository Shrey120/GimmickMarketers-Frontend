import React from "react";

export default function Table({ data, onEdit, onDelete }) {
  return (
    <table className='w-full border-collapse border border-gray-200 mt-4'>
      <thead className='bg-gray-100'>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              className='border border-gray-200 px-4 py-2 text-left'>
              {key}
            </th>
          ))}
          <th className='border border-gray-200 px-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className='hover:bg-gray-50'>
            {Object.values(row).map((value, i) => (
              <td
                key={i}
                className='border border-gray-200 px-4 py-2'>
                {value}
              </td>
            ))}
            <td className='border border-gray-200 px-4 py-2'>
              <button
                onClick={() => onEdit(index)}
                className='text-blue-500 hover:underline mr-2'>
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className='text-red-500 hover:underline'>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
