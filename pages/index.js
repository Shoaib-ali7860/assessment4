import Head from 'next/head'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TelegramIcon from '@material-ui/icons/Telegram';
import PublicIcon from '@material-ui/icons/Public'
import Navbar from './layout'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
      <div className="background-grey">
    
        <section>
          <div className="landing-image-container  "  >
             <div className=" ml-md-4">
                 <div className=" pt-2 mr-md-5 mr-3 offset-1" >
                <div className="text-white d-flex justify-content-between margin-right "> 
                  <p className="nav-flatty-text">FLATTY</p>
                  <p className=" nav-member-text">Already a member?</p>
                </div>
                <div className="row">
                  <div className=" col-md-7 col-lg-5 text-white  landing-div-top" >
                    <div className="landing-page-text">
                          <p>Make your landing page look really good.</p>
                    </div>
                    <div className="d-flex">
                         <input type="text"  placeholder="Enter your email address " className="input-size  rounded p-1 " />
                         <button className="btn btn-warning rounded ml-1 text-white ">Invite Me!</button>
                    </div>
                </div>
               </div>

              </div>

             </div>
          </div>
        </section>
        <section className="container-fluid" >
              <div className="mt-5 row  m-0 ">
                  <div className="text-center mx-auto col-xl-6 col-md-10 "  >
                    <p  className=" your-landing-heading mx-auto">Your Landing Page Looks Wonderful Now.</p>
                    <p className=" your-landing-content  mx-auto" >   it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                  </div>
              </div>
              <div className="mt-5 container-main  "  >
                    <section>
                       <div className="row m-0 ">
                                <div className="col-md-4 text-center ">
                                          <img src="/chrome.png" className="image-size"/>
                                          <div className="mt-3">
                                            <h4 className="text-light-grey">1 - Browser Compatibility</h4>
                                            <p className="text-light-grey">
                                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                          </div>
                                </div>
                                <div className="col-md-4 text-center ">
                                          <img src="/email.png" className="image-size"/>
                                          <div className="mt-3 text-light-grey">
                                            <h4>2 - Email Compaigns</h4>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                          </div>
                                </div>

                                <div className="col-md-4 text-center ">
                                          <img src="/doc.png" className="image-size"/>
                                          <div className="mt-3 text-light-grey">
                                            <h4>3 - Gather Your Notes</h4>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                          </div>
                                </div>
                               
                               
                       </div>
                       <hr className="horizontal-line "/>
                       <div className="d-flex justify-content-center">
                         <input type="text"  placeholder="Enter your email address " className="input-size rounded p-1 " />
                         <button className="btn btn-warning rounded ml-1 text-white ">Invite Me!</button>
                    </div>
                    <hr className="horizontal-line "/>
                    </section>
                    <section className="text-center">
                        <div className="mt-5 row  m-0 ">
                           <div className="mx-auto col-xl-6 col-md-10 "  >
                               <p  className=" your-landing-heading mx-auto">Flatty is for Everyone.</p>
                               <p className=" your-landing-content  mx-auto" >   it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                           </div>
                       </div>
                       <div className="row ">
                              <div className="col-md-6 mx-auto col-10">
                                   <img src="/mobile.png" width="100%"/>
                              </div>
                       </div>
                       <hr className="horizontal-line "/>
                       <div className="d-flex justify-content-center">
                         <input type="text"  placeholder="Enter your email address " className="input-size rounded p-1 " />
                         <button className="btn btn-warning rounded ml-1 text-white ">Invite Me!</button>
                    </div>
                    <hr className="horizontal-line "/>
                    </section>
                    
                   <section>
              <div className="mt-5 row  m-0 ">
                           <div className="mx-auto col-xl-6 col-md-10 text-center  "  >
                               <p  className=" your-landing-heading mx-auto">Our Awesome Team Design Lovers.</p>
                               <p className=" your-landing-content  mx-auto" >   it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                           </div>
                       </div>
                       <div className="row m-0  my-5">
                                <div className="col-md-4 text-center  ">
                                          <img src="https://i.pravatar.cc/150?img=51" className="avtar image-size"/>
                                          <div className="mt-3 text-light-grey">
                                            <h4>1 - Micheal Robson</h4>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                          </div>
                                          <div>
                                              <TelegramIcon className="text-primary"/>
                                              <PhoneAndroidIcon className="ml-2 text-primary"/>
                                              <PublicIcon className="ml-2 text-primary"/>
                                          </div>
                                </div>
                                <div className="col-md-4 text-center mt-md-0 mt-4 ">
                                          <img src="https://i.pravatar.cc/150?img=60" className="avtar image-size"/>
                                          <div className="mt-3 text-light-grey">
                                            <h4>2 - Pete Ford</h4>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                          </div>
                                          <div>
                                              <TelegramIcon className="text-primary"/>
                                              <PhoneAndroidIcon className="ml-2 text-primary"/>
                                              <PublicIcon className="ml-2 text-primary"/>
                                          </div>
                                </div>

                                <div className="col-md-4 text-center mt-md-0 mt-4">
                                          <img src="https://i.pravatar.cc/150?img=47" className="avtar image-size"/>
                                          <div className="mt-3 text-light-grey">
                                            <h4>3 - Angelica Fining</h4>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                          </div>
                                          <div>
                                              <TelegramIcon className="text-primary"/>
                                              <PhoneAndroidIcon className="ml-2 text-primary"/>
                                              <PublicIcon className="ml-2 text-primary"/>
                                          </div>
                                </div>
                               
                               
                       </div>
                       <hr className="horizontal-line "/>
                       <div className="d-flex justify-content-center">
                         <input type="text"  placeholder="Enter your email address " className="input-size rounded p-1 " />
                         <button className="btn btn-warning rounded ml-1 text-white ">Invite Me!</button>
                    </div>
                  
                       
              </section>
                   <section>
                     <div className=" text-center pt-5 mt-5">
                             <p className="your-landing-heading text-center  mx-auto m-0">Contact us</p>
                           <div className="row m-0 mt-3  ">
                           <form className="col-md-7  mx-auto ">
                               <input placeholder="Your Name"  className="w-100 form-input mt-0 p-2 "/>
                               <input placeholder="Your Email"  className="w-100 form-input mt-3 p-2"/>
                               <input placeholder="Subject"  className="w-100 form-input mt-3 p-2"/>
                               <textarea placeholder="Your Message"  className="w-100 form-input mt-3 p-2"/>
                               <button className="btn btn-warning text-white pr-4 p-3 pl-4 mt-3 mb-5 p-2">Send Message</button>
                           </form>
                           </div>
                     </div>
                   </section>
              </div>


        </section>
       
      </div>
      </Navbar>
    </div>
  )
}
