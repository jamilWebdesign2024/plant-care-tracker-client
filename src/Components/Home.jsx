import React, { Suspense } from 'react';
import Banner from './Banner';
import NewPlant from '../Pages/NewPlant';
import { useLoaderData } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import TopPlantMistakes from '../Pages/TopPlantMistakes';
import FriendlyPlant from '../Pages/FriendlyPlant';

const Home = () => {

    const data =useLoaderData();
    
    const friendlyPromise = fetch('./friendlyPlant.json')
    .then(res=>res.json());

    // console.log(friendlyPromise);
    

    const plantPromise = fetch('./topPlanMistakes.json')
    .then(res=>res.json());
    
    // console.log(data);
    


    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <NewPlant data={data}></NewPlant>
            <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
                <FriendlyPlant friendlyPromise={friendlyPromise} key={friendlyPromise.id}></FriendlyPlant>
            </Suspense>

            <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
                <TopPlantMistakes plantPromise={plantPromise} key={plantPromise.id}></TopPlantMistakes>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Home;

