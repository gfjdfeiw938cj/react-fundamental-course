import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton';

function App() {
    // const [isAuth, setIsAuth] = useState(false);
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (localStorage.getItem('auth')) {
    //         setIsAuth(true)
    //     }
    //     setLoading(false);
    // }, [])

    const [posts, setPosts] = useState([  
        {id: 1, title: "Зеленый", body: 'Desription'},
        {id: 2, title: "Красный", body: 'Desription'},
        {id: 3, title: "Синий", body: 'Desription'}
    ]);
   

    return (
      <div className='App'>
        <form>
           <input type='text' placeholder='Название поста'/>
           <input type='text' placeholder='Описание поста'/>
           <MyButton disabled>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title='Посты'/>
      </div> 
    )
}

export default App;
