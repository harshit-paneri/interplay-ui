import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'



function Account(){

    const [data, setData]=useState([]);
    const [result1, setResult1]=useState([]);
    
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "connect.sid=s%3AZ8QULJG928GIGdx6Hd-5IHJXlAiqEgff.T8RlXKY1TEl2Y%2FIvX9MO%2FH%2BSEFv3B4NjyFl1lODXeNw");

var raw = JSON.stringify({
  "customerAccessToken": "8886da46b9c1fb526efecb9943e717a3",
  "count" : 1
});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      useEffect(()=>{
        
        
        fetch("https://shopify6.interplay.iterate.ai/customer", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);setData(result.data.customer)
    fetch("https://shopify6.interplay.iterate.ai/customerAddressList", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: raw
    }).then(result2=>result2.json()).then(result2=>{console.log('resss===',result2);setResult1(result2.data.customer.defaultAddress)})
    
})
  .catch(error => console.log('error', error));
     
},[])
    
    // useEffect(()=>{
    //     async function fetchData() {
    //         let product =await fetch("https://shopify6.interplay.iterate.ai/customer", {
    //                             method: "POST",
    //                             headers: {"Content-type": "application/json"},
    //                             body: JSON.stringify({
    //                                 customerAccessToken : "8886da46b9c1fb526efecb9943e717a3"
    //                             })
    //                         });
    //         let result = await product.json();
    //         setData(result);
    //       }
    //       fetchData();
        
    // },[])
    // console.warn(data);
    return (
        <div>
            <h1>Account Details</h1>
            <Table>
                    <tr>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{result1.address1}</td>
                    </tr>
            </Table>
            <h1>Default Address</h1>
            <Table>
                    <tr>
                    <td>{result1.firstName}</td>
                    <td>{result1.lastName}</td>
                    <td>{result1.address1}</td>
                    <td>{result1.address2}</td>
                    <td>{result1.city}</td>
                    <td>{result1.country}</td>
                    <td>{result1.province}</td>
                    <td>{result1.provinceCode}</td>
                    <td>{result1.zip}</td>
                    <td>{result1.phone}</td>
                    </tr>
            </Table>
            
        </div>
    )
}

export default Account;