import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Blob, Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { useParams } from 'react-router-dom';


export default function ModalContribute(props) {
  const { Moralis, isAuthenticated, isInitialized } = useMoralis();
  console.log(props.e, 'e in Modal')
  const params = useParams();

  const API_Token = process.env.REACT_APP_WEB3STORAGE_TOKEN;
  const client = new Web3Storage({ token: API_Token })

  const reviews = Moralis.Object.extend("Reviews");
  const reviewsData = new reviews();

  const [allReviews, setAllReviews] = useState([]);
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  function PriceSet() {
    setPrice(props.e.element.Nonholder_price)
  }
  // console.log(props.e.element.Nonholder_price, 'price in modal');

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    PriceSet();
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function onAddClick(e) {
    e.preventDefault();
    setLoading(true)
    let transaction = await TransferEth();

    if (transaction) {
      setLoading(false);
      setOpen(false)
    }
  }

  const TransferEth = async () => {
    await Moralis.enableWeb3();
    const options = {
      type: "native",
      amount: Moralis.Units.ETH(price, "18"),
      receiver: props.walletAddress,
      contractAddress: "0x0000000000000000000000000000000000001010",
    }
    let result = await Moralis.transfer(options);
    let tx = result.wait();
    return tx;
    
  }
  return (
    <div style={{ display: "contents" }}>
      <button type="button" onClick={handleClickOpen} class="btn btn-outline-danger buy-story-btn">Buy Story</button>
 
      <Dialog style={{ widht: "400px" }} open={open} onClose={handleClose}>
        <DialogTitle>Buy Story</DialogTitle>
        <div className='dialogUnderline'></div>
        <DialogContent>
          <h3>
            Your Price
          </h3>

          <TextField
            autoFocus
            disabled
            value={price}
            margin="dense"
            className="ETH-amount"
            label="MATIC"
            type="number"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onAddClick} disabled={loading}> {loading ? "Loading...." : "Pay"} </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}