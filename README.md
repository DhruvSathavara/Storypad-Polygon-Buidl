# StoryPad

 ### Storypad is a Token Gated community of Readers and Writers where writers can share their stories, charge fees to give access to a digital copy, and give special access to readers having their NFT membership.
 
 

![MicrosoftTeams-image (10)](https://user-images.githubusercontent.com/69969675/185176948-94696ba7-f5aa-468c-a2a3-8f1e81b71267.png)


## Write Story

A writer can add a story by filling up this form. A writer needs to share an introduction of the story and then for the rest of the content writer can decide whether they want to post it for free or want to charge readers to give access to the full story.

Here writer can also choose to give a special discount or give free access to all the NFT holders.


![MicrosoftTeams-image (13)](https://user-images.githubusercontent.com/69969675/185178807-3678781a-0cde-4b25-a38f-a981eefa2ec8.png)


![Screenshot 2022-08-18 at 10 34 59 AM](https://user-images.githubusercontent.com/69969675/185301178-f2e551f8-948b-4079-95ee-10ad92165bc8.png)



## NFT Readership

NFT Readership is a kind of membership where only specific number of readers will get a chance to support the writer by purchasing NFT to be part of the Writer's Reader Club.

![Screenshot 2022-08-17 at 8 56 17 PM](https://user-images.githubusercontent.com/69969675/185179514-0f260cbc-b274-4fb7-940b-7881b8252a82.png)




## Screen shots


![MicrosoftTeams-image (11)](https://user-images.githubusercontent.com/69969675/185179850-57552f27-1552-408b-95a0-2eef897e0f8a.png)


![MicrosoftTeams-image (15)](https://user-images.githubusercontent.com/69969675/185179875-79a458db-47bd-45a7-8fe8-a099d182992b.png)


![Screenshot 2022-08-17 at 8 58 45 PM](https://user-images.githubusercontent.com/69969675/185180091-d0ef58eb-acb9-4e0c-b03e-8af970057ff4.png)



## IPFS & Filecoin

https://github.com/Disha1998/Story_Pad/blob/master/Filecoin.md

```
  
    function addData(Item) {
        const blob = new Blob(
            [
                JSON.stringify(Item),
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "story.json"),
        ];
        console.log('files==>', files);
        return files;

    }


    async function storeFiles(Item) {

        StoryPad.set('Currunt_user', user);
        let files = addData(Item);
        const cid = await client.put(files);
        StoryPad.set("CID", cid);
        StoryPad.save();

        console.log("files with cid ==>", ` https://dweb.link/ipfs/${cid}/story.json`);

        return cid;
    }


```


## Polygon


https://github.com/Disha1998/Story_Pad/blob/master/Polygon.md

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

WAGMI 🚀 
