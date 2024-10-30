import './styles.css';
import React from 'react';

const PageHeaderContent: React.FC<{
  headerText: React.ReactNode;
  icon: React.ReactNode;
}> = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
