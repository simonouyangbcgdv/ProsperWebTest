import { Link } from 'gatsby';
import React from 'react';
import { useThemeUI } from 'theme-ui';
import { rhythm } from '../utils/typography';

interface LayoutProps {
  children: any;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useThemeUI();
  const header = (
    <h3>
      <Link to={`${__PATH_PREFIX__}`}>HOME</Link>
    </h3>
  );

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        color: theme.colors?.primary,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
