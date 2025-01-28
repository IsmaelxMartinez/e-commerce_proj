import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text"></h5>
            <p class="grey-text text-lighten-4">
              Stay tuned as we update our site!
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Pages</h5>
            <ul>
              <li>
                <Link class="grey-text text-lighten-3" href="index.html">
                  Home
                </Link>
              </li>
              <li>
                <Link class="grey-text text-lighten-3" href="product.html">
                  Products
                </Link>
              </li>
              <li>
                <Link class="grey-text text-lighten-3" href="contact.html">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  class="grey-text text-lighten-3"
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <Link class="grey-text text-lighten-4 right" href="#!">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
