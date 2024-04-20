import styled from "styled-components";

const StyleHeader = styled.section`


.nav-popover h5{
    font-size: 18px;
    margin-bottom: 0;
}
.nav-popover a{
    margin: 0 0;
}

.profileImage img{
    height: 30px;
    border-radius: 50%;
    width: 30px;
    object-fit: cover;
    object-position: top;
    margin-left: 11px;
    border: 2px #1977cc solid;
    cursor: pointer;
}
.hideTopHeader{
    display: none !important;
    transition: 1s!important;
}
.stickyHeader{
    top: 0 !important;
    transition: 1ms!important;
}
#header {
    background: #fff;
    transition: all 0.5s;
    z-index: 997;
    top: -10px;
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1);
}

#header.header-scrolled {
    top: 0;
}

#header .logo {
    font-size: 30px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: "Poppins", sans-serif;
}

#header .logo a {
    color: #2c4964;
}

#header .logo img {
    max-height: 120px;
}


.navbar {
    padding: 0;
}

.navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
}

.navbar li {
    position: relative;
}

.navbar>ul>li {
    position: relative;
    white-space: nowrap;
    padding: 8px 0 8px 20px;
}

.navbar a,
.navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #2c4964;
    white-space: nowrap;
    transition: 0.3s;
    border-bottom: 2px solid #fff;
    padding: 5px 2px;
    background-color: #f8f9fa; /* Background color for navbar headings */
}

.navbar a i,
.navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
    color: #002750;
    border-color: #1977cc;
}

.navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 20px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
}

.navbar .dropdown ul li {
    min-width: 200px;
}

.navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #082744;
    border: none;
}

.navbar .dropdown ul a i {
    font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
    color: #1977cc;
}

.navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}

.navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
}

@media (max-width: 1366px) {
    .navbar .dropdown .dropdown ul {
        left: -90%;
    }

    .navbar .dropdown .dropdown:hover>ul {
        left: -100%;
    }
}

.mobile-nav-toggle {
    color: #2c4964;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
    margin-left: 5px;
}

@media (max-width: 991px) {
    .mobile-nav-toggle {
        display: block;
    }

    #navbar ul {
        display: none;
    }
}

.appointment-btn {
    margin-left: 25px;
    background: #1977cc;
    color: #fff;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
}

.appointment-btn:hover {
    background: #166ab5;
    color: #fff;
}

@media (max-width: 768px) {
    .appointment-btn {
        margin: 0 15px 0 0;
        padding: 6px 18px;
    }
}


.mobile-menu-nav {
    list-style: none;
    font-size: 1.5rem;
    color: #1977cc !important;
    background-color: #fff; /* Background color for mobile menu */
    padding: 20px; /* Padding for mobile menu */
    border-radius: 10px; /* Rounded corners for mobile menu */
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1); /* Box shadow for mobile menu */
}

.mobile-menu-nav .icon {
    font-size: 2.5rem;
    margin-right: 15px;
}

.mobile-menu-nav li {
    margin-bottom: 10px;
    padding: 10px 0; /* Adjusted padding for mobile menu items */
}

.mobile-menu-nav li a {
    display: block; /* Make links block-level for full clickable area */
    padding: 10px; /* Padding for mobile menu links */
    color: #1977cc !important; /* Text color */
    transition: color 0.3s ease; /* Smooth transition on hover */
}

.mobile-menu-nav li a:hover {
    color: #002750; /* Hover color */
    background-color: #f5f5f5; /* Hover background color */
    border-radius: 5px; /* Rounded corners on hover */
}
`;

export default StyleHeader;