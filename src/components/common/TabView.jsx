import { useState } from "react"
import Button from "./button"
import Modal from "./Modal"
import { Slider } from "./Slider"
import TabCard from "./TabCard"
import { SwiperSlide } from 'swiper/react';

function TabView({tabdata=[] , tabHeaders=[] , activeIndex=0 , changeActiveIndex  }) {
  const active = 'cursor-pointer w-full border-2 border-transparent border-b-[#fe5829] flex justify-center items-center py-2.5 bg-[#fff8f6] text-[#fe5829]'
  const notActive = 'cursor-pointer w-full hover:border-b-[#fe5829] border-2 border-transparent hover:bg-[#fff8f6]  flex justify-center items-center py-2.5 hover:text-[#fe5829]'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="w-full">
    <Modal isOpen={isModalOpen} onClose={closeModal}>
     
      </Modal>
    <div className="md:grid gap-2.5 block md:grid-cols-[10fr_2fr] px-2">
        <div className="min-w-full my-5 md:my-0 max-w-screen">
          <Slider>
            
      {tabHeaders.map((ele , idx)=>{
        return <SwiperSlide key={idx}>
          <div onClick={()=>changeActiveIndex(idx)} className={activeIndex===idx ? active : notActive } key={idx}>
           <h1 className="font-bold mx-5 font-sans">{ele}</h1>
          </div> </SwiperSlide>
      })}
            </Slider>
        </div>


 
     <Button onClick={openModal}> Add Topic  </Button>
    </div>

     <div className="w-full my-10">
        
        { tabdata.map((item,idx)=>{
          return <TabCard key={`card-${idx}`} item={item}>
            </TabCard>
        }) }

     </div>

    </div>
  )
}

export default TabView