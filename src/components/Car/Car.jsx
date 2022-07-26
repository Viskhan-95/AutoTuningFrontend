import React from 'react';
import './style.css'
import { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServices } from '../../features/services/servicesSlice';
import car from '../../icon/car.png'


const Car = () => {
<<<<<<< HEAD
   return (
      <div className='car'>
         <div className='car_service'>
            <div className='service-info'></div>

         </div>
      </div>
   );
=======
    const dispatch = useDispatch()
    const services = useSelector((state)=>state.services.services)
    
    useEffect(() => {
        dispatch(getServices());
      }, [dispatch]);
    
    return (
        <div className='car'>
            <div className='car_service'>
                <div className='service-info'></div>
                {services.map((el)=>{
                    <div className='blue_circle'>
                        <div className='white_circle'></div>
                    </div>
                })}
            </div>
        </div>
    );
>>>>>>> 90187483cdf2742b4a002d4024efbd04197c84ee
};

export default Car;