import React, { ReactNode } from 'react';

/**
 * Props for the SubWidget component.
 */
interface SubWidgetInterface {
  children: ReactNode;
  title: string;
}

/**
 * SubWidget component for displaying content with a title.
 * @param {SubWidgetInterface} props - The props for SubWidget.
 * @returns {JSX.Element} - JSX for SubWidget component.
 */
const SubWidget: React.FC<SubWidgetInterface> = ({ children, title }) => {
  return (
    <div className="sub-widget">
        <h5>{title}</h5>
        <div className="sub-widget-content">
            {children}
        </div>
    </div>
  );
};

export default SubWidget;
