import * as React from 'react';

interface IProps {
    name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark header-sticky is-sticky">
    {/*  <nav className="navbar navbar-expand-lg navbar-light bg-light header-sticky">
     </nav> */}
    <div className="container text-white bg-dark">
        {/* <img src="../../assets/log" alt="Company Logo"/> */}
        
        <a className="navbar-brand" href="/"> <span> SpaceX Launch Programs</span></a>
        <button className="navbar-toggler" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>
        <nav id="navbarSupportedContent" className="collapse navbar-collapse" >
            <ul data-toggle="collapse" data-target=".navbar-collapse.show" className="navbar-nav ml-auto">
                <li className="nav-item"> <a href="/about" className="nav-link text-white">About</a> </li>
                <li className="nav-item"> <a href="/team" className="nav-link text-white">Team</a> </li>
                <li className="nav-item"> <a href="/services" className="nav-link text-white">Service</a> </li>
                <li className="nav-item"> <a href="/blog" className="nav-link text-white">Blog</a> </li>
                <li className="nav-item"> <a href="/carrier" className="nav-link text-white">Carrier</a> </li>
                <li className="nav-item"> <a href="/contact" className="nav-link text-white">Contact</a> </li>
                
            </ul>
        </nav>
    </div>
    {/* <div className="contact-form">
     <h3> Stay Connected</h3>
     <form>
        <div className='row'>
            <div className="col-lg-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>
            </div>
            <div className="col-lg-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className="form-control" />
                </div>
            </div>
            <div className="col-lg-12 col-md-12">
                <div className="form-group">
                    <label htmlFor="">Messages</label>
                    <input type="email" name="email" className="form-control" />
                </div>
            </div>
            <div className="col-lg-12 col-md-12">
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
            </div>

        </div>
     </form>
    </div> */}
    </nav>

);

Header.defaultProps = {
    name: 'hello world',
}

export default Header;