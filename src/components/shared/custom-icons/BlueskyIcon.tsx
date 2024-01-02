import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const blueskySvg = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bluesky_butterfly-logo.svg';

const BlueskyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <img
        src={blueskySvg}
        alt='Bluesky'
      />
    </SvgIcon>
  );
};

export default BlueskyIcon;
