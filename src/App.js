import './App.css';
import avatar from './assets/avatar3.png';
import React, {Fragment, useState} from "react";
import axios from "axios";
import node from './assets/node.png'
import 'draft-js/dist/Draft.css';
import CustomEditor from "./Editor";
import useProject from "./hooks/useProject";


const API_URL = "http://localhost:3010";

const AdComponent = () => {

    useEffect(
        () => (window.adsbygoogle = window.adsbygoogle || []).push({}),
        []
    )

    return (
        <ins className='adsbygoogle'
             style={{ display: 'block' }}
             data-ad-client='ca-pub-9399136367222418'
             data-ad-slot='12121212'
             data-ad-format='auto' />
    )
}


const MessagesList = () => {
    return (
        <div></div>
    )
}

const LinkedinCard = () => {
    return (
        <div className="w3-container">
            <p><i className="fa fa-linkedin"/></p>
            <img
                src={"https://media-exp1.licdn.com/dms/image/C4D03AQH8YZCXFqszDA/profile-displayphoto-shrink_200_200/0/1621316374390?e=1626912000&v=beta&t=Uvs0beI41LMBbc2OwYCaqJR9HECgb51OaGx7-0yHxEU"}
                className="w3-circle" alt="Avatar" style={{width: "50%"}}/><br/>
            <span>Brian Odida . 1st</span>
            <p>Dev</p>
            <a href={"https://www.linkedin.com/in/brian-odida/"}
               className="w3-margin w3-button  w3-border w3-round-xxlarge">Connect</a>
        </div>
    )
}

const RightColumn = () => {
    return (
        <div className="w3-col m2">
            <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                    <p>Github</p>
                    <p><strong>OdidaProtas</strong></p>
                    <p>
                        <a href="https://github.com/OdidaProtas" className="w3-button w3-block w3-theme-l4"><i
                            className="fa fa-github"/></a>
                    </p>
                </div>
            </div>
            <br/>

            <div className="w3-card w3-round w3-white w3-center">
                <LinkedinCard/>
            </div>
            <br/>

            <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
                <AdComponent/>
            </div>
            <br/>

            <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p><i className="fa fa-moon w3-xxlarge"/></p>
            </div>

        </div>
    )
}

const CommentFeedbackEditor = () => {

    const feedback = useProject();

    return (
        <form onSubmit={feedback.handleFeedback}>
            {feedback.open ?
                <CustomEditor/>
                // <input required placeholder="Feedback" style={{marginBottom: 10}}
                //        className="w3-input w3-border"/>
                :
                null
            }
            <hr/>
            <button
                onClick={feedback.open ? null : feedback.toggle}
                type={feedback.open ? "submit" : "text"}
                className="w3-button w3-margin-bottom">
                {feedback.open ?
                    <i className="fa fa-paper-plane"/>
                    :
                    <i className="fa fa-comment"/>
                }
                <span style={{marginLeft: 10}}>
                        {feedback.open ? "Submit Feedback" : "Feedback"}
                    </span>
            </button>
        </form>
    )
}

const SMTPBackend = () => {


    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
            <ProjectTitle title="SMTP Email"/>
            <hr className="w3-clear"/>
            <div className="w3-row-padding" style={{margin: "0 -16px"}}>
                <form onSubmit={handleSubmit} className="w3-container">
                    <p>Get a random quote via email.</p>
                    <p><label>Email Address</label>
                        <input required onChange={handleChange} type="email" className="w3-input w3-border"
                               name="phoneNumber"/>
                    </p>
                    <p>
                        <button type="submit" className="w3-button w3-border" style={{marginBottom: 0}}>
                            Submit
                        </button>
                    </p>
                </form>
                <a style={{marginLeft: 20}} href="http://localhost:3010">More details about this project.</a>
            </div>
            <hr/>
            <CommentFeedbackEditor/>
        </div>

    )
}

