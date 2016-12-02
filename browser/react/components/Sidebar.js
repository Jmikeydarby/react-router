import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <Link to="/albums" activeClassName="active">
          ALBUMS
        </Link>
      </section>
      <section>
          <Link to="/artists" activeClassName="active">ARTISTS</Link>

      </section>
    </sidebar>
  );
}

export default Sidebar;
