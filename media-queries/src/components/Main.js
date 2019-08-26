import React, {Component} from 'react';
import '../App.css'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggleTopBar: false
        }
        this.toggleTopBarFunc = this.toggleTopBarFunc.bind(this)
    }

  
    toggleTopBarFunc() {
        this.setState(prevState => {
            console.log("clicked")
          return {
            toggleTopBar: !prevState.toggleTopBar
          };
        });
      }

    render(){
        console.log(this.state)
        return (
            <body>
    <header>
        <div>
            <div>
                <a class="Bootstrap" href='#/services'>Start Bootstrap</a>
            </div>
            <button onClick={this.toggleTopBarFunc} class='navbar-menu'>Menu</button>
            <nav className={this.state.toggleTopBar ? "show" : ""}>
                <ul>
                    <li><a href='#/services'>Services</a></li>
                    <li><a href='#/portfolio'>Portfolio</a></li>
                    <li><a href='#/About'>About</a></li>
                    <li><a href='#/team'>Team</a></li>
                    <li><a href='#/contact'>Contact</a></li>
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