const STKPush = () => {

    // const feedback = useProject();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }


    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
            <ProjectTitle title="STK Push. LNMExpress"/>
            <hr className="w3-clear"/>
            <div className="w3-row-padding" style={{margin: "0 -16px"}}>
                <form onSubmit={handleSubmit} className="w3-container">
                    <p>A simple implementation of Safaricom's MPESA Daraja API, for payment requests</p>
                    <p><label>Phone Number</label>
                        <input onChange={handleChange} type="number" className="w3-input w3-border"
                               name="phoneNumber"/>
                    </p>

                    <p><label>Amount</label>
                        <input onChange={handleChange} type="number" className="w3-input w3-border" name="amount"/>
                    </p>
                    <p>
                        <button type="submit" className="w3-button w3-border" style={{marginBottom: 0}}>
                            Request Payment
                        </button>
                    </p>
                </form>
                <a style={{marginLeft: 20}} href="http://localhost:3010">More details about this project.</a>
            </div>
            <hr/>
            <CommentFeedbackEditor/>
        </div>
    )
}

const ProjectTitle = (props) => {

    const {title} = props;

    return (
        <React.Fragment>
            <img src={node} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: "60px"}}/>
            <span className="w3-right w3-opacity"><i className="fa fa-github"/></span>
            <h4>{title}</h4><br/>
        </React.Fragment>
    )
}

const MiddleColumn = () => {


    const [state, setState] = useState({
        phoneNumber: "",
        loading: false,
        amount: "",
        error: false,
        errorText: "",
        message: "",
        messageError: false,
        messageLoading: false,
        messageSuccess: false,
    });


    const handleMessage = async (e) => {
        e.preventDefault();

        setState({...state, messageLoading: true});

        if (state.message !== "") {

            const data = {
                message: state.message,
                time: new Date().toDateString()
            }

            let res = await axios.post(`${API_URL}/message`, data);

            if (res.status === 200) {

                setState({...state, messageSuccess: true, messageError: false});

                setTimeout(
                    () => {
                        setState({
                            ...state,
                            messageSuccess: false,
                            messageLoading: false,
                            messageError: false,
                            message: ""
                        });
                    }, 2000)

            } else {
                setState({...state, messageError: true});
            }
        } else {
            console.log(state.message)
            setState({...state, messageError: true});
        }

    }

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value});
    }


    return (
        <div className="w3-col m7">
            <div className="w3-row-padding">
                <div className="w3-col m12">
                    <div className="w3-card w3-round w3-white">
                        <form onSubmit={handleMessage} className="w3-container w3-padding">
                            <h6 className="w3-opacity">Reach out</h6>
                            {/*<p contentEditable="true" className="w3-border w3-padding">Message: </p>*/}
                            <textarea
                                style={{marginTop: "20px"}}
                                onChange={handleChange}
                                placeholder="Message"
                                type="text"
                                required
                                value={state.message}
                                className="w3-input w3-border"
                                name="message"/>
                            {state.messageError ?
                                <strong className="w3-text-red">Message cannot be empty</strong> : null}
                            {state.messageSuccess ? <strong className="w3-text-green">Message sent</strong> : null}
                            <br/>
                            <button style={{marginTop: "5px"}} type="submit" className="w3-button">
                                {!state.messageLoading ? <>
                                        <i className="fa fa-paper-plane"></i>
                                        <span style={{marginLeft: 10}}>Send</span>
                                    </>
                                    :
                                    <span>Sending...</span>
                                }

                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <STKPush/>
            <SMTPBackend/>
        </div>

    )
}

