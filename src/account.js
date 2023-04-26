import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Account() {
  const [data, setData] = useState([]);
  const [result1, setResult1] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "connect.sid=s%3AZ8QULJG928GIGdx6Hd-5IHJXlAiqEgff.T8RlXKY1TEl2Y%2FIvX9MO%2FH%2BSEFv3B4NjyFl1lODXeNw"
  );

  var raw = JSON.stringify({
    customerAccessToken: "8886da46b9c1fb526efecb9943e717a3",
    count: 1,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://shopify6.interplay.iterate.ai/customer", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.data.customer);
        fetch("https://shopify6.interplay.iterate.ai/customerAddressList", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: raw,
        })
          .then((result2) => result2.json())
          .then((result2) => {
            console.log("resss===", result2);
            setResult1(result2.data.customer.defaultAddress);
          });
      })
      .catch((error) => console.log("error", error));
  }, []);

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
      First Name : {data.firstName}
      <br></br>Last Name : {data.lastName}
      <br></br>Email : {data.email}
      <br></br>Phone : {data.phone}

      <h1>Default Address</h1>
      {result1.firstName}
      <br></br>{result1.lastName}
      <br></br>{result1.address1}
      <br></br>{result1.address2}
      <br></br>{result1.city}
      <br></br>{result1.country}
      <br></br>{result1.province}
      <br></br>{result1.provinceCode}
      <br></br>{result1.zip}
      <br></br>{result1.phone}
      <br></br>{result1.formatted}
    </div>
  );
}

export default Account;
