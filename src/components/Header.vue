<!---<template>
<nav class="dropdownmenu">
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="add">Add Restaurant</router-link></li>
    <li><router-link to="update">Update Restaurant</router-link></li>
    <li><a v-on:click = "logout" href="#">Logout</a></li> 
  </ul>
</nav><br/>

</template>
<script>
export default {
  name: 'Header',
  methods:{
    logout(){
        localStorage.clear()
        this.$router.push({name:'Login'})
    }
  }
}
</script>
<style>
.dropdownmenu ul, .dropdownmenu li {
	margin: 0;
	padding: 0;
}
.dropdownmenu ul {
	background: gray;
	list-style: none;
	width: 100%;
}
.dropdownmenu li {
	float: left;
	position: relative;
	width:auto;
}
.dropdownmenu a {
	background: #30A6E6;
	color: #FFFFFF;
	display: block;
	font: bold 12px/20px sans-serif;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	-webkit-transition: all .25s ease;
	-moz-transition: all .25s ease;
	-ms-transition: all .25s ease;
	-o-transition: all .25s ease;
	transition: all .25s ease;
}
.dropdownmenu li:hover a {
	background: #000000;
}
#submenu {
	left: 0;
	opacity: 0;
	position: absolute;
	top: 35px;
	visibility: hidden;
	z-index: 1;
}
li:hover ul#submenu {
	opacity: 1;
	top: 40px;	/* adjust this as per top nav padding top & bottom comes */
	visibility: visible;
}
#submenu li {
	float: none;
	width: 100%;
}
#submenu a:hover {
	background: #DF4B05;
}
#submenu a {
	background-color:#000000;
}
</style>-->
<template>
<!doctype html>
<html lang="en">

<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Bootstrap CSS -->
<link href="./assets/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
<link href="./assets/css/owl.carousel.min.css" rel="stylesheet">
<link href="./assets/css/fonts.css" rel="stylesheet">
<link href="./assets/css/custom.css" rel="stylesheet">
<title>Zing - My Account</title>