const LeftColumn = () => {

    const [state, setState] = React.useState({
        accordion1: false,
        accordion2: false,
        accordion3: false
    });

    const toggle = (accordion) => {
        setState({...state, [accordion]: !state[accordion]})
    }


    return (
        <Fragment>
            <div className="w3-col m3">
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container">
                        <h4 className="w3-center">Brian Odida</h4>
                        <p className="w3-center"><img src={avatar} className="w3-circle"
                                                      style={{height: "106px", width: "106px"}}
                                                      alt="Avatar"/></p>
                        <hr/>
                        <p><i className="fa fa-tag fa-fw w3-margin-right w3-text-theme"></i> Software Developer</p>
                        <p><i className="fa fa-map-pin fa-fw w3-margin-right w3-text-theme"></i> Nairobi, Kenya</p>
                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i>bryodiiidah@gmail.com
                        </p>
                    </div>
                </div>
                <br/>

                <div className="w3-card w3-round">
                    <div className="w3-white">
                        <button onClick={() => toggle("accordion1")}
                                className="w3-button w3-block w3-theme-l1 w3-left-align"><i
                            className="fa fa-code fa-fw w3-margin-right"></i> Programming Languages
                        </button>
                        {state.accordion1 ?
                            <div id="Demo1" className="w3-container">
                                <p>Javascript / Typescript</p>
                                <p>Java</p>
                                <p>Python</p>
                                <p>SQL</p>
                                <p>Kotlin</p>
                                <p>Dart</p>
                                <small>Markup and stylesheets</small>
                                <p>HTML</p>
                                <p>XML</p>
                                <p>CSS</p>
                            </div>
                            :
                            null
                        }

                        <button onClick={() => toggle("accordion2")}
                                className="w3-button w3-block w3-theme-l1 w3-left-align"><i
                            className="fa fa-cubes fa-fw w3-margin-right"></i> Frameworks and Libraries
                        </button>
                        {state.accordion2 ?
                            <div id="Demo2" className=" w3-container">
                                <p>React.js, Angular, Vue.js, React Native</p>
                                <p>Node.js, Spring Boot, Spark, Django</p>
                                <p>Android, Flutter, Capacitor </p>
                                <p>Bootstrap, Material UI, React Native Paper</p>
                                <p>TypeORM, Express, Socket.io</p>
                                <p>Tensorflow, PyTorch, OpenCV</p>
                                <p>PostgreSQL</p>
                            </div>
                            :
                            null
                        }

                        <button onClick={() => toggle("accordion3")}
                                className="w3-button w3-block w3-theme-l1 w3-left-align"><i
                            className="fa fa-wrench fa-fw w3-margin-right"></i> Other Tools / Skills
                        </button>
                        {state.accordion3 ?
                            <div id="Demo3" className="w3-container">
                                <div className="w3-row-padding">
                                    <p>Git</p>
                                    <p>CI / CD</p>
                                    <p>REST</p>
                                    <p>Azure</p>
                                    <p>Smart Things</p>
                                </div>
                            </div>
                            :
                            null}
                    </div>
                </div>
                <br/>

                <div className="w3-card w3-round w3-white w3-hide-small">
                    <div className="w3-container">
                        <p>Interests</p>
                        <p>
                            <span className="w3-tag w3-small w3-theme-d5">E-Commerce</span>
                            <span className="w3-tag w3-small w3-theme-d4">Cloud Computing</span>
                            <span className="w3-tag w3-small w3-theme-d3">BlockChain and Cryptography</span>
                            <span className="w3-tag w3-small w3-theme-d2">Smart Things</span>
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme-d1">Hiking</span>-->*/}
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme">HTML</span>-->*/}
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme-l1">Dart</span>-->*/}
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme-l2">CSS</span>-->*/}
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme-l3">Kotlin</span>-->*/}
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme-l4">Art</span>-->*/}
                            {/*// <!--                        <span class="w3-tag w3-small w3-theme-l5">Photos</span>-->*/}
                        </p>
                    </div>
                </div>
                <br/>

                <div
                    className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                    <p><strong>Hey!</strong></p>
                    <p>People are looking at your profile. Find out who.</p>
                </div>
            </div>
        </Fragment>
    )
}

const PageContainer = () => {
    return (
        <div className="w3-container w3-content" style={{maxWidth: "1400px", marginTop: "80px"}}>
            <div className="w3-row">
                <LeftColumn/>
                <MiddleColumn/>
                <RightColumn/>
            </div>
        </div>
    )
}

const NavBar = () => {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                <a href="http://locolhost:3010" className="w3-bar-item  w3-padding-large w3-theme-d4">Dreamer</a>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="w3-container w3-theme-d5">
            <p>2021</p>
        </footer>
    )
}

function App() {
    return (
        <div>
            <NavBar/>
            <PageContainer/>
            <MessagesList/>
            <Footer/>
        </div>
    );
}

export default App;
