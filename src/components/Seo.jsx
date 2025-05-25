import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, children }) => {
  const siteTitle = "Larenway Consulting";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  );
};

export default Seo;