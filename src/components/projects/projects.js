import React from 'react'
import './projects.css'

export default class Projects extends React.Component {

    render(){
        return(
            <div className= "projectPage">
                <h1 id= "header">PROJECTS</h1>
               <div className="projectBody">
                    <div className= "Full Stack Websites">
                        <h1>Full Stack Websites</h1>
                        <ul>
                            <li>
                                <h2>
                                    To Do List
                                </h2>
                                <p>
                                    Github Links:
                                    <a href= "https://github.com/KaydenClark/ToDoListCLient"> Front End </a>
                                    -
                                    <a href= "https://github.com/KaydenClark/ToDoListAPI"> API </a>
                                </p>
                                <p>
                                    This application uses full CRUD functionality inside my REST API to display lists that can be created, read, updated, and deleted. This applications front end was crated in react.js and has a basic login system
                                </p>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className= "Code Playground">
                        <h1>
                            Code Playground
                        </h1>
                        <ul>
                            <li>
                                <h2>
                                    MergeSort - JavaScript
                                </h2>
                                <p>
                                    <a href= "https://github.com/KaydenClark/mergeSort">Github</a>
                                </p>
                                <p>
                                    This is a merge sort algorithm that I have made and expereminted with using it to sort arrays alphabetically
                                </p>
                            </li>
                            <li>
                                <h2>
                                    CSS LED Backlit Colors - CSS
                                </h2>
                                <p>
                                    <a href= "https://github.com/KaydenClark/colorPractice">Github</a>
                                </p>
                                <p>
                                    This is an example of the extent that CSS 3 and HTML 5 can acomplish. In this project I took the basic word hello and made it 3d and then behind the word I created lights that cycle between RGB that give the illusion that the Hello is back lit with LED lights. Every gamers dream.
                                </p>
                            </li>
                            <li>
                                <h2>
                                    Clicker Game - JavaScript
                                </h2>
                                <p>
                                    <a href= "https://github.com/KaydenClark/ButtonGame">Github</a>
                                </p>
                                <p>
                                    This is an example I made while testing ways of manipulating the DOM. Clicking the button updates the number of times it has been clicked and then based on the number of clicks the DOM will update to somthing new. 
                                </p>
                            </li>
                            <li>
                                <h2>
                                    CDM Christmas Tree - Python
                                </h2>
                                <p>
                                    <a href= "https://github.com/KaydenClark/CMDChristmasTree">Github</a>
                                </p>
                                <p>
                                    A christmas is printed into the kernel and then it updated to change colors on the ordemnts and start at the top of the tree. This is done using threading so that the ordemnts do not have to take turns changing. the red and blue ordemnts can be running at the same time.
                                </p>
                            </li>
                            <li>
                                <h2>
                                    NameTag - HTML
                                </h2>
                                <p>
                                    <a href= "https://github.com/KaydenClark/nametag">Github</a>
                                </p>
                                <p>
                                    This is an example of flex boxes and css where a nametag can be manipulated through the DOM
                                </p>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        )
    }
}