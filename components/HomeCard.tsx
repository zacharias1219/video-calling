'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[650px] min-h-[350px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex flex-row justify-between h-full ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm font-normal">{description}</p>
        </div>
        <div className="flex-auto p-5 pl-40 pt-18 size-12 rounded-[10px]">
          <Image src={img} alt="meeting" width={220} height={220} />
        </div>
      </div>
      
      
    </section>
  );
};

export default HomeCard;