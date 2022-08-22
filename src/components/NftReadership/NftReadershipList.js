import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMoralis, useMoralisQuery } from "react-moralis";

function NftReadership() {
  const { Moralis } = useMoralis();
  const query = new Moralis.Query("nftMetadata");

  // const object = await query.first();
  //const user = object.attributes.CurrentUser;
  //const name = object.attributes.authorName;

  // var fs = require('fs');
  // let collection = [];
  // const[collectionData, setCollectionData] = useState([])

  // useEffect(() => {
  //   async function displayNFT() {
  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });

  //     const address = accounts[0];
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const storyMintContract = new ethers.Contract(
  //       mintParentContract,
  //       ContractABI.abi,
  //       signer
  //     );
  //     const tokenData = await storyMintContract.getAll();
  //     console.log(tokenData, "tokenData");

  //     for (let i = 0; i < tokenData.length; i++) {
  //       const storyContract = new ethers.Contract(
  //         tokenData[i],
  //         ChildContractAbi.abi,
  //         signer
  //       );
  //       let obj = {};
  //       obj.name = await storyContract.name();
  //       obj.uri = await storyContract.tokenURI(0);    
  //       collection.push(obj);
  //     }
  //     console.log(collection, "collection");
  //     collection.map((obj) => {

  // const base64toBlob = (data, type) => {
  //   // Cut the prefix `data:application/pdf;base64` from the raw base 64
  //   const base64WithoutPrefix = data.substr(`data:${type};base64,`.length);
  //   const bytes = window.atob(base64WithoutPrefix);
  //   let length = bytes.length;
  //   let out = new Uint8Array(length);
  //   while (length--) {
  //     out[length] = bytes.charCodeAt(length);
  //   }
  //   return new Blob([out], { type: "json/plain" });
  // };
  // const blob = base64toBlob( obj.uri, "json/plain");
  // const url = URL.createObjectURL(blob);
  // console.log(url, "URI");
  // let buff =  Buffer(obj.uri);
  // let b64string = buff.toString('base64');

  // const decode = Buffer.from(b64string, 'base64');

  //   const decode = Buffer.from(obj.uri, 'base64').toString("utf-8")
  //   console.log(obj.uri, "uri")
  // const decode = fs.readFileSync(obj.uri,{decoding:"utf8"})
  //       console.log(decode)

  //       fetch(decode)
  //       .then(res => res.blob())
  //       .then(console.log)

  //       console.log(obj.name, "name") 
  //     });
  //     setCollectionData(collection)
  //   }

  //   displayNFT();
  // }, []);

  const { data } = useMoralisQuery("nftMetadata");



  return (

    <div style={{ marginTop: "120px" }} className="container">
      <h1>Explore collections</h1>
      {
        data.map((obj) => {
          return (

            <div className="row">
              <div className="col-md-3 col-sm-6">
                <li key={obj.attributes.imageArr[0].tokenId}>

                  <Link to={`/readership-nft-detail/${obj.attributes.CurrentUser}`}>
                    <div className="card-readership card-block">
                      <h4 className="card-title-readership text-right"></h4>




                      <img
                        className="Nft-img"
                        src={obj.attributes.imageArr[0].imageUrl}
                        alt="NFT Image"
                      />
                      <h1 className="card-title-readership "> {obj.attributes.authorName}'s collection </h1>



                    </div>
                  </Link>
                </li>
              </div>
            </div>
          )
        })
      }
    </div>

  );
}
export default NftReadership;