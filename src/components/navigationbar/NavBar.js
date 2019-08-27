import React from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideAnchors, showAnchors } from '../../actions/anchorActions';

const printPDF = function printPDF(hideLinks, showLinks) {
    console.warn(hideLinks);
    hideLinks();
    const page = document.getElementById('overallPage');
    html2canvas(page)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 210;
            const pageHeight = 298;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            const doc = new JsPdf('p', 'mm');
            let position = 0;

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            doc.save('CV Pradipta Basu.pdf');
            showLinks();
        });
};

function openInternationalCV() {
    window.open(require('../../documents/Pradipta Basu.pdf'),'_none');
}

function openDetailedCV() {
    window.open(require('../../documents/Pradipta Basu - Detailed.pdf'),'_none');
}

// eslint-disable-next-line no-shadow
const NavBar = ({ hideAnchors, showAnchors, children }) => (
    <ul className="navBar">
        <li><a className="active" activeclassname="active" href="#home">English</a></li>
        <li><a activeclassname="active" href="#news">Deutsch</a></li>
        <li onClick={() => printPDF(hideAnchors, showAnchors)}><a activeclassname="active" href="#download">Export Online Profile</a></li>
        <li onClick={openInternationalCV}><a activeclassname="active" href="#download">Download CV</a></li>
        <li onClick={openDetailedCV}><a activeclassname="active" href="#download">Download Detailed Profile</a></li>
        <li style={{ float: "right" }} ><a activeclassname="active" href="#about">About</a></li>
    </ul>
    // <div>
    //     <button onClick={() => printPDF(hideAnchors, showAnchors)}>Download PDF</button>
    //     {children}
    // </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    hideAnchors,
    showAnchors,
}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(NavBar);

NavBar.propTypes = {
    hideAnchors: PropTypes.func.isRequired,
    showAnchors: PropTypes.func.isRequired,
    //children: PropTypes.shape
};
