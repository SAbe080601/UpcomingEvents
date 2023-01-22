/**
 * Author: Shinya Abe
 * Project: Hanlon Lab Assistant 1st Round Interview Test
 * Date: 1/22/23
 */

import './App.css';
import stevensLogo from './img/stevensLogo.jpg';
import stevensIcon from './img/stevensIcon.jpg';
import event1 from './img/event1.avif';
import event2 from './img/event2.avif';
import event3 from './img/event3.avif';
import event4 from './img/event4.avif';
import event5 from './img/event5.avif';
import event6 from './img/event6.avif';
import event7 from './img/event7.avif';
import event8 from './img/event8.avif';
import event9 from './img/event9.avif';

import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {FaPhone} from 'react-icons/fa';

import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {

  // Modal Stuff 
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleOpen1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleOpen2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleOpen3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleOpen4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleOpen5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleOpen6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleOpen7 = () => setShow7(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleOpen8 = () => setShow8(true);

  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleOpen9 = () => setShow9(true);
  

  return (
    <div className="flex-wrapper">
      <header className="App-header">
        <img alt='logo' src={stevensLogo}/>
      </header>

      <div class="col d-flex flex-column h-sm-100">
        <main class="row overflow-auto">
          <h1>Upcoming Events</h1>
            <div class="container">
              <div class="row">
                <div id="event1" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event1} alt="event1"/>
                  <div class ="card-body">
                    <h3 class="card-title"> Industry Torchbearers in Information Technology </h3>
                    <p class="card-text"> Join the IT Industry Torchbearers and Professor Yuping Huang for their January presentation.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event1Modal" onClick={handleOpen1}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event2" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event2} alt="event2"/>
                  <div class ="card-body">
                    <h3 class="card-title"> Julia Boorstin - When Women Lead </h3>
                    <p class="card-text"> Julia Boorstin, CNBC’s Senior Media & Tech Correspondent will discuss her book When Women Lead.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event2Modal" onClick={handleOpen2}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event3" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event3} alt="event3"/>
                  <div class ="card-body">
                      <h3 class="card-title"> Translation Aspects of Brain Modulation Therapy via Pulsed Low-Intensity Ultrasound </h3>
                      <p class="card-text"> Department of Biomedical Engineering</p>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event3Modal" onClick={handleOpen3}>
                        See More Details!
                      </button>
                  </div>
                </div>
                <div id="event4" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event4} alt="event4"/>
                  <div class ="card-body">
                    <h3 class="card-title"> Campus Point Connection: 'Eddie Allen Aggregation' Big Band</h3>
                    <p class="card-text"> The College of Arts and Letters welcomes the Eddie Allen Aggregation, a big band of jazz musicians. </p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event4Modal" onClick={handleOpen4}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event5" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event5} alt="event5"/>
                  <div class ="card-body">
                    <h3 class="card-title"> ECE Distinguished Lecture Series: Understanding Technical and Economic Limits to Power Grid Decarbonization</h3>
                    <p class="card-text"> Department of Electrical and Computer Engineering</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event5Modal" onClick={handleOpen5}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event6" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event6} alt="event6"/>
                  <div class ="card-body">
                    <h3 class="card-title"> Should We Grant Animals Rights Equal to Ours?</h3>
                    <p class="card-text"> A talk by philosopher Martha C. Nussbaum of the University of Chicago</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event6Modal" onClick={handleOpen6}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event7" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event7} alt="event7"/>
                  <div class ="card-body">
                    <h3 class="card-title"> Dual Plasmepsin IX/X Inhibitors: An Antimalarial Drug Discovery Collaboration</h3>
                    <p class="card-text"> Department of Chemistry and Chemical Biology</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event7Modal" onClick={handleOpen7}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event8" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event8} alt="event8"/>
                  <div class ="card-body">
                    <h3 class="card-title"> 100 Days 'Til Graduation</h3>
                    <p class="card-text"> The Senior Week Committee, in partnership with the Stevens Alumni Association, invites the Class of 2023 to register for 100 Days ‘til Graduation.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event8Modal" onClick={handleOpen8}>
                      See More Details!
                    </button>
                  </div>
                </div>
                <div id="event9" class="card col-sm-12 col-md-6 col-lg-4 col-xs-12 cardElement" >
                  <img class="card-img-top" src={event9} alt="event9"/>
                  <div class ="card-body">
                    <h3 class="card-title"> SES Dean's Distinguished Lecture Series - Special Lecture: Technologies within Electronic Warfare at L3Harris</h3>
                    <p class="card-text"> Schaefer School of Engineering and Science </p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#event9Modal" onClick={handleOpen9}>
                        See More Details!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
      </div>

      <Modal show={show1} onHide={handleClose1} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> Industry Torchbearers in Information Technology</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: Virtual Event
          <br/>
          Date: Jan 23, 2023
          <br/>
          Time: 7:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> Julia Boorstin - When Women Lead</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: Virtual Event
          <br/>
          Date: Jan 24, 2023
          <br/>
          Time: 6:00 PM to 7:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> Translational Aspects of Brain Modulation Therapy via Pulsed Low-Intensity Ultrasound</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: McLean Hall
          <br/>
          Date: Jan 26, 2023
          <br/>
          Time: 10:30 AM to 12:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> Campus Point Connection: 'Eddie Allen Aggregation' Big Band</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: DeBaun Performing Arts Center
          <br/>
          Date: Feb 2, 2023
          <br/>
          Time: 7:00 PM to 8:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show5} onHide={handleClose5} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> ECE Distinguished Lecture Series: Understanding Technical and Economic Limits to Power Grid Decarbonization</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: Burchard Building
          <br/>
          Date: Feb 8, 2023
          <br/>
          Time: 2:00 PM to 2:50 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>    

      <Modal show={show6} onHide={handleClose6} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> Should We Grant Animals Rights Equal to Ours?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: Virtual Event
          <br/>
          Date: Feb 8, 2023
          <br/>
          Time: 2:00 PM to 3:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> 

      <Modal show={show7} onHide={handleClose7} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> Dual Plasmepsin IX/X Inhibitors: An Antimalarial Drug Discovery Collaboration</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: Peirce Building
          <br/>
          Date: Feb 10, 2023
          <br/>
          Time: 1:00 PM to 2:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> 

      <Modal show={show8} onHide={handleClose8} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> 100 Days 'Til Graduation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: UCC TechFlex Auditorium
          <br/>
          Date: Feb 13, 2023
          <br/>
          Time: 4:00 PM to 6:00 PM
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show9} onHide={handleClose9} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> SES Dean's Distinguished Lecture Series - Special Lecture: Technologies within Electronic Warfare at L3Harris</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Location: The Gallery, University Center Complex
          <br/>
          Date: Feb 14, 2023
          <br/>
          Time: 4:00 PM 
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose9}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <footer class="footer">
        <div class="footer-content-left">
          <p>
          <img alt="stevensIcon" src={stevensIcon} /> 
          {' '} 
          <MdEmail /> 
          fscadmin@stevens.edu  
          {' '} 
          <FaPhone />  
          +1(201)216-5298 
          {' '}
          <a href="https://www.instagram.com/hanlonlab/"><FaInstagram size={42}/></a>
          <a href="https://twitter.com/hanlonlab"><FaTwitter size={42}/></a>
          <a href="https://www.facebook.com/hanlonlabs"><FaFacebook size={42}/></a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
