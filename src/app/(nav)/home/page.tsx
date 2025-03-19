'use client';

import { getData } from '@/api/data';
import { Data } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = [
    { id: '1', title: '전체', info: 'all' },
    { id: '2', title: '미국', info: 'america' },
    { id: '3', title: '중국', info: 'china' },
    { id: '4', title: '한국', info: 'korea' },
    { id: '5', title: '일본', info: 'japan' },
  ];
  const { isLoading, isError, data } = useQuery<Data[]>({
    queryFn: getData,
    queryKey: ['data', selectedCategory],
  });

  const filteredData = data?.filter((item) =>
    selectedCategory === '전체' ? true : item.title.includes(selectedCategory)
  );

  return (
    <main className="py-6 flex flex-col justify-center items-center gap-4">
      <ul className="flex gap-4">
        {categories.map((category, idx) => (
          <li
            key={idx}
            onClick={() => setSelectedCategory(category.title)}
            className="p-2 bg-gray-200 text-gray-700 rounded-md"
          >
            {category.title}
          </li>
        ))}
      </ul>
      <section className="w-[50vw] flex flex-col gap-4">
        {filteredData?.map((item, idx) => (
          <div
            key={idx}
            className="p-4 flex flex-col gap-4 border border-solid border-gray-300 rounded-md shadow-lg"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.content}</p>
            <p className="text-sm text-gray-700 text-right">{item.createdAt}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
