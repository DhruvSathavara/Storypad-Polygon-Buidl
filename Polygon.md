

## Polygon

https://github.com/DhruvSathavara/Storypad-Polygon-Buidl/blob/master/contracts/mintContractParent.sol

```

function createToken(string memory name, string memory symbol) public {
        address _address = address(new mintContract(name, symbol)); // Created Token contract.
         tokenNames[_address] = name;
        emit TokenCreated(msg.sender, _address);
    }
    function bulkMintERC721(
        address mintor,
        address tokenAddress,
        uint256 start,
        uint256 end,
        uint256 price
    ) public {
        for (uint256 i = start; i < end; i++) {
            mintContract(tokenAddress).safeMint(mintor , price, tokenNames[tokenAddress]);
        }
    }

```
