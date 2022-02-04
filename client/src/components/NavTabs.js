import React from 'react';

function NavTabs(props) {
  const tabs = ['Home', 'Schedule', 'Signup', 'Login'];
  return (
    <div>
      <h1>Wanderosa!</h1>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default NavTabs;