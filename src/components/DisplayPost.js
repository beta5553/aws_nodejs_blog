import React, { Component } from "react"
import { listPosts } from "../graphql/queries"
import { API, graphqlOperation, JS } from "aws-amplify"

class DisplayPost extends Component {

    state = {
        posts: []
    }

    componentDidMount =  async () => {
        this.getPosts()
    }

    getPosts = async () => {
        const result = await API.graphql(graphqlOperation(listPosts))
        console.log("All posts: " + JSON.stringify(result.data.listPosts))
        this.setState({ posts: result.data.listPosts.items })
    }

    render() {
        const { posts } = this.state

        return posts.map(( post ) => {
            return (
                <div className="posts" key={ post.id }>
                   <h1>{ post.postTitle }</h1>
                    <span>
                     { post.postBody }<br />
                     { post.id }
                    </span>
                    <br />
                </div> 
            )
        }
        )
    }
}


const arrays = ['sports', 'hobbies', 1, {
    name: 'israel',
    last: 'morales'
}]

console.log(arrays)

export default DisplayPost