import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionBlog from './components/QuestionBlog/QuestionBlog'

function App() {
  

  return (
    <div className="App">
        <Header></Header>
        <hr/>
        <Blog></Blog>
        <ToastContainer></ToastContainer>
        <QuestionBlog></QuestionBlog>
    </div>
  )
}

export default App
