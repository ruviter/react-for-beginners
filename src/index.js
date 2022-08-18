import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Movie from './routes/movie';


const root = createRoot(document.querySelector('#root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path=':movieId' element={<Movie />} />
            <Route path='*' element={<div>nothing!</div>} />
        </Routes>
    </BrowserRouter>
)
