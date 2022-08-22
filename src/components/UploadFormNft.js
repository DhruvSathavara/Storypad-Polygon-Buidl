// import React, { useState, useEffect } from "react";
// import { mintParentContract } from "../config";
// import ContractABI from "../abi/mintContractParent.json";
// import { ethers } from "ethers";
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
// import { v4 as uuidv4 } from "uuid";
// require("dotenv").config({ path: "./.env" });

// // const currentUser = Moralis.User.current();
// // console.log(currentUser,"current user");
// function UploadFormNft() {
//   const pk_1 = process.env.REACT_APP_PRIVATE_KEY;
//   //storyPad
//   const [authorname, setAuthorname] = useState("");
//   const [symbol, setSymbol] = useState("");
//   const [tokenPrice, setTokenPrice] = useState("");
//   const [tokenQuantity, setTokenQuantity] = useState("");
//   const [noNFT, setNoNFT] = useState("");
//   const [loading, setLoading] = useState(false);

//   const API_Token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTk2ODIzNzc0NDUsIm5hbWUiOiJzdG9yeXBhZCJ9.YBGPQ1JxGs17x5IQ09mPazz85Fv07PK6puQmvhKxHCQ";
//   const client = new Web3Storage({ token: API_Token });
//   //---//
//   const notify = () => toast("NFTs are uploaded!");
//   //StoryPad
//   const authorNameEvent = (e) => {
//     setAuthorname(e.target.value);
//   };
//   const tokenPriceEvent = (e) => {
//     setTokenPrice(e.target.value || null);
//   };
//   const tokenQuantityEvent = (e) => {
//     setTokenQuantity(e.target.value);
//   };
//   const symbolEvent = (e) => {
//     setSymbol(e.target.value);
//   };
//   //--------------
//   async function onFormSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setAuthorname("");
//     setTokenPrice("");
//     setTokenQuantity("");
//     setSymbol("");
//     console.log(Item, "form submit");

//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const address = accounts[0];
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const signature = await signer.signMessage(address);
//     console.log(signature, "signture from onFormClick button");
//     const storyMintContract = new ethers.Contract(
//       mintParentContract,
//       ContractABI.abi,
//       signer
//     );
//     var options = {
//       gas: 2100000, gasPrice: 8000000000, value: tokenPrice
//     };
//     let wei;
//     let transaction = await storyMintContract.createToken(authorname, symbol);
//     console.log(transaction, "createToken");
//     let tx = await transaction.wait();
//     console.log(tx, "tx");
//     let event = tx.events[0];
//     console.log(event, "Event");
//     // let tokenContractAddress = event?.address;
//     let tokenContractAddress = event.args[1];
//     console.log(tokenContractAddress, "TokenContractAddress");
//     await storyMintContract.bulkMintERC721(
//       address,
//       tokenContractAddress,
//       0,
//       tokenQuantity,
//       parseInt(tokenPrice)
//     );
//     setLoading(false);

//   }
//   let Item = {
//     authorname: authorname,
//     tokenPrice: tokenPrice,
//     tokenQuantity: tokenQuantity,
//     symbol: symbol,
//   };
//   return (
//     <div
//       style={{ backgroundColor: "#faf7f8", marginTop: "10%" }}
//       className="col"
//     >
//       <div className="form-style-2 offset-4 row-8">
//         <div className="form-style-2-heading">Add NFT Readership from here</div>
//         <form action="" method="" onSubmit={onFormSubmit}>
//           <label for="field1">
//             <span>
//               Name <span className="required">*</span>
//             </span>
//             <input
//               value={authorname}
//               onChange={authorNameEvent}
//               placeholder="Your name"
//               type="text"
//               class="input-field"
//               name="field1"
//             />
//           </label>{" "}
//           <br />
//           <label for="field1">
//             <span>
//               Symbol<span className="required">*</span>
//             </span>
//             <input
//               value={symbol}
//               onChange={symbolEvent}
//               placeholder="Enter symbol"
//               type="text"
//               class="input-field"
//               name="field1"
//             />
//           </label>{" "}
//           <br />
//           {/* <label for="field4"><span>Not NFT holder</span><select value={category} name="field4" onChange={(e)=>setNoNFT(e.target.value)} className="select-field">
//                         <option defaultChecked defaultValue="free" value="free">Post story for free</option>
//                         <option value="charge">Documents</option>
//                     </select></label> */}
//           <label for="field1">
//             <span>
//               tokenPrice <span className="required">*</span>
//             </span>
//             <input
//               value={tokenPrice}
//               onChange={tokenPriceEvent}
//               placeholder="Enter a token price"
//               type="text"
//               class="input-field"
//               name="field1"
//             />
//           </label>{" "}
//           <br />
//           <label for="field1">
//             <span>
//               tokenQuantity<span className="required">*</span>
//             </span>
//             <input
//               value={tokenQuantity}
//               onChange={tokenQuantityEvent}
//               placeholder="Enter quantity"
//               type="text"
//               class="input-field"
//               name="field1"
//             />
//           </label>
//           <input
//             type="submit"
//             // {loading ? "Loading...." : value = "Submit"}

