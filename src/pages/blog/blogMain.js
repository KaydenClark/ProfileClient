import React from 'react'
import axios from 'axios'
import BlogTitles from './blogTitles'
import { Link } from "react-router-dom";
import { base } from '../../components/const'

const API = base

export default class Blog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
        }
    }

    renderTitles = async (titlesList) => {
        const posts = titlesList.map((title) =>
        <BlogTitles key= {title._id} title= {title.title} synopsis= {title.synopsis}/>)
        this.setState({posts})
    }

    getBlogTitlesAxios = async () => {
        const [blogTitles] = await Promise.all([
            axios.get(`${API}/blog`)
        ]) 
        // console.log(blogTitles.data.data)
        this.renderTitles(blogTitles.data.data)
    }

    componentDidMount = async () => {
        this.getBlogTitlesAxios()
    }

    render(){
        return(
            <div>
                <ul className= "blogList">
                    <li className= "blogTitle">
                        <Link to= "blog-post"> Blog -  </Link>
                    </li>
                    <li className= "blogTitle">
                        <Link to= "blog-post"> Blog -  </Link>
                    </li>
                    <li className= "blogTitle">
                        <Link to= "blog-post"> Blog -  </Link>
                    </li>
                </ul>
            </div>
        )
    }
}