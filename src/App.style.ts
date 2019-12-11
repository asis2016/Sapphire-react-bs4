import styled from "styled-components";
import {DefaultStyle} from "./assets/style";

interface IProps {
    selected?: boolean;
}

export const AppBase = styled.div<IProps>`

padding-top: 54px;
color: #868e96;
background-color: ${DefaultStyle.secondary};

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${DefaultStyle.primaryFont};
  font-weight: 700;
  color: ${DefaultStyle.quaternary};
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2rem;
}

p.lead {
  font-size: 1.15rem;
  font-weight: 400;
}

.subheading {
  font-weight: 500;
  font-family: ${DefaultStyle.secondaryFont};
  font-size: 1.5rem;
}

.sub-title{
 font-family: ${DefaultStyle.subTitleFont};
}

.bg-primary {
  background-color: ${DefaultStyle.primary};
}

.text-primary {
  color: ${DefaultStyle.tertiary} !important;
}

a {
  color: ${DefaultStyle.primary};
}

a:hover, a:focus, a:active {
  color: #824027;
}

/* Social Icons */
.social-icons a {
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: ${DefaultStyle.primary};
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: #BD5D38;
}

/* Resume section */
section.resume-section {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

/* Side Nav */ 
#sideNav {
  background-color: ${DefaultStyle.primary};
}

#sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 800;
    letter-spacing: 0.05rem;
    color: ${DefaultStyle.quaternary};
}

#sideNav .navbar-toggler:focus {
    outline-color: #d48a6e;
}

@media (min-width: 768px) {
    /* Resume section */
    section.resume-section {
      min-height: 100vh;
    }
    
    /* Resume section */
    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
}

@media (min-width: 992px) {
    
}

@media (min-width: 992px) {

    padding-top: 0;
    padding-left: 17rem;
    
    /* Resume section */
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    /* SideNav */
    #sideNav {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 17rem;
        height: 100vh;
    }
    
    #sideNav .navbar-brand {
        display: flex;
        margin: auto auto 0;
        padding: 0.5rem;
    }
    
    #sideNav .navbar-brand .img-profile {
        max-width: 10rem;
        max-height: 10rem;
        border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }
    
    #sideNav .navbar-collapse {
        display: flex;
        align-items: flex-start;
        flex-grow: 0;
        width: 100%;
        margin-bottom: auto;
    }
    
    #sideNav .navbar-collapse .navbar-nav {
        flex-direction: column;
        width: 100%;
    }
    
    #sideNav .navbar-collapse .navbar-nav .nav-item {
        display: block;
    }
    
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
        display: block;
    }

}
    
    

`;