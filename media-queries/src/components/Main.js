import React, {Component} from 'react';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggleSideBar: false
        }
    }




    render(){
        return (
            <body>
    <header>
        <div>
            <div>
                <a class="Bootstrap" href='#/services'>Start Bootstrap</a>
            </div>
            <nav>
                <ul>
                    <li><a href='#/services'>Services</a></li>
                    <li><a href='#/portfolio'>Portfolio</a></li>
                    <li><a href='#/About'>About</a></li>
                    <li><a href='#/team'>Team</a></li>
                    <li><a href='#/contact'>Contact</a></li>
                    <li><button class='navbar-menu'>Menu</button></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        
         <div class="content">
             <h3>Welcome To Our Studio! </h3>
             <h1>It's Nice To Meet You</h1>
             <button>Tell Me More</button>
        </div>
  
    </main>
    
</body>

        )
    }
}


