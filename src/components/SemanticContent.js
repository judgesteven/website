import React from 'react';

const SemanticContent = ({ 
  children, 
  as = 'section', 
  className = '', 
  id,
  itemScope,
  itemType,
  itemProp,
  ...props 
}) => {
  const Component = as;
  
  return (
    <Component
      className={className}
      id={id}
      itemScope={itemScope}
      itemType={itemType}
      itemProp={itemProp}
      {...props}
    >
      {children}
    </Component>
  );
};

// Semantic wrapper components for common use cases
export const Article = ({ children, ...props }) => (
  <SemanticContent as="article" {...props}>
    {children}
  </SemanticContent>
);

export const Section = ({ children, ...props }) => (
  <SemanticContent as="section" {...props}>
    {children}
  </SemanticContent>
);

export const Header = ({ children, ...props }) => (
  <SemanticContent as="header" {...props}>
    {children}
  </SemanticContent>
);

export const Footer = ({ children, ...props }) => (
  <SemanticContent as="footer" {...props}>
    {children}
  </SemanticContent>
);

export const Main = ({ children, ...props }) => (
  <SemanticContent as="main" {...props}>
    {children}
  </SemanticContent>
);

export const Nav = ({ children, ...props }) => (
  <SemanticContent as="nav" {...props}>
    {children}
  </SemanticContent>
);

export const Aside = ({ children, ...props }) => (
  <SemanticContent as="aside" {...props}>
    {children}
  </SemanticContent>
);

export default SemanticContent; 