import React from 'react';
import { middleList } from '../../constants';

const FooterMiddleList = ({ title, listItem }) => {
    return (
        <div className='w-full'>
            <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                {title}
            </h3>
            <ul className='flex flex-col gap-2 font-bodyFont '>
                {
                    listItem.map((item) =>
                        item.listData.map((data, i) => <li key={i} className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'>{data}</li>)
                    )
                }
            </ul>
        </div>
    );
};

export default FooterMiddleList;