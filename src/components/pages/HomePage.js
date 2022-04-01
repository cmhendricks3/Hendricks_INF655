import React from 'react';
import AddTask from '../Tasks/AddTask';
import Tasks from '../Tasks/Tasks';
import Header from './Header';
import Footer from './Footer';

export default function HomePage() {
    return (
    <>
    <Header/>
    <div className="container">
        <AddTask />
        <Tasks/>
    </div>
    <Footer/>
    </>
    );
}