//             value={loading ? "Loading...." : "Submit"}
//             style={{ backgroundColor: "#D82148", marginLeft: "120px" }}
//             onClick={notify}
//             disabled={loading}

//           />
//           < ToastContainer />

//         </form>
//       </div>
//     </div>
//   );
// }
// export default UploadFormNft;
// // export default UploadFormNft;



import React, { useState, useEffect } from "react";
import { mintParentContract } from "../config";
import ContractABI from "../abi/mintContractParent.json";
import childConABI from "../abi/mintContract.json"
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
import { v4 as uuidv4 } from "uuid";
import { create } from "ipfs-http-client";
import { useMoralis, useMoralisQuery } from "react-moralis";
import axios from "axios";
import { renderToStaticMarkup } from "react-dom/server";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

require("dotenv").config({ path: "./.env" });



function UploadFormNft() {
  const { Moralis } = useMoralis();



  const getnftData = Moralis.Object.extend("nftMetadata");
  const nftData = new getnftData();

  const [authorname, setAuthorname] = useState("");
  const [symbol, setSymbol] = useState("");
  const [tokenPrice, setTokenPrice] = useState("");
  const [tokenQuantity, setTokenQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const API_Token = process.env.REACT_APP_API_TOKEN;
  const client = new Web3Storage({ token: API_Token })

  const notify = () => toast("Succesfuly created nft!");



  const authorNameEvent = (e) => {
    setAuthorname(e.target.value);
  };
  const tokenPriceEvent = (e) => {
    setTokenPrice(e.target.value || null);
  };

  const tokenQuantityEvent = (e) => {
    setTokenQuantity(e.target.value);
  };
  const symbolEvent = (e) => {
    setSymbol(e.target.value);
  };
  //--------------IPFS TOKENID TO IMAGE  -----------//
  const projectId = process.env.REACT_APP_INFURA_PROJECT_KEY;

  const projectSecret = process.env.REACT_APP_INFURA_APP_SECRET_KEY;

  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const ifpsConfig = {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  };


  const ipfs = create(ifpsConfig);
  const addDataToIPFS = async (metadata) => {
    const ipfsHash = await ipfs.add(metadata);
    console.log(ipfsHash.cid, "IPFSHash cid");
    console.log(ipfsHash.path, "IPFSHash path");
    return ipfsHash.path;
  };
  const createSvgFromText = (text) => {
    const imgSVG = (
      <svg
        id="mysvg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 350 350"
        fill="#FFC059"
      >
        <rect width="200%" height="80%" fill="black" />
        <text
          x="50%"
          y="25%"
          textAnchor="middle"
          style={{ fontFamily: "Gochi Hand, cursive", fontSize: "28px" }}
        >
          <tspan x="50%" dy="1.2em">
            {text}
          </tspan>
        </text>
      </svg>
    );
    return renderToStaticMarkup(imgSVG);
  };


  const convertSVGToBuffer = async (svgElement) => {
    const svgBuffer = Buffer.from(svgElement);
    return svgBuffer;
  };

  async function onFormSubmit(e) {

    e.preventDefault();
    setLoading(true);
    setAuthorname("");
    setTokenPrice("");
    setTokenQuantity("");
    setSymbol("");
    console.log(Item, "form submit");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(address);
    console.log(signature, "signture from onFormClick button");
    const storyMintContract = new ethers.Contract(
      mintParentContract,
      ContractABI.abi,
      signer
    );
    setLoading(false);
    let transactionCreate = await storyMintContract.createToken(authorname, symbol);
    console.log(transactionCreate, "createToken");
    let txc = await transactionCreate.wait();
    if (txc) {
      setLoading(false);
      console.log(txc, "Successfully created!");
    }
    let event = txc.events[0];
    console.log(event, "Event");
    // let tokenContractAddress = event?.address;
    let tokenContractAddress = event.args[1];
    nftData.set("tokenContractAddress", tokenContractAddress);
    nftData.set("CurrentUser", event.args[0])


    setLoading(true);

    let transactionBulkMint = await storyMintContract.bulkMintERC721(
      address,
      tokenContractAddress,
      0,
      tokenQuantity,
      parseInt(tokenPrice),
    );
    let txa;

    let txb = await transactionBulkMint.wait();
    if (txb) {
      setLoading(false);


    }


    let tokenCount = await storyMintContract.getCountValue();



    let tokenIds = await storyMintContract.getAllTokenId(tokenContractAddress);

    let tokenIdArr = [];
    let filesArr = [];
    let imageArr = [];
    tokenIds.map(async (tokenId) => {
      tokenIdArr.push(parseInt(tokenIds.toString()));
      const imgSVG = createSvgFromText(tokenId.toString());
      console.log(imgSVG, "imgSVG")
      const svgImg = await convertSVGToBuffer(imgSVG);
      const ipfsHash = await addDataToIPFS(svgImg);
      console.log(ipfsHash, "ipfsHash from addDataToIPFS function");

      const imageUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
      imageArr.push({ imageUrl: imageUrl, tokenId: tokenId.toString() });
      console.log(imageArr, "imageArr");
      const blob = new Blob(

        [

          JSON.stringify({

            authorname,

            symbol,

            tokenPrice,

            tokenQuantity,

            imageUrl

          }),
        ],
        { type: "application/json" }
      );
      const files = [
        new File([blob], "data.json"),
      ];
      const path = await addDataToIPFS(files[0]);
      const uri = `https://ipfs.io/ipfs/${path}`;
      console.log(uri);
      filesArr.push(uri);
      nftData.set("authorName", authorname);
      nftData.set("symbol", symbol);
      nftData.set("tokenPrice", tokenPrice);
      nftData.set("tokenQuantity", tokenQuantity);
      nftData.set("imageArr", imageArr);
      nftData.save();

    })
    console.log(filesArr, "filesArr");

    //   await storyMintContract.bulkSetURI(
    //   tokenContractAddress,
    //   tokenIdArr,
    //   0,
    //   tokenIdArr.length,
    //   filesArr
    //  )
    setLoading(false);
  }

  let Item = {
    authorname: authorname,
    tokenPrice: tokenPrice,
    tokenQuantity: tokenQuantity,
    symbol: symbol,
  };

  // const notify = () => toast("NFTs are uploaded!");

  return (
    <div
      style={{ backgroundColor: "#faf7f8", marginTop: "10%" }}
      className="col"
    >
      <div className="form-style-2 offset-4 row-8">
        <div className="form-style-2-heading">Add NFT Readership from here</div>
        <form action="" method="" onSubmit={onFormSubmit}>
          <label for="field1">
            <span>
              Name <span className="required">*</span>
            </span>
            <input
              value={authorname}
              onChange={authorNameEvent}
              placeholder="Your name"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>{" "}
          <br />
          <label for="field1">
            <span>
              Symbol<span className="required">*</span>
            </span>
            <input
              value={symbol}
              onChange={symbolEvent}
              placeholder="Enter symbol"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>{" "}
          <br />

          {/* <label for="field4"><span>Not NFT holder</span><select value={category} name="field4" onChange={(e)=>setNoNFT(e.target.value)} className="select-field">
                        <option defaultChecked defaultValue="free" value="free">Post story for free</option>
                        <option value="charge">Documents</option>

                    </select></label> */}

          <label for="field1">
            <span>
              tokenPrice <span className="required">*</span>
            </span>
            <input
              value={tokenPrice}
              onChange={tokenPriceEvent}
              placeholder="Enter a token price"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>{" "}
          <br />
          <label for="field1">
            <span>
              tokenQuantity<span className="required">*</span>
            </span>
            <input
              value={tokenQuantity}
              onChange={tokenQuantityEvent}
              placeholder="Enter quantity"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>
          <input
            type="submit"
            value={loading ? "Loading...." : "Submit"}
            style={{ backgroundColor: "#D82148", marginLeft: "120px" }}

            onClick={notify}
            disabled={loading}

          />
          < ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default UploadFormNft;
