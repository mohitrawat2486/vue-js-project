<template>
<footer class="footer-bg">
	<div class="newletter-area">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-xl-9">
					<div class="row align-items-center">
						<div class="col-12 col-md-6 col-xl-auto">
							<div class="d-flex flex-wrap flex-md-nowrap align-items-center">
								<div class="col-12 col-md-auto px-0 mb-3 mb-md-0 me-md-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg></div>
								<div class="col-12 col-md-auto px-0 text-center text-md-start">
									<h4 class="heading">Get Special Offers and Savings</h4>
									<p class="mb-0">Get all the latest information on Events, Sales and Offers.</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-xl-5 my-3 my-xl-0">
							<form>
								<div class="form-group">
									<input type="email" placeholder="Email Address" class="form-control">
								</div>
								<button type="submit">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/></svg>
								</button>
							</form>
						</div>
					</div>
				</div>
				<div class="col-12 col-xl-3">
					<ul class="mpl-zero social-icons justify-content-center justify-content-xl-end">
						<li>
							<a href="javascript:void(0);">
								<i class="bi bi-twitter"></i>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<i class="bi bi-instagram"></i>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<i class="bi bi-youtube"></i>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<i class="bi bi-pinterest"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="container footer-txt">
		<div class="row">
			<div class="col-md-12 col-lg-4 col-xl-4 pe-md-5">
				<div class="footer-logo mb-3">
					<img src="assets/images/logo.png" alt="Footer Logo">
					<p class="my-4">Zing Manufacturing has been a leader in the promotional products...</p>
				</div>
				<div class="footer-contact-cls">
					<div class="text-uppercase">Questions?</div>
					<a href="tel:0-00-000-0000">0-00-000-0000</a>
				</div>	
			</div>
			<div class="col-sm-6 col-lg-4 col-xl-2">
				<h5 class="footer-heading">Store</h5>
				<ul class="mpl-zero">
					<li><a href="#">Product</a></li>
					<li><a href="#">Color</a></li>
					<li><a href="#">Special</a></li>
					<li><a href="#">Info</a></li>
				</ul>
			</div>
			<div class="col-sm-6 col-lg-4 col-xl-2">
				<h5 class="footer-heading">My Account</h5>
				<ul class="mpl-zero">
					<li><a href="my_account.html">My Account</a></li>
					<li><a href="#">Forgot</a></li>
					<li><a href="#">Password</a></li>
				</ul>
			</div>
			<div class="col-sm-6 col-lg-4 col-xl-2">
				<h5 class="footer-heading">Notices & Policies</h5>
				<ul class="mpl-zero">
					<li><a href="privacy-terms.html">Privacy & Terms</a></li>
				</ul>
			</div>
			<div class="col-sm-6 col-lg-4 col-xl-2">
				<h5 class="footer-heading">Company</h5>
				<ul class="mpl-zero">
					<li><a href="about-us.html">About Zing</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12 copyright-area text-center py-3">
				<small>&copy; Zing Manufacturing, LLC 2022. All Rights Reserved.</small>
			</div>
		</div>
	</div>
</footer>


<!-- Modal Edit Address -->
<div class="modal fade" id="editaddressModal" tabindex="-1" aria-labelledby="editaddressLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editaddressLabel">Edit Address</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
		<form>
			<div class="row">
				<div class="mb-2 col-lg-6">
					<label for="FirstName" class="form-label">First Name</label>
					<input type="text" class="form-control" id="FirstName" aria-describedby="FirstName">
				</div>
				<div class="mb-2 col-lg-6">
					<label for="LastName" class="form-label">Last Name</label>
					<input type="text" class="form-control" id="LastName" aria-describedby="LastName">
				</div>
				<div class="mb-2 col-lg-12">
					<label for="address" class="form-label">Addresss</label>
					<input type="text" class="form-control" id="address" aria-describedby="address">
				</div>
				<div class="mb-2 col-lg-12">
					<label for="address2" class="form-label">Addresss 2</label>
					<input type="text" class="form-control" id="address2" aria-describedby="address2">
				</div>
				<div class="mb-2 col-lg-12">
					<label for="city" class="form-label">City</label>
					<input type="text" class="form-control" id="city" aria-describedby="city">
				</div>
				<div class="mb-2 col-lg-12">
					<label for="country" class="form-label">Country</label>
					<select class="form-select" id="country" aria-label="Select Country">
					  <option selected>--Select Country--</option>
					  <option value="1">One</option>
					  <option value="2">Two</option>
					  <option value="3">Three</option>
					</select>
				</div>
				<div class="mb-2 col-lg-12">
					<label for="zipcode" class="form-label">Postal/Zip Code</label>
					<input type="text" class="form-control" id="zipcode" aria-describedby="zipcode">
				</div>
				<div class="mb-2 col-lg-12">
					<label for="phnum" class="form-label">Phone Number</label>
					<input type="text" class="form-control" id="phnum" aria-describedby="phnum">
				</div>
				<div class="mb-2 form-check col-lg-12 ps-1">
					<input type="checkbox" class="form-check-input mx-2" id="address_default_address">
					<label class="form-check-label" for="address_default_address">Set as default address</label>
				</div>	
			</div>
		</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn reverse-glb-btn" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn glb-btn">Save changes</button>
      </div>
    </div>
  </div>
</div>

<script src="./assets/js/jquery-3.6.1.min.js"></script>
<script src="./assets/js/bootstrap.bundle.min.js"></script>
<script src="./assets/js/owl.carousel.min.js"></script>
<script src="./assets/js/masonry.min.js"></script>
<script src="./assets/js/custom.js"></script>
</body>
</html>
</template>