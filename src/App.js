import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UploadForm from './components/UploadForm';
import BookList from './components/ListingPage/BookList';
import BookDetail from './components/DetailsPage/BookDetail';
import DocumentList from './components/ListingPage/DocumentList';
import NewspaperList from './components/ListingPage/NewspaperList'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WebsiteList from './components/ListingPage/WebsitesList';
import DocumentDetail from './components/DetailsPage/DocumentDetail';
import NewsDetail from './components/DetailsPage/NewsDetail';
import WebsiteDetail from './components/DetailsPage/WebsiteDetail';
import Profile from './components/Profile/Profile';
import UploadFormNft from './components/UploadFormNft';
//Listing
import StoryList from './components/ListingPage/StoryList'
import Fantasy from './components/ListingPage/StoryPadList/Fantasy';
import Historical from './components/ListingPage/StoryPadList/Historical'
import Horror from './components/ListingPage/StoryPadList/Horror'
import Mystery from './components/ListingPage/StoryPadList/Mystery'
import NewAdult from './components/ListingPage/StoryPadList/New adult'
import Paranormal from './components/ListingPage/StoryPadList/Paranormal'
import Romance from './components/ListingPage/StoryPadList/Romance'
import ScienceFiction from './components/ListingPage/StoryPadList/Science fiction'
import Sequels from './components/ListingPage/StoryPadList/Sequels'
import WildCard from './components/ListingPage/StoryPadList/Wild card'
import YoungAdult from './components/ListingPage/StoryPadList/Young adult'
import Fanfiction from './components/ListingPage/StoryPadList/Fanfiction'
// Detail Page
import StoryDetail from './components/DetailsPage/StoryDetail'
import HorrorDetail from './components/DetailsPage/StoryDetail/HorrorDetail';
import FantasyDetail from './components/DetailsPage/StoryDetail/FantasyDetail';
import HistoricalDetail from './components/DetailsPage/StoryDetail/HistoricalDetail';
import MysteryDetail from './components/DetailsPage/StoryDetail/MysteryDetail';
import NewAdultDetail from './components/DetailsPage/StoryDetail/NewAdultDetail';
import ParanormalDetail from './components/DetailsPage/StoryDetail/ParanormalDetail';
import RomanceDetail from './components/DetailsPage/StoryDetail/RomanceDetail';
import ScienceFictionDetail from './components/DetailsPage/StoryDetail/ScienceFictionDetail';
import SequelsDetail from './components/DetailsPage/StoryDetail/SequelsDetail';
import WildCardDetail from './components/DetailsPage/StoryDetail/WildCardDetail';
import YoungAdultDetail from './components/DetailsPage/StoryDetail/YoungAdultDetail';
import FanfictionDetail from './components/DetailsPage/StoryDetail/FanfictionDetail';

import NftReadership from './components/NftReadership/NftReadershipList'
import NftReadershipDetail from './components/NftReadershipDetail/NftReadershipDetail'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-form" element={<UploadForm />} />

        <Route path="/book-detail/:id" element={<BookDetail />} />

        <Route path="/doc-detail/:id" element={<DocumentDetail />} />
        <Route path="/news-detail/:id" element={<NewsDetail />} />
        <Route path="/web-detail/:id" element={<WebsiteDetail />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/documents-list" element={<DocumentList />} />
        <Route path="/newspapers-list" element={<NewspaperList />} />
        <Route path="/websites-list" element={<WebsiteList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nft-upload" element={<UploadFormNft />} />

        {/* Storypad List */}
        <Route path="/storylist" element={<StoryList />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/historical" element={<Historical />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/newadult" element={<NewAdult />} />
        <Route path="/paranomal" element={<Paranormal />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/sciencefiction" element={<ScienceFiction />} />
        <Route path="/sequels" element={<Sequels />} />
        <Route path="/wildcard" element={<WildCard />} />
        <Route path="/youngadult" element={<YoungAdult />} />
        <Route path="/fanfiction" element={<Fanfiction />} />


        {/* Storypad Detail */}

        <Route path="/storydetail" element={<StoryDetail />} />

        <Route path="/fantasy-detail/:id" element={<FantasyDetail />} />
        <Route path="/historical-detail/:id" element={<HistoricalDetail />} />
        <Route path="/horror-detail/:id" element={<HorrorDetail />} />
        <Route path="/mystery-detail/:id" element={<MysteryDetail />} />
        <Route path="/newadult-detail/:id" element={<NewAdultDetail />} />
        <Route path="/paranomal-detail/:id" element={<ParanormalDetail />} />
        <Route path="/romance-detail/:id" element={<RomanceDetail />} />
        <Route path="/sciencefiction-detail/:id" element={<ScienceFictionDetail />} />
        <Route path="/sequels-detail/:id" element={<SequelsDetail />} />
        <Route path="/wildcard-detail/:id" element={<WildCardDetail />} />
        <Route path="/youngadult-detail/:id" element={<YoungAdultDetail />} />
        <Route path="/fanfiction-detail/:id" element={<FanfictionDetail />} />

        <Route path="/readership-nft" element={<NftReadership />} />
        <Route path="/readership-nft-detail" element={<NftReadershipDetail />} />
 
      </Routes>
      <Footer />
      {/* <BookList></BookList> */}
      {/* <BookDetail></BookDetail> */}
    </div>
  );
}

export default App;