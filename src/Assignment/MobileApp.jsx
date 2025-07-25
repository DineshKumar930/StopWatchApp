import React, { useState } from "react";

const MobileApp = () => {
    const[selectedMob,setSelectedMob]=useState();
  const mobile = [
    {
      id: 1,
      mobname: "Samsung",
      price: 22560,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/a/j/-original-imahcqcwhvvxsrgd.jpeg?q=70",
      speci: "4GB RAM 32GB 6000MAH Battery",
    },
    {
      id: 2,
      mobname: "Vivo Y25",
      price: 22560,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/a/j/-original-imahcqcwhvvxsrgd.jpeg?q=70",
      speci: "4GB RAM 32GB 6000MAH Battery",
    },
    {
      id: 3,
      mobname: "Redmi 10",
      price: 22560,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/a/j/-original-imahcqcwhvvxsrgd.jpeg?q=70",
      speci: "4GB RAM 32GB 6000MAH Battery",
    },
  ];



  return (
    <div>
      <div>

      <h1>Mobile Gallary</h1>
    {mobile.map((mob)=>(
      
      <img
      src={mob.img}
      style={{
        cursor: "pointer",
        borderRadius: "8px",
        margin:"10px"
      }}
      onClick={()=>setSelectedMob(mobile)}
      />
    ))}
    </div>
      <div>



      </div>

       

    </div>
  );
};

export default MobileApp;
