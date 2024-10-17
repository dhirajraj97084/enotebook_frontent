import React from 'react'
import Layout from '../../components/layout/Layout'
import NotesCard from '../../components/noteCard/NoteCard'

function Home() {
  return (
    <Layout >
     <div className=" bg-gray-300">
     <NotesCard/>
     </div>
    </Layout>
  )
}

export default Home