</head>
<body>
	<header class="header-bg">
	<div class="container">
		<div class="logo">
			<a href="index.html"><img src="assets/images/logo.png" alt="Logo" width="79" height="77"></a>
		</div>
		<div class="main-menu-box">
			<div class="main-menu">
				<div class="menu-top-container">
					<ul class="main-ul mpl-zero">
						<li class="nav-item">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link" href="category.html">Products</a>
							<div class="sub-menu">
								<div class="container">
									<div class="row">
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Power Banks</a></div>
											<ul>
												<li><a href="#">Power Bank</a></li>
												<li><a href="#">Power Bank w/Travel Zip Case</a></li>
												<li><a href="#">Power Bank w/Velvet Pouch</a></li>
												<li><a href="#">Power Bank Cases</a></li>
												<li><a href="#">Power Bank (Plastic Presentation Case)</a></li>
												<li><a href="#">Zing's 2600mAh Power Bank Gift Set </a></li>
												<li><a href="#">5200mAh Power Bank</a></li>
												<li><a href="#">5200mAh Power Bank w/ Travel Zip Case</a></li>
												<li><a href="#">5200mAh Power Bank w/ Velvet Pouch</a></li>
												<li><a href="#">8000mAh Power Bank Series</a></li>
												<li><a href="#">Zing's 5200mAh Power Bank Gift Set </a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Beverage</a></div>
											<ul>
												<li><a href="#">Beverage Accessories</a></li>
												<li><a href="#">Ceramics</a></li>
												<li><a href="#">Hot/Cold Stainless Steel</a></li>
												<li><a href="#">Flasks</a></li>
												<li><a href="#">Glassware by Zing (Made in the USA)</a></li>
												<li><a href="#">Water Bottles</a></li>
												<li><a href="#">Zing Tailgate Can</a></li>
												<li><a href="#">Zing Stadium Cup</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Desk & Office</a></div>
											<ul>
												<li><a href="#">Business Card Holders</a></li>
												<li><a href="#">Desk Accessories</a></li>
												<li><a href="#">Desk Clocks</a></li>
												<li><a href="#">Money Clips</a></li>
												<li><a href="#">Padfolios &amp; Executive Items</a></li>
												<li><a href="#">Swivel USB Thumb Drive</a></li>
												<li><a href="#">Office Gadgets</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Gift Sets</a></div>
											<ul>
												<li><a href="#">Zing Laser Engraved Color Lid Gift Sets</a></li>
												<li><a href="#">Customizable Gift Set Boxes</a></li>
												<li><a href="#">Premium Made Gift Sets</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Writing Instruments</a></div>
											<ul>
												<li><a href="#">Ballpoint Pens</a></li>
												<li><a href="#">Fountain Pens</a></li>
												<li><a href="#">Mechanical Pencils</a></li>
												<li><a href="#">Pen Sets</a></li>
												<li><a href="#">Rollerball Pens</a></li>
												<li><a href="#">Stylus/Pen Combinations</a></li>
												<li><a href="#">Pen Boxing Options</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Clearance</a></div>
											<ul>
												<li><a href="#">Writing Clearance </a></li>
												<li><a href="#">Drinkware Clearance</a></li>
												<li><a href="#">Holiday Clearance </a></li>
												<li><a href="#">Desk and Office</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Golf</a></div>
											<ul>
												<li><a href="#">Golf Accessories</a></li>
												<li><a href="#">Putters</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Travel</a></div>
											<ul>
												<li><a href="#">Luggage Tags</a></li>
												<li><a href="#">Travel Accessories</a></li>
											</ul>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Key Tags</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">License Plate Frames</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Ornaments</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Picture Frames</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Tools & Knives</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">New Products</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Tech Accessories</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Wearable Accessories</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Silicone</a></div>
										</div>
										<div class="col-12 col-md-3">
											<div><a href="category.html" class="menu-heading">Ultra-Suede</a></div>
										</div>
									</div>	
								</div>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="catalog.html">Catalog & Media</a>						
						</li>
						<li class="nav-item">
							<a class="nav-link" href="about-us.html">About ZingMfg</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="javaScript:void(0);">Distributor Tools</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="https://swell.zingmfg.com/" target="_blank">S'well by Zing</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="career.html">Career</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Main Menu End -->
		
		<div class="header-right-lnk">
			<ul class="navbar mpl-zero">
				<li class="nav-item search_box">
					<div class="search-box">
						<div class="search-inner-box">
							<form class="search_form w-100">
								<div class="form-group w-100">
									<input type="text" class="form-control w-100" placeholder="Search...">
								</div>
								<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
							</form>
							<a href="javaScript:void(0);" class="remove-search"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path></svg></a>
						</div>						
					</div>					
					<a class="nav-link search_link" href="javascript:void(0);">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
					</a>
				</li>			
				<li class="nav-item dropdown">
					<a class="nav-link" href="javascript:void(0);" id="head-user-menu" role="button" data-toggle="dropdown">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
					</a>
					<ul class="dropdown-menu" aria-labelledby="head-user-menu">
						<li class="user-name-bg">
							<span class="welcome"><small>Welcome</small><b>MK</b></span>
						</li>
						<li><a class="dropdown-item active" href="my_account.html">My Account</a></li>
						<li><a class="dropdown-item" href="login.html">Logout</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="cart.html">
					<span class="position-relative">
					<span class="cart-counter">5</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
					</svg>
					</span>
					</a>
				</li>
				<li class="nav-item mob-icon">
					<a href="javascript:void(0);" class="mobile_menu ms-2" aria-label="Mobile Bar Icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>
					</a>
					<a href="javascript:void(0);" class="remove_mobile_menu d-none ms-2" aria-label="Hide Mobile Bar Icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path></svg>
					</a>
				</li>
			</ul>
		</div>		
	</div>
</header>
</template>