import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}><Link style={{ color: '#fff' }} to='/#home'>Home</Link></li>
            <li onClick={close}><Link style={{ color: '#fff' }} to="/about">About</Link></li>
            <li onClick={close}><Link style={{ color: '#fff' }} to='/#projects'>Projects</Link></li>
            <li onClick={close}><a style={{ color: '#fff' }} href="mailto:t.tay921@gmail.com">Contact</a></li>
            <li onClick={close}><div className="social-icons">
                <a href="https://vimeo.com/taylortyson" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-vimeo-square" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/taylorose/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/t.aylo/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://github.com/ttay921" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github-square" aria-hidden="true" />
                </a>
            </div></li>

        </ul>
    </div>
);