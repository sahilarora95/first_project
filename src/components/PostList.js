import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props){
         super(props)

         this.state={
             posts: []
         }
     }

     componentDidMount(){
         //axios.get('https://jsonplaceholder.typicode.com/posts')
         axios.get('https://www.getpostman.com/collections/66c45e6146e3d7cbe41b')
         //axios.get('https://stgnandghar.dhwaniris.in/index.php/api')
         .then(response => {
             console.log(response)
             this.setState({posts: response.data})
         })
         .catch(error => {
             console.log(error)
         })
     }
    render() {
        const{ posts } = this.state;
        return (
            <div>
                List 
            {
                posts.length ?
                posts.map(post => <div key={post.id}> {post.data}</div>):
                null    
            }
                
            </div>
        )
    }
}

export default PostList
