import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setService(data))
    },[])
    const {name,price,img}= service;
    return (
        <div>
            <h1>You are about to book: {name} || {price} <img src={img} alt="" />
            </h1>
            <div className='text-center'>
              <Link to='/checkout'>
                 <Button variant="primary">Proceed Checkout</Button>
              </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;