import React, { useState, useEffect } from 'react'
import './Feed.css'
import InputOption from '../InputOptions/InputOption'
import { Create, Image, Subscriptions, EventNote, CalendarViewDay } from '@material-ui/icons'
import FlipMove from 'react-flip-move'

import Post from '../Post/Post'
import 'firebase/compat/app'
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

const Feed = () => {
   const user = useSelector(selectUser)
   const [input, setInput] = useState('')
   const [posts, setPosts] = useState([])

   const fetchPosts = async () => {
      const response = collection(db, 'posts')
      const orderRes = query(response, orderBy('timestamp', 'desc'))
      const data = await getDocs(orderRes)
      setPosts(
         data.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
         }))
      )
   }

   const addDocuments = async () => {
      try {
         const docRef = await addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user?.photoURL || '',
            timestamp: serverTimestamp(),
         })
         console.log('Document written with ID: ', docRef.id)
      } catch (error) {
         console.error('Error adding document: ', error)
      }
   }

   useEffect(() => {
      fetchPosts()
   }, [posts])

   const sendPost = (e) => {
      e.preventDefault()

      addDocuments()
      setInput('')
   }

   return (
      <div className="feed">
         <div className="feed__inputContainer">
            <div className="feed__input">
               <Create />
               <form>
                  <input
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     type="text"
                     placeholder="Start a post"
                  />
                  <button onClick={sendPost} type="submit">
                     Send
                  </button>
               </form>
            </div>
            <div className="feed__inputOptions">
               <InputOption Icon={Image} title="Photo" color="#70B5F9" />
               <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
               <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
               <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
            </div>
         </div>

         {/* post */}

         <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
               <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
            ))}
         </FlipMove>

         {/* <Post name="Mike Mikey" description="this is a test" message="yeay everting works" /> */}
      </div>
   )
}

export default Feed
