import React, { ReactNode } from 'react';
import { v4 } from 'uuid';
/**
 * Props for the SubWidget component.
 */
interface SubWidgetInterface {
  children: ReactNode;
  title?: Array<string>;
}

/**
 * SubWidget component for displaying content with a title.
 * @param {SubWidgetInterface} props - The props for SubWidget.
 * @returns {JSX.Element} - JSX for SubWidget component.
 */
const SubWidget: React.FC<SubWidgetInterface> = ({ children, title }) => {
  return (
    <div className="sub-widget">
          {Array.isArray(title) && title.map((line) => (
            <h5 key={v4()}>{line}</h5>
          ))}
        <div className="sub-widget-content">
            {children}
        </div>
    </div>
  );
};

export default SubWidget;
