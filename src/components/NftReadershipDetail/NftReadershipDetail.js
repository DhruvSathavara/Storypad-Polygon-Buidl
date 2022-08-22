import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useParams } from 'react-router-dom';
import { mintParentContract } from "../../config";
import ContractABI from "../../abi/mintContractParent.json";
import ContractChildABI from "../../abi/mintContract.json";
import { ethers } from "ethers";
import web3 from "web3";

function NftReadershipDetail() {

  const { address } = useParams()
  const { Moralis, isInitialized } = useMoralis();
  let results = [];

  const [resultData, setResultData] = useState([]);
  const [imageURls, setImageURLs] = useState([]);
  const [tokenId, setTokenId] = useState([]);
  const [tokenAddress, setTokenAddress] = useState();
  const [authorData, setAuthorData] = useState();
  let tokenIds = [];

  useEffect(() => {
    const getAuthorCollection = async () => {


      const storyPad = Moralis.Object.extend("nftMetadata");
      const query = new Moralis.Query(storyPad);
      query.equalTo("CurrentUser", address);
      const objects = await query.first()
      results.push(objects);

      console.log(results, "results");
      results.map((obj) => {
        setAuthorData(obj.attributes)
        let images = [];
        images = obj.attributes.imageArr;
        const address = obj.attributes.tokenContractAddress;
        setTokenAddress(address);
        setImageURLs(images);
      });
      setResultData(results);


    }
    if (isInitialized) {
      getAuthorCollection()

    }

  }, [])

  const buyMarketItem = async (tokenID) => {

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const storyMintContract = new ethers.Contract(
      mintParentContract,
      ContractABI.abi,
      signer
    );
    console.log(storyMintContract, "contractObj");


    const price = authorData && authorData.tokenPrice * (100 + 2) / 100;
    console.log(price, "price");
    console.log(parseInt(tokenID));
    console.log(web3.utils.toWei(price.toString(), "ether"), "wei");

    // const childContract = new ethers.Contract(
    //   tokenAddress,
    //   ContractChildABI.abi,
    //   signer
    // );

    // let transactionApprove = await childContract.approve(,  parseInt(tokenID.toString()));
    // let txa = transactionApprove.wait();
    await storyMintContract.callPurchaseItem(parseInt(tokenID), tokenAddress, { value: ethers.utils.parseUnits(price.toString(), "ether") })

    // if(txa){

    // }

    // if(txa){

    // }
  }
  return (

    // console.log(obj.attributes.authorName,"obj")


    <div style={{ marginBottom: "0px" }} className="app-container">

      {resultData.map((obj) => {
        return (


          <>

            <div className="profile-layout">
              <header className="background background-lg" style={{ backgroundColor: "#4b2caa" }}>
                <div className="avatar avatar-profile center-block">
                  <Avatar name="Foo Bar" round={true} />
                </div>
                <div className="badges">

                  <h1 className="profile-name h3">{obj.attributes.authorName}</h1>
                </div>
              </header>

            </div>


            <div style={{ marginTop: "62px" }} className="container">
              {imageURls.map((img) => {
                return (
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="card-readership-detail card-block">
                        <h4 className="card-title-readership text-right"></h4>
                        <img className="Nft-img" src={img.imageUrl} alt="Photo of sunset" />
                        <h5 className="card-title-readership mt-3 mb-3"> {img.tokenId} {obj.attributes.symbol}</h5>

                        <button type="button" class="btn btn-outline-success" onClick={() => {
                          buyMarketItem(img.tokenId)
                        }}>Buy for {obj.attributes.tokenPrice} MATIC</button>
                      </div>
                    </div>


                  </div>
                )
              })}
            </div>

          </>
        )
      })
      }
    </div>




  )
}
export default NftReadershipDetail;