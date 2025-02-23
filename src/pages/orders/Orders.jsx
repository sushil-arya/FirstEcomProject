import React, { useState } from 'react';
import AccountSideBar from "../../components/accountSideBar/AccountSideBar";
import Button from '@mui/material/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Badges from '../../components/badge/Badges';

// import { IoIosList, IoIosCart, IoIosNotifications, IoIosSettings, IoIosHelpCircle } from'react-icons/io5';


const Orders = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(false);

  const isShowOrderedProduct =(index)=>{

    if(isOpenOrderedProduct === index){
      setIsOpenOrderedProduct(null);
    }else{
      setIsOpenOrderedProduct(index);
    }

  }
  return (
    <section className='py-10 w-full'>
<div className="container flex gap-5">
  <div className="col1 w-[20%]">
    {/* Account side bar component */}
    <AccountSideBar />
  </div>

  <div className="col2 w-[78%]">
    <div className="shadow-md rounded-md bg-white">

      <div className="py-3 px-4 border-b !border-[#e5e5e5]">
        <h2 className="text-[15px] text-[#444] font-[600]">My Orders</h2>
        <p className="mt-0 text-[14px]">
          There are <span className="font-bold text-[#1976d2]">5</span>{" "}
          orders
        </p>

        <div className="relative overflow-x-auto mt-5">
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  &nbsp;
                </th>
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Order Id
                </th>
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Payment Id
                </th>
          
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Name
                </th>
          
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Phone Number
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Address
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Pincode
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Total Amount
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Email Id
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  User Id
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Order Status
                </th>
              
                <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>

              {/* order table 1 */}
              <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(0)}>

                    {
                      // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                      <FaAngleUp className = {`transition-all ${isOpenOrderedProduct === 0 ? 'rotate-180 duration-500' : 'duration-500'} text-[16px] text-[#555]`} /> 
                    }

                    </Button>
                  </td>
                  
                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>OD123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>PAY123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                    John Doe
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    9123554321
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>Sample Address, 123 Main St, City</span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    123456
                  </td>

                  <td className="px-6 py-4 font-[500]">
                  &#8377; 4999.00
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    johndoe@gmail.com
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>
                      1234567890
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <Badges status="pending" />
                  </td>

                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2022-01-01
                  </td>
              </tr>
    
              {
                isOpenOrderedProduct === 0 && (

                  
                  <tr>
                    <td className='pl-20' colSpan="6">
                      <div className="relative overflow-x-auto">
                        <table className='w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400'>
                          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Id
                              </th>
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Title
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Image
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Quantity
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Price
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Sub Total
                              </th>              
                            </tr>
                          </thead>

                        <tbody>
                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>


                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </td>
                    
                </tr>
                
                )            
              }


              {/* order table 2 */}
              <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(1)}>

                    {
                      // isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555]' />

                      <FaAngleUp className = {`transition-all ${isOpenOrderedProduct === 1 ? 'rotate-180 duration-500' : 'duration-500'} text-[16px] text-[#555]`} />
                    }

                    </Button>
                  </td>
                  
                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>OD123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>PAY123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                    John Doe
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    9123554321
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>Sample Address, 123 Main St, City</span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    123456
                  </td>

                  <td className="px-6 py-4 font-[500]">
                  &#8377; 4999.00
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    johndoe@gmail.com
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>
                      1234567890
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <Badges status="delivered" />
                  </td>

                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2022-01-01
                  </td>
              </tr>
              {
                  isOpenOrderedProduct === 1 && (
                    <tr>
                        <td className='pl-20' colSpan="6">
                          <div className="relative overflow-x-auto">
                            <table className='w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400'>
                              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
            
                                  <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                    Product Id
                                  </th>
                                  <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                    Product Title
                                  </th>
                            
                                  <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                    Image
                                  </th>
                            
                                  <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                    Quantity
                                  </th>
                                
                                  <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                    Price
                                  </th>
                                
                                  <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                    Sub Total
                                  </th>              
                                </tr>
                              </thead>

                            <tbody>
                              <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className='text-[#1976d2]'>PRD123456789 
                                    </span>
                                  </td>

                                  <td className="px-6 py-4 font-[500]">
                                    <span className='text-[#1976d2]'>ALAWO Faux Leather Watch Box 
                                    </span>
                                  </td>

                                  <td className="px-6 py-4 font-[500]">
                                    <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                                  </td>

                                  <td className="px-6 py-4 font-[500]">
                                    1
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                  </td>
                                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                  &#8377; 4999.00
                                  </td>

                              </tr>


                              <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className='text-[#1976d2]'>PRD123456789 
                                    </span>
                                  </td>

                                  <td className="px-6 py-4 font-[500]">
                                    <span className='text-[#1976d2]'>ALAWO Faux Leather Watch Box 
                                    </span>
                                  </td>

                                  <td className="px-6 py-4 font-[500]">
                                    <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                                  </td>

                                  <td className="px-6 py-4 font-[500]">
                                    1
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                  </td>
                                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                  &#8377; 4999.00
                                  </td>


                              </tr>
                            </tbody>
                          </table>
                          </div>
                        </td>
                  </tr>
                  )    
              }

              {/* order table 3 */}
              <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(2)}>

                    {
                      // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                      <FaAngleUp className = {`transition-all ${isOpenOrderedProduct === 2 ? 'rotate-180 duration-500' : 'duration-500'} text-[16px] text-[#555]`} /> 
                    }

                    </Button>
                  </td>
                  
                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>OD123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>PAY123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                    John Doe
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    9123554321
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>Sample Address, 123 Main St, City</span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    123456
                  </td>

                  <td className="px-6 py-4 font-[500]">
                  &#8377; 4999.00
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    johndoe@gmail.com
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>
                      1234567890
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <Badges status="shipped" />
                  </td>

                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2022-01-01
                  </td>
              </tr>
    
              {

                isOpenOrderedProduct === 2 && (

                  <tr>
                    <td className='pl-20' colSpan="6">
                      <div className="relative overflow-x-auto">
                        <table className='w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400'>
                          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Id
                              </th>
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Title
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Image
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Quantity
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Price
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Sub Total
                              </th>              
                            </tr>
                          </thead>

                        <tbody>
                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>


                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </td>
                    
                  </tr>
                
                )
                
              }


              {/* order table 4 */}
              <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(3)}>

                    {
                      // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                      <FaAngleUp className = {`transition-all ${isOpenOrderedProduct === 3 ? 'rotate-180 duration-500' : 'duration-500'} text-[16px] text-[#555]`} /> 
                    }

                    </Button>
                  </td>
                  
                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>OD123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>PAY123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                    John Doe
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    9123554321
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>Sample Address, 123 Main St, City</span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    123456
                  </td>

                  <td className="px-6 py-4 font-[500]">
                  &#8377; 4999.00
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    johndoe@gmail.com
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>
                      1234567890
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <Badges status="confirm" />
                  </td>

                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2022-01-01
                  </td>
              </tr>
    
              {

                isOpenOrderedProduct === 3 && (

                  
                  <tr>
                    <td className='pl-20' colSpan="6">
                      <div className="relative overflow-x-auto">
                        <table className='w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400'>
                          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Id
                              </th>
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Title
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Image
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Quantity
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Price
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Sub Total
                              </th>              
                            </tr>
                          </thead>

                        <tbody>
                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>


                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </td>
                    
                </tr>
                
                )
                
              }

              {/* order table 5 */}
                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                  <td className="px-6 py-4 font-[500]">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={()=>isShowOrderedProduct(4)}>

                    {
                      // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                      <FaAngleUp className = {`transition-all ${isOpenOrderedProduct === 4 ? 'rotate-180 duration-500' : 'duration-500'} text-[16px] text-[#555]`} /> 
                    }

                    </Button>
                  </td>
                  
                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>OD123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>PAY123456789 
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                    John Doe
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    9123554321
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>Sample Address, 123 Main St, City</span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    123456
                  </td>

                  <td className="px-6 py-4 font-[500]">
                  &#8377; 4999.00
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    johndoe@gmail.com
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <span className='text-[#1976d2]'>
                      1234567890
                    </span>
                  </td>

                  <td className="px-6 py-4 font-[500]">
                    <Badges status="cancelled" />
                  </td>

                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                    2022-01-01
                  </td>
              </tr>

              {

                isOpenOrderedProduct === 4 && (

                  
                  <tr>
                    <td className='pl-20' colSpan="6">
                      <div className="relative overflow-x-auto">
                        <table className='w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400'>
                          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Id
                              </th>
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Product Title
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Image
                              </th>
                        
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Quantity
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Price
                              </th>
                            
                              <th scope='col' class='px-6 py-3 whitespace-nowrap'>
                                Sub Total
                              </th>              
                            </tr>
                          </thead>

                        <tbody>
                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>


                          <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>PRD123456789 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-500'>ALAWO Faux Leather Watch Box 
                                </span>
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                <img className='w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md' src='/img-products/img-product-3.webp' alt='Product-thumb- Image' />
                              </td>

                              <td className="px-6 py-4 font-[500]">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                &#8377; 4999.00
                              </td>
                              <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                              &#8377; 4999.00
                              </td>


                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </td>
                    
                </tr>
                
                )
                
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</div>
</section>
  )
}

export default Orders