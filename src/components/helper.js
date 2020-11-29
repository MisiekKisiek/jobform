import React from 'react';

//Bootstrap
import { OverlayTrigger, Popover } from 'react-bootstrap';

//Styles
import formStyles from '../styles/form.module.scss';

const Helper = ({ popoverTitle, popoverContent }) => {

  const hoursPopover = (
    <Popover id="hoursPopover">
      <Popover.Title as="h3">{popoverTitle}</Popover.Title>
      <Popover.Content>
        {popoverContent}
      </Popover.Content>
    </Popover>
  )

  const hoursTooltip = (
    <OverlayTrigger trigger="click" placement="right" overlay={hoursPopover}>
      <span className={formStyles.helper}>?</span>
    </OverlayTrigger>
  )
  return (<>
    {hoursTooltip}
  </>);
}

export default Helper;