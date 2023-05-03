import React from 'react';
import banner1 from '../../../../assets/images/banner1.jpg';
import banner2 from '../../../../assets/images/banner2.jpg';
import banner3 from '../../../../assets/images/banner3.jpg';
import { Carousel } from 'flowbite-react';
import banner4 from '../../../../assets/images/banner4.jpg';
import banner6 from '../../../../assets/images/banner6.jpg';
import banner7 from '../../../../assets/images/banner7.jpg';

const Banner = () => {
    return (
        <div className='my-8 mx-24'>
            <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={banner1} alt="" />
      <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent p-4 pl-48">
              <h2 class="text-2xl font-bold text-white mb-2">Wan't to know about Bengali cuisine and the well known chef's?</h2>
              <p class="text-white w-2/3">If you want to know about Bengali cuisine and the well known chef's, then you have come at the right website. We provide all types of foods here and the chef's bio. You can see the Bengalis traditional foods also. We guide where the traditional foods are found.</p>
            </div>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={banner2} alt="" />
      <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent p-4 pl-48">
              <h2 class="text-2xl font-bold text-white mb-2">Wan't to know about Bengali cuisine and the well known chef's?</h2>
              <p class="text-white w-2/3">If you want to know about Bengali cuisine and the well known chef's, then you have come at the right website. We provide all types of foods here and the chef's bio. You can see the Bengalis traditional foods also. We guide where the traditional foods are found.</p>
            </div>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={banner4} alt="" />
      <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent p-4 pl-48">
              <h2 class="text-2xl font-bold text-white mb-2">Wan't to know about Bengali cuisine and the well known chef's?</h2>
              <p class="text-white w-2/3">If you want to know about Bengali cuisine and the well known chef's, then you have come at the right website. We provide all types of foods here and the chef's bio. You can see the Bengalis traditional foods also. We guide where the traditional foods are found.</p>
            </div>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={banner6} alt="" />
      <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent p-4 pl-48">
              <h2 class="text-2xl font-bold text-white mb-2">Wan't to know about Bengali cuisine and the well known chef's?</h2>
              <p class="text-white w-2/3">If you want to know about Bengali cuisine and the well known chef's, then you have come at the right website. We provide all types of foods here and the chef's bio. You can see the Bengalis traditional foods also. We guide where the traditional foods are found.</p>
            </div>
    </div>
    
  </Carousel>
</div>
        </div>
    );
};

export default Banner;